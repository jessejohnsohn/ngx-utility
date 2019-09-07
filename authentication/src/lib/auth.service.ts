import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin, UserRegister, IdentityProvider } from './auth.models';
import { FirebaseAuthService } from './firebase-auth.service';

export const IdentityProviders: {
  [key in IdentityProvider]: { useClass: Type<any> }
} = {
  firebase: {
    useClass: FirebaseAuthService
  },
  auth0: {
    useClass: null
  }
};

// As of 2019, you must use an abstract class to use this as a DI token
@Injectable()
export abstract class AuthService {
  abstract login: (userLogin: UserLogin) => Observable<any>;
  abstract logout: () => Observable<void>;
  abstract register: (userRegister: UserRegister) => Observable<any>;
}
