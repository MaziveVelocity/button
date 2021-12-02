const router = require('express').Router();

const buttonHome = require('./buttonPage');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', buttonHome);

module.exports = router;