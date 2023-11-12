const express = require('express');
const router = express.Router();
const visitsController = require('../../controllers/visits/visits.controller');
const authenticateJWT = require("../../middleware/auth.middleware");

router.post('/register', authenticateJWT, visitsController.registerVisit);
router.post('/register-exit', authenticateJWT, visitsController.registerExitVisit);
router.get('/get-visits', authenticateJWT, visitsController.getVisits);

module.exports = router;