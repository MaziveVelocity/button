const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('button');
});

module.exports = router;