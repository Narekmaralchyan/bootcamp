//7 please take a look at the following

// this is just an example of object that you will still need to create by calling CreateCar constructor

const exampleOfAlreadyCreatedObject = {
    id: 1,
    model: 'Toyota',
    year: '1996',
    color: 'red',
    driveTrain: '4x4',
}


function CreateCar(id, model, year, color, driveTrain){
    // please implement CreateCar function so it creates cars with properties
    this.id=id;// id : ,
    this.model=model;// model: ,
    this.year=year;// year: ,
    this.color=color;// color: ,
    this.driveTrain=driveTrain;// driveTrain: ,
}

// please take a look at the the inventory object and implement the missing methods

const inventory = {

    cars: [],

    addCar(car) {
        // addCar function would add a car to the cars array
        // please implement it here
        this.cars.push(car)
    },

    removeCar(id) {
        // removeCar function would remove a car from cars array
        // please implement it here
        this.cars = this.cars.filter(item=>{
            if(item.id != id) return true;
            else return false;
        })
    },

    listCars(){
        // listCars function would list all the cars
        // you simply need to log all the cars
        this.cars.forEach(item=>{
            console.log(item);
        })
    },

    listCarsByConditionCallback(conditionCallback){
        // this function should accept a parameter conditionCallback, which is a function,
        // the conditionCallback would be called on every car with that car passed to conditionCallback
        // if conditionCallback returns true then the car is logged into console.
        // please implement it
        this.cars.forEach(item=>{
            if(conditionCallback(item)) console.log(item);
        })
    }

}


inventory.addCar(new CreateCar(1, 'Toyota', '1996', 'red', '4x4'));
inventory.addCar(new CreateCar(2, 'Mercedes', '2000', 'white', 'rear wheel drive'));
inventory.addCar(new CreateCar(3, 'BMW', '2020', 'black', 'rear wheel drive'));
inventory.listCars()
//inventory.removeCar(2);
//inventory.listCars();
inventory.listCarsByConditionCallback( (car) => car.model === 'BMW' && car.year === '2020' );