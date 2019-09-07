import { async, TestBed } from '@angular/core/testing';
import { NgxLoggerModule } from './ngx-logger.module';

describe('NgxLoggerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxLoggerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxLoggerModule).toBeDefined();
  });
});
