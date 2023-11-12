const userQueries = {
    register: 'INSERT INTO usuario (nombre_usuario, password, rol_asignado) VALUES (?, ?, ?)',
    selectUserById: 'SELECT * FROM usuario WHERE nombre_usuario = ? AND password = ?',
};

module.exports = userQueries;