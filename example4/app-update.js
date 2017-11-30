// Koristimo mongoose
const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost:27017/video';
// Konektujemo se na lokalnu instancu mongodb
mongoose.connect(url, {
	useMongoClient: true
});
console.log('Connected correctly to server');

// Koristimo mongoose shemu koju smo kreirali u folderu model
const MovieDetails = require('./model/movie-details');

MovieDetails.findOneAndUpdate({title: 'Jesen samuraja'}, {year: 2016}, (err, movie) => {
	if (err === null) {
		console.log(movie);
	} else {
		console.log(err);
	}
});

mongoose.connection.close();
