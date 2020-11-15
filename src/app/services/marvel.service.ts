import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Characters} from './interfaces/characters';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// 8642e6e06b2082d533e6cc3092e0298f
// 1a660eb31af2c6ed38f528a98a5aa829e3f13b3d
// 4616a1d69f739e697c6ca9dd2f2ccee9
export class MarvelService {
  private PUBLIC_KEY = 'apikey=8642e6e06b2082d533e6cc3092e0298f';
  private PRIVATE_KEY = '1a660eb31af2c6ed38f528a98a5aa829e3f13b3d';

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<Characters> {
    return this.http.get<Characters>(`https://gateway.marvel.com:443/v1/public/characters?limit=12&${this.PUBLIC_KEY}`);
  }

  getCharactersPage(offset: number): Observable<Characters> {
    return this.http.get<Characters>(`https://gateway.marvel.com:443/v1/public/characters?limit=12&offset=${offset}&${this.PUBLIC_KEY}`);
  }
}
