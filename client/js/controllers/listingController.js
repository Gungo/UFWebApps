angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    var cors = require('cors');
    app.use(cors());

    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      // Save the article using the Listings factory. If the object is successfully
      // saved redirect back to the list page. Otherwise, display the error
      try {
        // wouldn't it be more efficient to use $scope.listings.push()
        // since you don't have to refresh to show the addition?
        Listings.create($scope.newListing);
        $scope.newListing = {};
        window.location.replace('/');
      } catch (err) {
        alert('Error saving listing:', err);
      }
    };

    $scope.deleteListing = function(index) {
      // Delete the article using the Listings factory. If the removal is successful,
      // navigate back to 'listing.list'. Otherwise, display the error.
      try {
        var id = $scope.listings[index]._id;
        $scope.listings.splice(index, 1);
        Listings.delete(id);
        window.location.replace('/listing.list');
      } catch (err) {
        alert('Error deleting listing: ' + err);
      }
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
