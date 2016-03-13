//models
var SongExample = Backbone.Model.extend({
	idAttribute: "songId",
	urlRoot: "http://rest-service.guides.spring.io/greeting",
	defaults: {
		downloads: 0
	},
	validate: function(attrs) {
		if (!attrs.title)
			return "Title is required.";
	}
});

var songExample = new SongExample({data:1});

var Vehicle = Backbone.Model.extend({
	idAttribute: "registrationNumber",
	start: function(){
		console.log("Vehicle started");
	},
	urlRoot: "http://rest-service.guides.spring.io/greeting",
	validate: function(attrs) {
		if (!attrs.registrationNumber) {
			return "registrationNumber is required.";
		}
	}
})

var Car = Vehicle.extend({
	start: function() {
		Vehicle.prototype.start.apply(this);
		console.log("Car with registration number "+
				this.get("registrationNumber")+" started.");
	}
})

var carInstance = new Car({
	registrationNumber: "XLI887",
	color: "Blue"
})

carInstance.unset("registrationNumber");
if(!carInstance.isValid())
	console.log(carInstance.validationError);

carInstance.set("registrationNumber", "XLI887");
console.log(carInstance.isValid());

carInstance.start();

//collections
var Song = Backbone.Model.extend();
var Songs = Backbone.Collection.extend({
	model: Song
});

var songs = new Songs([
                       new Song({ title: "Song 1" }),
                       new Song({ title: "Song 2" }),
                       new Song({ title: "Song 3" })
                       ]);

songs.add(new Song({ title: "Song 4" }));
var firstSong = songs.at(0);
var songWithIdC3 = songs.get("c3");
songs.remove(firstSong);