const express = require('express');
const router = express.Router();
const visitsController = require('../../controllers/visits/visits.controller');
const authenticateJWT = require("../../middleware/auth.middleware");

router.post('/register', authenticateJWT, visitsController.registerVisit);
router.post('/register-exit', authenticateJWT, visitsController.registerExitVisit);
router.get('/get-visits', authenticateJWT, visitsController.getVisits);
router.get('/get-visit-by-rut', authenticateJWT, visitsController.getVisitByRut);
router.get('/get-type-visits', authenticateJWT, visitsController.getTypeVisits);
router.get('/get-visits-by-field', authenticateJWT, visitsController.getVisitsByAny);
module.exports = router;