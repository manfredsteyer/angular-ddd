import { async, TestBed } from '@angular/core/testing';
import { SharedUiCommonModule } from './shared-ui-common.module';

describe('SharedUiCommonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiCommonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiCommonModule).toBeDefined();
  });
});
