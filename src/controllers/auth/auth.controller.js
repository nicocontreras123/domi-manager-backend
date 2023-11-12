const db = require('../../config/db.config');
const authQueries = require('../../querys/authQueries');
exports.register = async (req, res) => {
    try {
        const { nombre_usuario, password, rol_asignado } = req.body;
        const [results] = await db.execute(authQueries.register, [nombre_usuario, password, rol_asignado]);
        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};

exports.login = async (req, res) => {
    const { nombre_usuario, password } = req.body;
    try {
        const [results] = await db.execute(authQueries.selectUserById, [nombre_usuario, password]);
        if (results.length === 1) {
            res.status(200).json({ message: 'Inicio de sesión exitoso' });
        } else {
            res.status(401).json({ error: 'Inicio de sesión fallido' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

// Cierre de sesión
exports.logout = (req, res) => {
    res.status(200).json({ message: 'Cierre de sesión exitoso' });
};
