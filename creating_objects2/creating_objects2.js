function VehicleConstructor(name, num_wheels, num_passengers, speed){

    var self = this;
    var distance_travelled = 0;
    var updateDistanceTravelled = function(){
        distance_travelled+=self.speed;
        return distance_travelled;
    }
    this.speed = speed;
    this.name = name;
    this.num_wheels = num_wheels;
    this.num_passengers = num_passengers;
    this.makeNoise = function(){
        console.log(this.name + " is making noise!!!");
    }
    this.move = function(){
        updateDistanceTravelled();
        this.makeNoise();
        return this;
    }
    this.checkMiles = function(){
        console.log(distance_travelled);
    }
}

var bike = new VehicleConstructor("My bike", 2, 1);
bike.makeNoise = function(){
    console.log("ring ring!")
}
// bike.makeNoise();

var sedan = new VehicleConstructor("My sedan", 4, 2);
sedan.makeNoise = function(){
    console.log("Honk Honk!");
}

var bus = new VehicleConstructor("My bus", 8, 20, 10);
bus.passengerCount = function(num_pickups){
    bus.num_passengers += num_pickups;
    return bus.num_passengers;
}

bus.move().move();


bus.checkMiles();
