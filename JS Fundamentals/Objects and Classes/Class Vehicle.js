class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts; // parts is an Object {engine, power}
        this.fuel = fuel;
        this.parts.quality = parts.engine * parts.power; // {engine, power, quality}
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss
    }
}

// Test
let parts = {engine: 6, power: 100};
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);