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

MovieDetails.findOneAndRemove({title: 'Jesen samuraja'}, (err, m) => {
	if (err === null) {
		console.log('Obrisao: ');
		console.log(m);
	} else {
		console.log(err);
	}
});

mongoose.connection.close();
