(function(){
  'use strict';

  angular
    .module('tempNameApp')
    .controller('foodItemsController', foodItemsController);

    foodItemsController.$inject = ['$http'];
    function foodItemsController(){
      let vm = this;
      vm.all = [];

    }
})();
