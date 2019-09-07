import { UserRegister } from '@jesse-johnson/shared/utility/authentication';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserLogin, User } from './auth.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthTestingService implements AuthService {
  private readonly TESTING_USER = {
    uid: '123456789',
    name: 'Testing User',
    email: '',
    accessToken: '1Z55'
  };

  login(credentials: UserLogin): Observable<User> {
    const user = this.TESTING_USER;
    user.email = credentials.emailAddress;

    return of(user);
  }

  logout(): Observable<void> {
    return of();
  }

  register(credentials: UserRegister): Observable<User> {
    const user = this.TESTING_USER;
    user.email = credentials.emailAddress;

    return of(user);
  }
}
