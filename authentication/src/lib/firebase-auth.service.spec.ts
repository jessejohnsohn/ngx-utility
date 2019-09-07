import { AuthTestingService } from './auth-testing.service';
import { FirebaseAuthService } from './firebase-auth.service';
import { TestBed } from '@angular/core/testing';

import { AngularFireAuth } from '@angular/fire/auth';

describe('FirebaseAuthService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFireAuth,
          useValue: null
        },
        {
          provide: FirebaseAuthService,
          useExisting: AuthTestingService
        }
      ]
    })
  );

  it('should be created', () => {
    const service: FirebaseAuthService = TestBed.get(FirebaseAuthService);
    expect(service).toBeTruthy();
  });
});
