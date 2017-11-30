const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017/video';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
	if (err === null) { // Assert(null, err)
		console.log('Connected correctly to server');
		const col = db.collection('movieDetails');
		// Insert a single document
		col.insertOne({title: 'Jesen samuraja'}, err => {
			if (err === null) { // Assert
				// Update a single document
				col.updateOne({title: 'Jesen samuraja'}, {$set: {year: 2016}}, (err, r) => {
					if (err === null) { // Assert.equal(null, err);
						if (r.matchedCount === 1) { // Assert.equal(1, r.matchedCount);
							if (r.modifiedCount === 1) { // Assert.equal(1, r.modifiedCount);
								col.find({title: 'Jesen samuraja'}).toArray((err, docs) => {
									if (err === null) { // Assert.equal(null, err);
										for (let i = 0; i < docs.length; i++) {
											console.log(docs[i]);
										}
										col.deleteOne({title: 'Jesen samuraja'}, err => {
											if (err === null) {
												col.find({title: 'Jesen samuraja'}).toArray((err, docs) => {
													if (err === null) { // Assert.equal(null, err);
														if (docs.length === 0) {
															console.log('Nema!!!');
														}
														for (let i = 0; i < docs.length; i++) {
															console.log(docs[i]);
														}
														db.close();
													}
												});
											}
										});
									}
								});
							}
						}
					}
				});
			}
		});
	}
});
