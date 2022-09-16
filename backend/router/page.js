const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    console.log(req.params);
    res.json({ result: true });
});

module.exports = router;
