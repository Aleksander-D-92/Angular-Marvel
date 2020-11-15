import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  formatDate(date: Date): string {
    return moment(date).format('YYYY  MMMM  DD');
  }
}
