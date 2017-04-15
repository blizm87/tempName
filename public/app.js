(function(){
  'use strict';
  console.log('I am tempname module');
  angular
    .module('movieApp', [])
    .controller('mainController',['$http', movieController])
      console.log('I am mainController')
      function movieController($http){
        let vm = this;
        vm.all = [];
        $http
          .get('api/foodItems')
          .then(function(response){
            vm.data = response;
            let firImage = response.data.data[0].poster;
            let $test = $('#testImg');
            let html = `<img src=${firImage} width="150">`
            $test.append(html)
            console.log(vm.data)
          }, function(err){
            console.log(err)
          });
      }

})();
