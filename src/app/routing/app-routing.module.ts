import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../components/login/login.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {StatusComponent} from '../components/status/status.component';
import {StatusResolverService} from '../services/status-resolver.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'status',
    component: StatusComponent,
    canActivate: [AuthGuardService],
    resolve: {
      user: StatusResolverService
    }
  },
  {
    path: '',
    redirectTo: '/status',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/status'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StatusResolverService]
})
export class AppRoutingModule {
}
