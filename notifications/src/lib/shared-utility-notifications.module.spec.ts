import { async, TestBed } from '@angular/core/testing';
import { SharedUtilityNotificationsModule } from './shared-utility-notifications.module';

describe('SharedUtilityNotificationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilityNotificationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilityNotificationsModule).toBeDefined();
  });
});
