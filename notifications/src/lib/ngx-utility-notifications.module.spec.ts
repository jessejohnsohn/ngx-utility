import { async, TestBed } from '@angular/core/testing';
import { NgxUtilityNotificationsModule } from './ngx-utility-notifications.module';

describe('SharedUtilityNotificationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxUtilityNotificationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxUtilityNotificationsModule).toBeDefined();
  });
});
