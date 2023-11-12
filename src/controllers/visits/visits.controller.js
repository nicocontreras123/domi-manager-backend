const visitQueries = require('../../querys/visitsQueries');
const db = require('../../config/db.config');

exports.registerVisit = async (req, res) => {
    try {
        console.log(req.body)
        const { rut_visita, nom_visita, ape_visita, veh_visita, fecha_entrada, hr_entrada, tipo_visita_id, visita_domicilio_id } = req.body;
        const [results] = await db.execute(visitQueries.registerVisit, [rut_visita, nom_visita, ape_visita, veh_visita, fecha_entrada, hr_entrada, tipo_visita_id, visita_domicilio_id]);
        res.status(201).json({ message: 'visit register success' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error in register visit' });
    }
}

exports.registerExitVisit = async (req, res) => {
    try {
        const { fecha_salida, hr_salida, id } = req.body;
        const [results] = await db.execute(visitQueries.registerExit, [fecha_salida, hr_salida, id]);
        res.status(201).json({ message: 'visit exit success' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error in register exit visit' });
    }
}

exports.getVisits = async (req, res) => {
    try {
        const [results] = await db.execute(visitQueries.getVisits);
        res.status(200).json(results);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get visits' });
    }
}