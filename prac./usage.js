// if file is in app/models/user.js
var User = require('./app/models/user.js');

// create a new user
var newUser = User({
  name: 'Peter Parker',
  username: 'test',
  password: 'passw0rd',
  admin: true
});
//adds each time, has problem if there are duplicate users

// create user called gustavo
var gustavo = new User( {
  name: 'Gustavo',
  username: 'test2',
  password: 'passw0rd'
});

// call custom method
gustavo.ledudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is '+name);
});

// call built-in to save into database
gustavo.save(function(err) {
  if (err) throw err;
  console.log('User saved successfully.');
});

// save the user
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});
