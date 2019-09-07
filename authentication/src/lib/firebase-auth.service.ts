import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { UserLogin, UserRegister } from './auth.models';
import { AuthService } from './auth.service';

@Injectable()
export class FirebaseAuthService implements AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  login(credentials: UserLogin): Observable<firebase.auth.UserCredential> {
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(
        credentials.emailAddress,
        credentials.password
      )
    );
  }

  logout(): Observable<void> {
    return from(this.afAuth.auth.signOut());
  }

  register(
    registrationInfo: UserRegister
  ): Observable<firebase.auth.UserCredential> {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(
        registrationInfo.emailAddress,
        registrationInfo.password
      )
    );
  }
}
