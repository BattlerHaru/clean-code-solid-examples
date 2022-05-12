import { Tesla, Audi, Toyota, Honda, Ford, Vehicle } from './b';


(() => {

    const printCarSeats = (cars: Vehicle[]) => {

        cars.forEach(car => {
            console.log(car.constructor.name, car.getNumberOfSeats())
        })

    }

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Ford(2)
    ];


    printCarSeats(cars);

})();