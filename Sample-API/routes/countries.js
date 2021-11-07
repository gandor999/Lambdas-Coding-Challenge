const express = require("express");
const router = express.Router();
const countriesController = require('../controllers/countries');


router.get("/", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", null);

	countriesController.getData()
	.then(resultFromController => {
		res.send(resultFromController)
	});
});


module.exports = router;