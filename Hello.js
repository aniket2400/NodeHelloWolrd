const express = require('express');
const router = express.Router();
// const utility = require('./utility.js')


router.get('/sayHello', function (req, res) {
    res.send('Hello World!');
});

module.exports = router