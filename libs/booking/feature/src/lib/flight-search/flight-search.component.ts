import {Component, OnInit} from '@angular/core';
import { FlightService, FlightFacade } from '@nx-flights/booking/domain';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  flights$ = this.flightFacade.flights$;

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private flightFacade: FlightFacade) {
  }

  ngOnInit() {
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightFacade.search(this.from, this.to, this.urgent);
      
  }

  delay(): void {
    this.flightFacade.delay();
  }

}
