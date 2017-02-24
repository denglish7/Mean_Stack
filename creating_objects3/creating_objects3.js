function VehicleConstructor(name, num_wheels, num_passengers, speed){
    this.speed = speed;
    this.name = name;
    this.num_wheels = num_wheels;
    this.num_passengers = num_passengers;
}

VehicleConstructor.prototype.distance_travelled = 0;
VehicleConstructor.prototype.updateDistanceTravelled = function () {
    this.distance_travelled+=this.speed;
    return this.distance_travelled;
}
VehicleConstructor.prototype.makeNoise = function () {
    console.log(this.name + " is making noise!!!");
}
VehicleConstructor.prototype.move = function () {
    this.updateDistanceTravelled();
    this.makeNoise();
    return this;
}
VehicleConstructor.prototype.checkMiles = function(){
    console.log(this.distance_travelled);
}

VehicleConstructor.prototype.genRandVIN = function(){
    var vin = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for(var i=0; i<17; i++){
        rand = chars.charAt(Math.floor(Math.random()* chars.length));
        vin += rand;
    }
    return vin;
}

var bike = new VehicleConstructor("My bike", 2, 1, 5);
bike.makeNoise = function(){
    console.log("ring ring!")
}

var sedan = new VehicleConstructor("My sedan", 4, 50);
sedan.makeNoise = function(){
    console.log("Honk Honk!");
}

var bus = new VehicleConstructor("My bus", 8, 20, 30);
bus.passengerCount = function(num_pickups){
    bus.num_passengers += num_pickups;
    return bus.num_passengers;
}

console.log(bike.genRandVIN());
