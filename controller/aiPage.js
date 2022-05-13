const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('ai');
});

module.exports = router;