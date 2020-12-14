import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormboxComponent } from './formbox/formbox.component';


const routes: Routes = [
  { path: 'registration-form', component: FormboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
