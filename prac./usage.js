// if file is in app/models/user.js
var User = require('./app/models/user.js');

// create a new user
var newUser = User({
  name: 'Peter Parker',
  username: 'spideydude55',
  password: 'passw0rd',
  admin: true
});


// create user called gustavo
var gustavo = new User( {
  name: 'Gustavo',
  username: 'gusgus69',
  password: 'passw0rd'
});

// call custom method
gustavo.ledudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is '+name);
});

// call built-in to save intp database
gustavo.save(function(err) {
  if (err) throw err;
  console.log('User saved successfully.');
});

// save the user
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});
