import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http/src/headers';

@Injectable()
export class AuthService {

  private xFalconToken: string;
  private xXsrfToken: string;

  constructor() {
  }

  signIn(headers: HttpHeaders) {
    const xXsrfToken = headers['X-XSRF-TOKEN'];
    const xFalconToken = headers['X-FALCON-TOKEN'];
    if (xXsrfToken && xFalconToken) {
      this.xXsrfToken = xXsrfToken;
      this.xFalconToken = xFalconToken;
    }
  }

  signOut() {
    this.xXsrfToken = undefined;
    this.xFalconToken = undefined;
  }

  isSignedIn(): boolean {
    return !!(this.xXsrfToken && this.xFalconToken);
  }

  getOptions() {
    if (this.isSignedIn()) {
      return {
        headers: {
          'X-XSRF-TOKEN': this.xXsrfToken,
          'X-FALCON-TOKEN': this.xFalconToken
        }
      };
    } else {
      return null;
    }
  }

}
