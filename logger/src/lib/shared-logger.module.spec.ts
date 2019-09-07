import { async, TestBed } from '@angular/core/testing';
import { SharedLoggerModule } from './shared-logger.module';

describe('SharedLoggerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLoggerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLoggerModule).toBeDefined();
  });
});
