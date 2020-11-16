import {Injectable} from '@angular/core';
import {MediaChange} from '@angular/flex-layout';
import {HttpClient} from '@angular/common/http';
import {JWT, JWTPayload, UserLoginForm, UserRegisterForm} from './interfaces/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getFxFlex(e: MediaChange[]): number {
    const deviseWidth = e[0].mqAlias;
    if (deviseWidth === 'sm' || deviseWidth === 'xs') {
      return 95;
    } else {
      return 50;
    }
  }

  getWidth(e: MediaChange[]): string {
    const deviseWidth = e[0].mqAlias;
    if (deviseWidth === 'sm' || deviseWidth === 'xs') {
      return '85%';
    } else {
      return '60%';
    }
  }

  registerUser(form: UserRegisterForm): Observable<any> {
    return this.http.post('/users/register', form);
  }

  loginUser(form: UserLoginForm): Observable<JWT> {
    return this.http.post<JWT>('/users/login', form);
  }

  storeJWTAndUpdateStore(jwt: string): void {
    localStorage.clear();
    localStorage.setItem('jwt', jwt);
    this.updateStore(jwt);
  }

  private updateStore(jwt: string): void {
    const payload = JSON.parse(atob(jwt.split('.')[1]));
    console.log(payload);
    const json: JWTPayload = {
      sub: 'sasho',
      userId: 1,
      authorities: 'ROLE_USER,ROLE_ADMIN',
      iat: new Date(1605515356),
      exp: new Date(1637051356)
    };
  }
}
