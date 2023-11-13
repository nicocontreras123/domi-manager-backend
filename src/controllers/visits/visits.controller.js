const visitQueries = require('../../querys/visitsQueries');
const db = require('../../config/db.config');

exports.registerVisit = async (req, res) => {
    try {
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
        res.status(201).json({ message: 'visit exit register success' });
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

exports.getVisitByRut = async (req, res) => {
    try {
        const rut = req.query.rut;
        const [results] = await db.execute(visitQueries.getVisitByRut, [rut]);
        res.status(200).json(results);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get visits, not found' });
    }
}

exports.getTypeVisits = async (req, res) => {
    try {
        const [results] = await db.execute(visitQueries.getTypeVisits);
        res.status(200).json(results);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get type visits' });
    }
}

exports.getVisitsByAny = async (req, res) => {
    try {
        const { field } = req.query;
        if(field){
            const valorBusqueda = `${field}%`;
            const [results] = await db.execute(visitQueries.getVisitsByAny, [valorBusqueda, valorBusqueda, valorBusqueda, valorBusqueda]);
            res.status(200).json(results);
        } else {
            const [results] = await db.execute(visitQueries.getVisits);
            res.status(200).json(results);
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get visits, not found' });
    }
}