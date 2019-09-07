import { async, TestBed } from '@angular/core/testing';
import { NgxUtilityAuthenticationModule } from './ngx-utility-authentication.module';

describe('NgxUtilityAuthenticationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxUtilityAuthenticationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxUtilityAuthenticationModule).toBeDefined();
  });
});
