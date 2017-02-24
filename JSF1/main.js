var x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"];

for(var i=0; i<x.length; i++){
    console.log(x[i]);
}

x.push(100);

var y = ["hello", "world", "JavaScript is fun"];

for(var i=0; i<y.length; i++){
    x.push(y[i]);
}
console.log(x);

var sum = 0;

for(var i=1; i<500; i++){
    sum+= i;
}
console.log(sum);

var arr = [1,5,90,25,-3,0];

var min = arr[0];

for(var i=1; i<arr.length; i++){
    if(arr[i]<min){
        arr[i] = min;
    }
}
console.log(min);

var newArr = [1,5,90,25,-3,0];

var arrSum = 0;

for(var j=0; j<newArr.length; j++){
    arrSum+= newArr[j];
}
var avg = arrSum/newArr.length;

console.log(avg);

var new_ninja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript',
    dojo: 'Dallas'
}

for(var key in new_ninja){
    console.log(key, new_ninja[key]);
}
