const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('boxMenu');
});

module.exports = router;