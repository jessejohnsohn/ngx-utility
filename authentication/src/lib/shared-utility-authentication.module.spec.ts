import { async, TestBed } from '@angular/core/testing';
import { SharedUtilityAuthenticationModule } from './shared-utility-authentication.module';

describe('SharedUtilityAuthenticationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilityAuthenticationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilityAuthenticationModule).toBeDefined();
  });
});
