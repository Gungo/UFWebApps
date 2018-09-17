/*
Initial Guide for mongoose
__________________________
User Model
*/

// now that we have the package, we just have to grab it in our project:
var mongoose = require('mongoose');
// add bluebird to your package.json, solves deprecatd mongoose promise
mongoose.Promise = require('bluebird');
// connect to database
mongoose.connect('mongodb://localhost', {
  useMongoClient: true
});

var Schema = mongoose.Schema;

// defining Model
/*
  models are constructors that represent documents within our db -

  Mongoose Schema The mongoose Schema is what is used to define attributes for our documents.
  Mongoose Methods Methods can also be defined on a mongoose schema. These are methods
*/
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, // so it doesn't return password when returned
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date,
});

// on every save, add the date - pre function for object manipulation before save
userSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;
  // if created_at doesn't exist, add to that field
  if (!this.created_at) this.created_at = currentDate;

  next();
});

// methods
userSchema.methods.ledudify = function() {
  // add to users name
  this.name += 'le_dude';
  return this.name;
}

// we need to create a model to use the schema
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
