const visitsQueries = {
    registerVisit: 'INSERT INTO visitas (rut_visita, nom_visita, ape_visita, veh_visita, fecha_entrada, hr_entrada, tipo_visita_id, visita_domicilio_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    registerExit: 'UPDATE visitas SET fecha_salida = ?, hr_salida = ? WHERE id = ?',
    getVisits: 'SELECT * FROM visitas',
    getVisitsByDate: 'SELECT * FROM visitas WHERE fecha_entrada = ?',
}

module.exports = visitsQueries;