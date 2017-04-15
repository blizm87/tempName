// function movieObjectRet(){
//     console.log('I am movie object function');
//     foodItemsController.$inject = ['$http'];
//     function foodItemsController($http){
//       let vm = this;
//       vm.all = [];
//       $http
//         .get('api/foodItems')
//         .then(function(response){
//           vm.data = response;
//           let firImage = response.data.data[0].poster;
//           let $test = $('#testImg');
//           let html = `<img src=${firImage} width="150">`
//           $test.append(html)
//           console.log(vm.data)
//         }, function(err){
//           console.log(err)
//         });
//     }
// }

// export movieObjectRet();


