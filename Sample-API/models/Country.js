const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema([
	   {
	      name: String,
	      topLevelDomain:[
	         String
	      ],
	      alpha2Code: String,
	      alpha3Code: String,
	      callingCodes:[
	         String
	      ],
	      capital: String,
	      altSpellings:[
	         String,
	         String
	      ],
	      region: String,
	      subregion: String,
	      population: Number,
	      latlng:[
	         Number,
	         Number
	      ],
	      demonym: String,
	      area: Number,
	      gini: Number,
	      timezones:[
	         String
	      ],
	      borders:[
	         String
	      ],
	      nativeName: String,
	      numericCode: String,
	      currencies:[
	         {
	            code: String,
	            name: String,
	            symbol: String
	         }
	      ],
	    	 languages:[
	         {
	            iso639_1: String,
	            iso639_2: String,
	            name: String,
	            nativeName: String
	         }	     
	      ],
	      translations:{
	      },
	      flag: String,
	     	regionalBlocs:[
	         {
	            acronym: String,
	            name: String,
	            otherAcronyms:[

	            ],
	            otherNames:[

	            ]
	         }
	      ],
	      cioc: String
	   }
]);


module.exports = mongoose.model("Country", countrySchema);