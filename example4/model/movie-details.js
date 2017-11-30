const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Kreiramo novu shemu
const movieDetailsSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	description: String,
	year: {
		type: Number,
		required: true
	},
	createdAt: Date,
	updatedAt: Date,
	genre: [String],
	awards: {
		type: {
			wins: {
				type: Number,
				required: true
			},
			nominations: Number,
			description: String
		},
		required: false
	}
}, {collection: 'myMovies'});

// Prilikom snimanja se postavi datum
movieDetailsSchema.pre('save', next => {
	// Preuzmemo trenutni datum
	const currentDate = new Date();

	// Postavimo trenutni datum poslednju izmenu
	this.updatedAt = currentDate;

	// Ako nije postavljena vrednost za createdAt, postavimo je
	if (!this.createdAt) {
		this.createdAt = currentDate;
	}

	// Predjemo na sledecu funckiju u lancu
	next();
});

// Od sheme kreiramo model koji cemo koristiti
const MovieDetails = mongoose.model('movies', movieDetailsSchema);

// Publikujemo kreirani model
module.exports = MovieDetails;
