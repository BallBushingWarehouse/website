'use strict';
const router = require('express').Router();
module.exports = router;


router.get('/', function (req, res, next) {
	res.send({ response: null });
});
