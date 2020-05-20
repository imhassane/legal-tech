const { hashPassword } = require('./helpers/password');

const {
    INSERT_CREDENTIALS, INSERT_MEMBER, MEMBER_EXISTS
} = require('./sql/queries');

const {
    makeSchemaOfMember
} = require('./helpers/convert');

const members = async (_, {start, limit}, {pool}) => {
    try {
     return [];
    } catch(ex) {
        // TODO: logging.
    }
};

const member = async (_p, {id}, {pool}) => {
    try {
        return {};
    } catch(ex) {
        // TODO: logging.
    }
};

const newMember = async (_p, {data}, {pool}) => {
    try {
        let {email, password} = data;
        email = email.toLowerCase().trim();
        password = password.trim();

        password = hashPassword(password);

        // TODO: email validation.
        if(password.length < 8)
            throw new Error("Le mot de passe doit contenir 8 caractères au moins");



        let values = [
            email, password
        ];
        
        const client = await pool.connect();
        
        try {
            await client.query('BEGIN');

            let result = await client.query(MEMBER_EXISTS, [email]);

            result = result.rows[0];
            if(result)
                throw new Error("Cette adresse email est déjà utilisée");

            result = await client.query(INSERT_CREDENTIALS, values);

            const cre_id = result.rows[0].cre_id;

            values = [
                data.firstName,
                data.lastName,
                data.avatar,
                data.type,
                data.description,
                cre_id
            ];
            result = await client.query(INSERT_MEMBER, values);
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

module.exports = {
    Query: {
        members,
        member,
    },
    Mutation: {
        newMember,
    }
}