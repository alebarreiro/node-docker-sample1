/**
 * Created by alejandrobarreiro on 6/4/16.
 */
var express = require('express');
var router = express.Router();

router.get('/sayhello', function(req, res, next) {
    res.send('HELLOOOOO DOCKERRR IMAGEEEE MICROSERVICE');
});

module.exports = router;
