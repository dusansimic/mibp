const MongoClient = require('mongodb').MongoClient;
const Uplatnica = require('../json/uplatnica.json');

MongoClient.connect('mongodb://localhost:27017/uplatnica', (err, db) => {
	if (err) {
		throw err;
	}

	const collectionUplatnica = db.collection('uplatnica');

	collectionUplatnica.insertOne(Uplatnica, (err, res) => {
		db.close();

		if (err) {
			throw err;
		}

		console.log('Inserted count: ' + res.insertedCount);
		console.log('Inserted id: ' + res.insertedId);
	});
});
