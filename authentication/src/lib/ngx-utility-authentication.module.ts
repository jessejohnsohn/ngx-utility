import { NgModule, Type, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  imports: [CommonModule, AngularFireAuthModule]
})
export class NgxUtilityAuthenticationModule {
  static forRoot(authProvider: { useClass: Type<any> }): ModuleWithProviders {
    return {
      ngModule: NgxUtilityAuthenticationModule,
      providers: [
        {
          provide: AuthService,
          ...authProvider
        }
      ]
    };
  }
}
