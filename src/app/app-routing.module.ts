import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { ProfileMainComponent } from './profile/profile-main/profile-main.component';

const coreRoutes: Routes = [
  { path: "login", component: LoginComponentComponent },
  { path: "profile", component: ProfileMainComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
