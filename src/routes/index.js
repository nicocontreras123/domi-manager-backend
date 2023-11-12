const express = require('express');
const router = express.Router();
const authRouter = require('./auth/auth.router');
const visitsRouter = require('./visits/visits.router');

router.use('/auth', authRouter);
router.use('/visits', visitsRouter);

module.exports = router;