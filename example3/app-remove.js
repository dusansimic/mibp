const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017/video';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
	if (err === null) {
		console.log('Connected correctly to server');
		const col = db.collection('movieDetails');
		col.deleteOne({title: 'Jesen samuraja'}, (err, r) => {
			db.close();
			if (err === null) {
				console.log(r);
			} else {
				throw err;
			}
		});
	} else {
		throw err;
	}
});
