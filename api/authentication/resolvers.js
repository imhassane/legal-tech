const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authenticate = async (_parent, data, {pool}) => {

    let query = `
        SELECT
            cre_id, cre_password
        FROM t_credentials_cre
        WHERE cre_email = $1
    `;
    let result = await pool.query(query, [data.email]);

    if(!result.rows || !result.rows.length)
        throw new Error("Cette adresse email n'existe pas");

    const {cre_id, cre_password} = result.rows[0];

    if(!bcrypt.compareSync(data.password, cre_password))
        throw new Error("Le mot de passe n'est pas correct");

    query = `
        SELECT
            permission
        FROM tj_credentials_permission
        WHERE cre_id = $1
    `;
    result = await pool.query(query, [cre_id])
    const permissions = result.rows.map(r => r.permission);

    const token = jwt.sign({ id: cre_id }, process.env.JWT_SECRET, { expiresIn: '2h' });
    return { token, permissions, expiresIn: 2 };
};

module.exports = {
    Mutation: { authenticate }
}