export * from './lib/shared-utility-authentication.module';
export { AuthService, IdentityProviders } from './lib/auth.service';
export {
  UserLogin,
  UserRegister,
  IdentityProvider,
  User
} from './lib/auth.models';
export { FirebaseAuthService } from './lib/firebase-auth.service';