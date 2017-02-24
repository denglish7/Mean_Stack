
var sum = function(x, y){
    var sum = 0;
    for(var i=x; i<=y; i++){
        sum+= i;
    }
    console.log(sum);
}

var min = function(arr){
    var min = arr[0];

    for(var i=1; i<arr.length; i++){
        if(arr[i]<min){
            arr[i] = min;
        }
    }
    return min;
}

var avg = function (arr){
    var arrSum = 0;
    for(var j=0; j<arr.length; j++){
        arrSum+= arr[j];
    }
    var avg = arrSum/arr.length;
    return avg;
}

var myObject = {
    sum: function(x,y){
        var sum = 0;
        for(var i=x; i<=y; i++){
            sum+= i;
        }
        console.log(sum);
    },
    min: function(arr){
        var min = arr[0];

        for(var i=1; i<arr.length; i++){
            if(arr[i]<min){
                arr[i] = min;
            }
        }
        return min;
    },
    avg: function (arr){
        var arrSum = 0;
        for(var j=0; j<arr.length; j++){
            arrSum+= arr[j];
        }
        var avg = arrSum/arr.length;
        return avg;
    }
}


var person = {};

person = {
    name: 'Daniel',
    distance_traveled: 0,
    say_name: function (){
        alert(person.name);
    },
    say_something: function(par){
        if(par == 'I am cool'){
            alert(person.name + " says 'I am cool'");
        }
    },
    walk: function(){
        alert(person.name + " is walking");
        person.distance_traveled += 3;
        return person;
    },
    run: function(){
        alert(person.name + " is running");
        person.distance_traveled += 10;
        return person;
    },
    crawl: function(){
        alert(person.name + " is crawling");
        person.distance_traveled += 1;
        return person;
    }
}

console.log(person.crawl());
