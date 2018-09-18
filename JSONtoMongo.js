'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
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
  useNewUrlParser: true
});

// go through json file and save each listing to database
fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err) throw err;

  listingData = JSON.parse(data);
  var data_length = listingData.entries.length;

  for (var i = 0; i < data_length; i++) {
    var currEntry = listingData.entries[i],
      newEntry = new Listing(currEntry);
    newEntry.save(function(err) {
      if (err) throw err;
    });
  }
  console.log('Listings Saved');
});
