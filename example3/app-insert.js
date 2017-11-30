const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017/video';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
	if (err === null) { // Assert(null, err)
		console.log('Connected correctly to server');
		const col = db.collection('movieDetails');
		// Insert a single document
		col.insertOne({title: 'Jesen samuraja'}, (err, r) => {
			if (err === null) { // Assert
				console.log(r.ops);
			} else {
				console.log(err);
			}
		});

		db.close();
	} else {
		throw err;
	}
});
