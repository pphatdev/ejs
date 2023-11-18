const router = require('express').Router();
const forceHTTPS = require('../middleware/forceHTTPS');

// static page routes
const staticRoutes = require('./static').default;

router.use('/', forceHTTPS, staticRoutes);

module.exports = router;
