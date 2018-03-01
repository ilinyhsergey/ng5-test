import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../components/login/login.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {StatusComponent} from '../components/status/status.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'status',
    component: StatusComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: '/status',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
