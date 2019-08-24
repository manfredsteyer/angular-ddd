import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { Flight } from '../domain/flight';
import { FlightService } from '../infrastructure/flight.service';

@Injectable({ providedIn: 'root' })
export class FlightFacade {

    private flightsSubject = new BehaviorSubject<Flight[]>([]); 
    public flights$ = this.flightsSubject.asObservable();

    constructor(private flightService: FlightService) {
    }

    search(from: string, to: string, urgent: boolean): void {
        this.flightService.find(from, to, urgent).subscribe(
            flights => {
                this.flightsSubject.next(flights)
            },
            err => {
                console.error('err', err);
            }
        );
    }

    delay() {
        this.flights$.pipe(first()).subscribe(
            flights => {
                const oldFlight = flights[0];
                const flight = { ...oldFlight, date: (new Date()).toISOString() };
                const newFlights = [flight, ...flights.slice(1)];

                this.flightsSubject.next(newFlights)
            }
        )
    }

}