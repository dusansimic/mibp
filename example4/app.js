// koristimo mongoose
var mongoose = require('mongoose');

// Connection URL
var url = 'mongodb://localhost:27017/video';
// konektujemo se na lokalnu instancu mongodb
mongoose.Promise = global.Promise; // ovo za sada nije vazno
mongoose.connect(url);
console.log("Connected correctly to server");

// koristimo mongoose shemu koju smo kreirali u folderu model
var MovieDetails = require('./model/movieDetails');

//napravimo primer filma u JSON formatu
var m = new MovieDetails({
  title: 'Jesen samuraja5',
  year: 2014
});

  // kreirani objekat snimimo u bazu
m.save(function(err) {
	if (err == null) { 
		// vrsimo update
		MovieDetails.findOneAndUpdate({"title":"Jesen samuraja"}, {"year": 2016}, function(err, doc) {
			if(err == null){ //assert.equal(null, err);
				console.log(doc);
				var query  = MovieDetails.where({ "title":"Jesen samuraja" });
				query.findOne(function(err, doc) {
				  if(err == null){ //assert.equal(null, err);
					console.log(doc);
					MovieDetails.findOneAndRemove({"title":"Jesen samuraja"}, function(err, doc, r) {
						if(err == null){
							query.findOne(function(err, doc) {
								if(err == null){ //assert.equal(null, err);
									if(doc != null)
										console.log(doc);
									else
										console.log("Nema!!!");
								}
							})
						}
					})
				  }
				});	
			}
		});
	} else {
		console.log(err);
	}
});

mongoose.connection.close();