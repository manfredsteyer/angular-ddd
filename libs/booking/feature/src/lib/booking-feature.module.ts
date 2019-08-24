import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FlightBookingComponent} from './flight-booking.component';
import {FLIGHT_BOOKING_ROUTES} from './flight-booking.routes';
import {FlightCardComponent} from './flight-card/flight-card.component';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {PassengerSearchComponent} from './passenger-search/passenger-search.component';
import { CityPipe } from './common/city.pipe';
import { BookingDomainModule } from '@nx-flights/booking/domain';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    BookingDomainModule.forRoot(),
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent,
    FlightBookingComponent,
    CityPipe
  ],
  providers: [],
  exports: [
    FlightSearchComponent
  ]
})
export class BookingFeatureModule {
}
