const router = require('express').Router();
const User  = require('../../model/User');

router.post('/', (req, res) => {
    if (req.body._id === 0) {
        User.create({clicks: req.body.clicks}).then(user => {
            res.json(user);
        });
    } else {
        User.findByIdAndUpdate(req.body._id,
            { clicks: req.body.clicks },
            { new: true }
        ).then(user => {
            res.json(user);
        }).catch(err => {
            res.status(500).json(err);
        });
    }
});

module.exports = router;