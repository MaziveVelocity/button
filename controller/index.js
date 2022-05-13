const router = require('express').Router();

const buttonHome = require('./buttonPage');
const aiPage = require('./aiPage');
const boxMenu = require('./boxMenu');
const gatekeeperPage = require('./gatekeeperPage');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/secretbutton', buttonHome);
router.use('/', boxMenu);
router.use('/ai', aiPage);
router.use('/gatekeeper', gatekeeperPage);

module.exports = router;