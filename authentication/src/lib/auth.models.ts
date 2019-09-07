export interface UserLogin {
  emailAddress: string;
  password: string;
}

export interface UserRegister {
  emailAddress: string;
  password: string;
}

export enum IdentityProvider {
  firebase = 'firebase',
  auth0 = 'auth0'
}

export interface User {
  uid?: string;
  name?: string;
  email?: string;
  accessToken?: string;
}
