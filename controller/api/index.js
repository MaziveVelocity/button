const router = require('express').Router();

const userApi = require('./userApi');

router.use('/user', userApi);

module.exports = router;