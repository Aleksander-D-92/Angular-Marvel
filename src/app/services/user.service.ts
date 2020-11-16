import {Injectable} from '@angular/core';
import {MediaChange} from '@angular/flex-layout';
import {HttpClient} from '@angular/common/http';
import {UserRegisterForm} from './interfaces/user';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
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
}
