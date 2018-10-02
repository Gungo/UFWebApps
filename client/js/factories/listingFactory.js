angular.module('listings', []).factory('Listings', function($http) {
  // cors for HTTP requests
  var cors = require('cors');

  var methods = {
    app.use(cors()),

    getAll: function() {
      return $http.get('https://gungo-uf-web-app.herokuapp.com/api/listings');
    },

    create: function(listing) {
      return $http.post('https://gungo-uf-web-app.herokuapp.com/api/listings', listing);
    },

    delete: function(id) {
      // return result of HTTP delete method
      return $http.delete('https://gungo-uf-web-app.herokuapp.com/api/listings' + id);
    }

  };
  return methods;
});
