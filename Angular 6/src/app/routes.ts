import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { FormEnterCodeComponent } from './user/form-enter-code/form-enter-code.component';
import { FormEnterEmailComponent } from './user/form-enter-email/form-enter-email.component';
import { FormNewPasswordComponent } from './user/form-new-password/form-new-password.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'userprofile', component: UserProfileComponent, canActivate:[AuthGuard] },
    { path: 'forgot-password', component: FormEnterEmailComponent },
    { path: 'enter-code', component: FormEnterCodeComponent },
    { path: 'new-password', component: FormNewPasswordComponent }
];


