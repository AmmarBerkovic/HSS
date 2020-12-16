import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormboxComponent } from './formbox/formbox.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [
  { path: 'registration-form', component: FormboxComponent },
  { path: 'login-form', component: LoginComponent },
  { path: 'forgot-password', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
