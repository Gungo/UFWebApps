angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
function($scope, Listings) {
  $scope.listings = Listings;
  $scope.detailedInfo = undefined;

  // works --> when latitude/longitude are empty still adds
  $scope.add = function() {
    $scope.listings.push({
      code: $scope.new_listing.code,
      name: $scope.new_listing.name,
      coordinates: {
        latitude: $scope.new_listing.latitude,
        longitude: $scope.new_listing.longitude,
      },
      address: $scope.new_listing.address,
    })
    $scope.new_listing.code = "";
    $scope.new_listing.name = "";
    $scope.new_listing.coordinates.latitude = "";
    $scope.new_listing.coordinates.longitude = "";
    $scope.new_listing.address = "";
  };

  //works --> deletes all entries that are checked for deletion
  $scope.remove = function() {
    var newListing = [];
    angular.forEach($scope.listings, function(x) {
      if (!x.toDelete) {
        newListing.push(x);
      }
    });
    $scope.listings = newListing;
  };

  $scope.showDetails = function(index) {
    var details = $scope.listings[index];
    $scope.detailed_entry = {
      code: "Code: " + details.code,
      name: "Node: " + details.name,
      latitude: "Latitude: " + details.coordinates.latitude,
      longitude: "Longtitude: " + details.coordinates.longitude,
      address: "Address: " + details.address,
    }
  };
}]);
