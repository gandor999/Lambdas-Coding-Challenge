const Country = require("../models/Country");


module.exports.getData = () => {

	return Country.find({})
	.then(result => result);

}
