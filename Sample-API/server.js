const express = require('express');
const mongoose = require('mongoose');
const countryRoutes = require('./routes/countries');

const app = express();

// Connect to mongoDB
mongoose.connect('mongodb+srv://dbgeodorruales:Dissidia6698@wdc028-course-booking.hcfxx.mongodb.net/Countries?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// All users routes
app.use("/countries", countryRoutes);


// Listening to port
app.listen(process.env.PORT || 4000, () => {
	console.log(`\nAPI is now online on port ${process.env.PORT || 4000}`)
});