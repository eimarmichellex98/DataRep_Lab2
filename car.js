//Car Lab
//Initialising class Vehicle with constructor
class Vehicle{

    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
//Method
    Info(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}
//Invoke onto parent class using super
class Cars extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }
//Invoke method on parent class
    Info(){
        super.Info();
        console.log(`Doors: ${this.doors}`);
    }
}

let myCar = new Cars('VW', 'Golf', 2011 , 5);
myCar.Info();
//Invoke class
let myVehicle = new Vehicle('VW', 'Gold', 2008);
let info = myVehicle.Info();
