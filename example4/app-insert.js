// Koristimo mongoose
const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost:27017/video';
mongoose.Promise = global.Promise;
// Konektujemo se na lokalnu instancu mongodb
mongoose.connect(url, {
	useMongoClient: true
});
console.log('Connected correctly to server');

// Koristimo mongoose shemu koju smo kreirali u folderu model
const MovieDetails = require('./model/movie-details');

// Napravimo primer filma u JSON formatu
const m = new MovieDetails({
	title: 'Jesen samuraja',
	year: 2014
});

// Kreirani objekat snimimo u bazu
m.save(err => {
	if (err === null) {
		console.log(m);
	} else {
		console.log(err);
	}
});

mongoose.connection.close();
