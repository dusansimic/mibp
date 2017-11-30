const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017/video';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
	if (err === null) { // Assert(null, err)
		console.log('Connected correctly to server');
		const col = db.collection('movieDetails');
		col.find({title: 'Jesen samuraja'}).toArray((err, docs) => {
			db.close();
			if (err === null) {
				if (docs.length === 0) {
					console.log('Nema!!!');
				}
				for (let i = 0; i < docs.length; i++) {
					console.log(docs[i]);
				}
			} else {
				throw err;
			}
		});
	} else {
		throw err;
	}
});
