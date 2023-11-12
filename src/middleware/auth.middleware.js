const jwt = require('jsonwebtoken');
const config = require('../config/jwt.config');

function authenticateJWT(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Acceso no autorizado, token no proporcionado' });
    }

    jwt.verify(token, config, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(403).json({ error: 'Acceso no autorizado, token no válido' });
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateJWT;