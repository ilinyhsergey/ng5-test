import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Md5} from 'ts-md5/dist/md5';

import {Credentials} from '../components/model/credentials';
import {AuthService} from './auth.service';

@Injectable()
export class ApiService {

  private serverUrl = 'https://api.amalyze.com/0.0.12/';

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  login(username: string, password: string, captcha: string): Observable<Object> {
    const url = this.serverUrl + 'system.user.login';
    const passwordMd5: string = Md5.hashStr(password) as string;
    const body: Credentials = {
      captcha: captcha,
      username: username,
      password_md5: passwordMd5
    };


    const observable = this.http.post(url, body, { observe: 'response' });
    observable.subscribe((res: HttpResponse<any>) => {

      console.log('res', res); // todo

      this.authService.signIn(res.headers);
    });
    return observable;
  }

  getStatus(): Observable<Object> {
    const url = this.serverUrl + 'system.user.login';

    return this.http.post(url, null, this.authService.getOptions());
  }

}
