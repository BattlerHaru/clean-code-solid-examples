export abstract class Vehicle {
    // getNumberOfAudiSeats():number {
    //     throw Error('Method not implemented')
    // }

    abstract getNumberOfSeats(): number;

}


export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    // Ejemplo en caso de tener un método propio de "Tesla"
    // getNumberOfTeslaSeats() {
    //     return this.numberOfSeats;
    // }
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}