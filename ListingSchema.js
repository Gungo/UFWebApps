/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  address: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// 'pre' save function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  // change the updated_at field to current date
  this.updated_at = currentDate;
  // if created_at doesn't exist, add to that field
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

// instantiate mongoose model
var Listing = mongoose.model('Listing', listingSchema);

// export to make module available to other parts of node app
module.exports = Listing;
