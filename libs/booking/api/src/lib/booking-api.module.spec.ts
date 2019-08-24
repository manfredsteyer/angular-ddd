import { async, TestBed } from '@angular/core/testing';
import { BookingApiModule } from './booking-api.module';

describe('BookingApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingApiModule).toBeDefined();
  });
});
