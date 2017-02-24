function VehicleConstructor(name, num_wheels, num_passengers){
    var vehicle = {};

    vehicle.name = name;
    vehicle.num_wheels = num_wheels;
    vehicle.num_passengers = num_passengers;

    vehicle.makeNoise = function(){
        console.log(vehicle.name + " is making noise!!!");
    }
    return vehicle;
}

var bike = VehicleConstructor("My bike", 2, 1);
bike.makeNoise = function(){
    console.log("ring ring!")
}
bike.makeNoise();

var sedan = VehicleConstructor("My sedan", 4, 2);
sedan.makeNoise = function(){
    console.log("Honk Honk!");
}

var bus = VehicleConstructor("My bus", 8, 20);
bus.passengerCount = function(num_pickups){
    bus.num_passengers += num_pickups;
    return bus.num_passengers;
}
console.log(bus.passengerCount(5));
