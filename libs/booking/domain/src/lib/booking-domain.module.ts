import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from './infrastructure/flight.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class BookingDomainModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BookingDomainModule,
      providers: [
        FlightService
      ]
    }
  }
}