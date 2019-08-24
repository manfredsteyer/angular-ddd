import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {Flight} from '../domain/flight';


@Injectable()
export class FlightService {

  flights: Flight[] = [];
  baseUrl: string = `http://www.angular.at/api`;
  reqDelay = 1000;

  constructor(private http: HttpClient) {
  }

  load(from: string, to: string, urgent: boolean): void {
    this.find(from, to, urgent)
      .subscribe(
        flights => {
          this.flights = flights;
        },
        err => console.error('Error loading flights', err)
      );
  }

  find(from: string, to: string, urgent: boolean = false): Observable<Flight[]> {

    // For offline access
    // let url = '/assets/data/data.json';

    // For online access
    let url = [this.baseUrl, 'flight'].join('/');

    if (urgent) {
      url = [this.baseUrl,'error?code=403'].join('/');
    }

    let params = new HttpParams()
      .set('from', from)
      .set('to', to);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const reqObj = {params, headers};
    return this.http.get<Flight[]>(url, reqObj);
    // return of(flights).pipe(delay(this.reqDelay))

  }

  findById(id: string): Observable<Flight> {
    const reqObj = { params: null };
    reqObj.params = new HttpParams().set('id', id);
    const url = [this.baseUrl, 'flight'].join('/');
    return this.http.get<Flight>(url, reqObj);
    // return of(flights[0]).pipe(delay(this.reqDelay))
  }

  save(flight: Flight): Observable<Flight> {
    const url = [this.baseUrl, 'flight'].join('/');
    return this.http.post<Flight>(url, flight);
  }

  delay() {
    const ONE_MINUTE = 1000 * 60;

    let oldFlights = this.flights;
    let oldFlight = oldFlights[0];
    let oldDate = new Date(oldFlight.date);

    // Mutable
    // oldDate.setTime(oldDate.getTime() + 15 * ONE_MINUTE);
    // oldFlight.date = oldDate.toISOString();
  }

}
