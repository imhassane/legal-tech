const { hashPassword } = require('./helpers/password');

const sql = require('./sql/queries');

const {
    makeSchemaOfMember
} = require('./helpers/convert');

const members = async (_, {type, start, limit}, {pool}) => {
    try {
        let { rows } = await pool.query(sql.GET_MEMBERS, [type, start, limit]);
        return rows.map(r => makeSchemaOfMember(r));
    } catch(ex) {
        // TODO: logging.
    }
};

const member = async (_p, {id}, {pool, user, permissions}) => {
    try {
        let result = await pool.query(sql.GET_MEMBER, [id]);
        if(!result.rows || !result.rows.length)
            throw new Error("Désolé! Mais ce compte n'existe pas dans notre base de données");

        let member = result.rows[0];
        let _permissions = {};

        // If the current user id matches the given id
        // we pass the permissions we have in the context.
        if(member.cre_id === user) {
            _permissions = permissions;
        } else {
            result = await pool.query(sql.GET_MEMBER_PERMISSION, [member.cre_id]);
            _permissions = result.rows.map(r => r.permission);
        }

        return makeSchemaOfMember({ ...member, permissions: _permissions });
    } catch(ex) {
        // TODO: logging.
        throw ex;
    }
};

const me = async (parent, {data}, context) => {
    return member(parent, {id: context.user}, context);
};

const newMember = async (_p, {data}, {pool}) => {
    try {
        let {email, password} = data;
        email = email.toLowerCase().trim();
        password = password.trim();

        password = hashPassword(password);

        if(!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            throw new Error("L'adresse email n'est pas valide");

        if(password.length < 8)
            throw new Error("Le mot de passe doit contenir 8 caractères au moins");

        let values = [
            email, password
        ];
        
        const client = await pool.connect();
        
        try {
            await client.query('BEGIN');

            let result = await client.query(sql.MEMBER_EXISTS, [email]);

            result = result.rows[0];
            if(result)
                throw new Error("Cette adresse email est déjà utilisée");

            result = await client.query(sql.INSERT_CREDENTIALS, values);

            const cre_id = result.rows[0].cre_id;

            // Adding a default permission for all users.
            await client.query(sql.ADD_PERMISSION, [cre_id, 'WRITE_BLOG_POST']);

            values = [
                data.firstName,
                data.lastName,
                data.avatar,
                data.type,
                data.description,
                cre_id
            ];
            result = await client.query(sql.INSERT_MEMBER, values);
            await client.query('COMMIT');

            return makeSchemaOfMember(result.rows[0]);
        } catch(ex) {
            await client.query('ROLLBACK');
            client.release();
            throw ex;
        }
    } catch(ex) {
        // TODO: logging.
        throw ex;
    }
};

const updatePersonnalInformations = async () => {

};

const updateMemberType = async () => {};

const addMemberPermission = async (_p, {userId, permission}, {pool, user, permissions}) => {
    if(!user)
        throw new Error("Vous devez vous connecter pour éffectuer cette action");

    if(!permissions.includes("SUPREME"))
        throw new Error("Vous n'avez pas les permissions nécessaires pour ajouter une permission");

    if(!userId)
        userId = user;

    try {
        const { rows } = await pool.query(sql.VERIFY_MEMBER_PERMISSION, [userId, permission]);
        if(parseInt(rows[0].exists))
            throw new Error("Cette permission a déjà été attribuée à cet utilisateur");

        await pool.query(sql.ADD_PERMISSION, [userId, permission]);
        return permission;
    } catch(ex) {
        // TODO: Logging.
        throw ex;
    }
};

const removeMemberPermission = async (_p, {userId, permission}, {pool, user, permissions}) => {
    if(!user)
        throw new Error("Vous devez être connecté pour supprimer une permission");
    if(!permissions.includes("SUPREME"))
        throw new Error("Vous n'avez pas les permissions nécessaires pour supprimer cette permission");
    if(!userId)
        userId = user;

    try {
        const { rows } = await pool.query(sql.VERIFY_MEMBER_PERMISSION, [userId, permission]);
        if(!parseInt(rows[0].exists))
            throw new Error("Cette permission n'est pas attribuée à cette personne");

        await pool.query(sql.REMOVE_PERMISSION, [userId, permission]);

        return permission;
    } catch(ex) {
        // TODO: logging.
        throw ex;
    }
};

const author = async (parent, _, context) => {
    let data = await context.pool.query(sql.GET_MEMBER_FROM_ARTICLES, [parent.id]);
    if(!data.rows.length)
        throw new Error("L'auteur de cet article n'existe pas");
    const {cre_id} = data.rows[0];
    return member(parent, {id: cre_id}, context);
};

const approvedBy = async (parent, _, context) => {
    let data = await context.pool.query(sql.GET_MEMBER_FROM_ARTICLES, [parent.id]);
    if(!data.rows.length)
        throw new Error("L'auteur de cet article n'existe pas");
    const {art_approved_by} = data.rows[0];
    if(!art_approved_by)
        return null;
    return member(parent, {id: art_approved_by}, context);
};

module.exports = {
    Query: {
        members,
        member,
        me
    },
    Mutation: {
        newMember,
        updatePersonnalInformations,
        updateMemberType,
        addMemberPermission,
        removeMemberPermission
    },
    Article: {
        author,
        approvedBy
    }
}