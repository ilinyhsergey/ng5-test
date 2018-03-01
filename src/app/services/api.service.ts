import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Md5} from 'ts-md5/dist/md5';

import {Credentials} from '../components/model/credentials';

@Injectable()
export class ApiService {

  private serverUrl = 'https://api.amalyze.com/0.0.12/';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string, captcha: string): Observable<Object> {
    const url = this.serverUrl + 'system.user.login';
    const passwordMd5: string = Md5.hashStr(password) as string;
    const body: Credentials = {
      captcha: captcha,
      username: username,
      password_md5: passwordMd5
    };

    return this.http.post(url, body);
  }
}
