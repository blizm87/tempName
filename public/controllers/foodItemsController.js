(function(){
  'use strict';

  angular
    .module('tempNameApp', [])
    .controller('foodItemsController', foodItemsController);

    foodItemsController.$inject = ['$http'];
    function foodItemsController($http){
      let vm = this;
      vm.all = [];
      $http
        .get('/foodItems')
        .then(function(response){
          vm.data = response;
          console.log(vm.data)
        }, function(err){
          console.log(err)
        });

    }
})();
