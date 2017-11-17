const MongoClient = require('mongodb').MongoClient;
const Profesori = [
	require('./profesor1.json'),
	require('./profesor2.json'),
	require('./profesor3.json'),
	require('./profesor4.json')
];
const Komentari = [
	require('./komentari1.json'),
	require('./komentari2.json'),
	require('./komentari3.json'),
	require('./komentari4.json')
];

MongoClient.connect('mongodb://localhost:27017/profesori', (err, db) => {
	if (err) {
		throw err;
	}

	const colletionProfesori = db.collection('profesori');

	colletionProfesori.insertMany(Profesori, (err, res) => {
		db.close();
		console.log('Profesori:');

		if (err) {
			throw err;
		}

		console.log('Inserted count: ' + res.insertedCount);
	});

	const collectionKomentari = db.collection('komentari');

	collectionKomentari.insertMany(Komentari, (err, res) => {
		db.close();
		console.log('Komentari:');

		if (err) {
			throw err;
		}

		console.log('Inserted count: ' + res.insertedCount);
	});
});
