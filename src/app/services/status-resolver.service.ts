import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {SystemUser} from '../components/model/system-user';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

import {ApiService} from './api.service';

@Injectable()
export class StatusResolverService implements Resolve<SystemUser> {

  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SystemUser> | Promise<SystemUser> | SystemUser {
    return this.apiService.getStatus().pipe(
      map((res: Object): SystemUser => {
        return res['user'] as SystemUser;
      })
    );
  }
}
