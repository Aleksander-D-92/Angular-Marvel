import {Injectable} from '@angular/core';
import {MediaChange} from '@angular/flex-layout';
import {HttpClient} from '@angular/common/http';
import {JWT, UserLoginForm, UserRegisterForm} from './interfaces/user';
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
    return this.http.post('http://localhost:8080/users/register', form);
  }

  loginUser(form: UserLoginForm): Observable<JWT> {
    return this.http.post<JWT>('http://localhost:8080/users/login', form);
  }

  storeJWT(jwt: string): void {
    localStorage.clear();
    localStorage.setItem('jwt', jwt);
  }
}
