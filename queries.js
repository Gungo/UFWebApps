/* Fill out these functions using Mongoose queries*/
var Listing = require('./ListingSchema.js'),
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Listing = require('./ListingSchema.js'),
  config = require('./config'),
  uri = config.db.uri,
  listingData;

// add bluebird to your package.json, solves deprecatd mongoose promise
mongoose.Promise = require('bluebird');
// connect to your database
mongoose.connect(uri, {
  useMongoClient: true
});

var findLibraryWest = function() {
  // find the document that contains data corresponding to Library West, then log
  Listing.findOne( { name: 'Library West' }, function(err, listing) {
    if (err) throw err;

    // log object of lib. west
    console.log(listing);
  });

};

var removeCable = function() {
  // Find the document with the code 'CABL'.
  // remove this listing from your database and log the document to the console.
  Listing.findOneAndRemove( { code: 'CABL' }, function(err, listing) {
    if (err) throw err;

    console.log('Removing Document:\n' + listing);
  });
};

var updatePhelpsLab = function() {
  // find the listing, update it, and then log update
  // new tag needed to return the updated netry, otherwise false returns old entry
  Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { $set: { address: '' } }, { new: true }, function(err, listing) {
    if (err) throw err;

    console.log(listing);
  });
};

var retrieveAllListings = function() {
  // retrieve all listings in the database, and log them to the console.
  Listing.find({}, function(err, listings) {
    if (err) throw err;

    //object of all users
    console.log(listings);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
