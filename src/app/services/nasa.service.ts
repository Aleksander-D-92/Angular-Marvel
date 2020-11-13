import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APOD} from './responses';
import {Observable} from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
// https://api.nasa.gov/planetary/apod?api_key=tyoRPGcwSzxX0kdpJ5DwAMWENM6Hl9YFSJWzf665
export class NasaService {
  private API_KEY = 'tyoRPGcwSzxX0kdpJ5DwAMWENM6Hl9YFSJWzf665';

  constructor(private http: HttpClient) {
  }

  getAstronomyPictureOfTheDay(): Observable<APOD> {
    return this.http.get<APOD>(`https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`);
  }

  getAstronomyPictureForDate(date: Date): Observable<APOD> {
    const formatted = moment(date).format('YYYY-MM-DD');
    return this.http.get<APOD>(`https://api.nasa.gov/planetary/apod?date=${formatted}&api_key=${this.API_KEY}`);
  }
}
