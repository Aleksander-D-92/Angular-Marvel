import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  jwt = 'pesho';
  devUrl = 'http://localhost:8080';
  prodUrl = '';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modified: HttpRequest<any>;
    if (!req.url.includes('http')) {
      modified = req.clone({
        url: this.devUrl + req.url,
        setHeaders: {
          Authorization: `Bearer ${this.jwt}`
        }
      });
    } else {
      modified = req.clone();
    }
    return next.handle(modified);
  }

}
