const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('gatekeeper');
});

module.exports = router;