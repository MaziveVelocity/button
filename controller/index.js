const router = require('express').Router();
const buttonHome = require('./buttonPage');

router.use('/', buttonHome);

module.exports = router;