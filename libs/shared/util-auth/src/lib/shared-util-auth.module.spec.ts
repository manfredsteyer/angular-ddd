import { async, TestBed } from '@angular/core/testing';
import { SharedUtilAuthModule } from './shared-util-auth.module';

describe('SharedUtilAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilAuthModule).toBeDefined();
  });
});
