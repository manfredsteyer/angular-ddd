// import { Flight } from './flight';

export interface Passenger {
    readonly id: number;
    readonly firstName: string;
    readonly name: string;
    readonly bonusMiles: number;
    readonly passengerStatus: string;
}

export interface Booking {
    readonly passengerId: number;
    readonly flightId: number;
}

// Alternative
// export interface Booking {
//     readonly passenger: Passenger;
//     readonly flight: Flight;
// }