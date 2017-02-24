var _ = {
   map: function(arr, callback) {
       var newArr = [];
       if(typeof(callback) === 'function'){
           for(var i=0; i<arr.length; i++){
               newArr.push(callback(arr[i]));
           }
           return newArr;
       }
   },
   reduce: function(arr, callback, memo) {
       var sum = 0;
       if(typeof(callback) === 'function'){
           for(var i=0; i<arr.length; i++){
               sum += callback(memo, arr[i]);
           }
           return sum;
       }
   },
   find: function(arr, callback) {
    if(typeof(callback) ==='function'){
     for(var i=0; i<arr.length; i++){
         if(callback(arr[i]) == true){
             return arr[i];
         }
     }
    }
   },
   filter: function(arr, callback) {
       var newArr = [];
     if(typeof(callback) === 'function'){
         for(var i=0; i<arr.length; i++){
             if(callback(arr[i]) == true){
                 newArr.push(arr[i]);
             }
         }
         return newArr;
     }
   },
   reject: function(arr, callback) {
       var newArr = [];
     if(typeof(callback) === 'function'){
         for(var i=0; i<arr.length; i++){
             if(callback(arr[i]) == false){
                 newArr.push(arr[i]);
             }
         }
         return newArr;
     }
   }
 }
// you just created a library with 5 methods!
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens);

var map = _.map([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]
console.log(map);

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// => 6
// console.log(sum);

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => 2
// console.log(even);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [1, 3, 5]
// console.log(odds);
