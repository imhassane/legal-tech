const crypt = require('bcryptjs');

const hashPassword = (password) => {
    const secret = parseInt( process.env.BCRYPT_SECRET);
    return crypt.hashSync(password, secret);
};

module.exports = {
    hashPassword
}