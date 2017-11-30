const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017/video';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
	if (err === null) { // Assert(null, err)
		console.log('Connected correctly to server');
		const col = db.collection('movieDetails');
		col.updateOne({title: 'Jesen samuraja'}, {$set: {year: 2016}}, (err, r) => {
			db.close();
			if (err === null) {
				console.log('Pronasao za izmenu: ' + r.matchedCount);
			} else {
				throw err;
			}
		});
	} else {
		throw err;
	}
});
