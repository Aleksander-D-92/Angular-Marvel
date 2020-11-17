import {Action} from '@ngrx/store';

export interface AppState {
  message: string;
}

export function simpleReducer(state: string = 'Hello World!', action: Action): string {
  console.log(action.type, state);
  switch (action.type) {
    case 'SPANISH':
      return state = 'Hol Mundo';
    case 'FRENCH':
      return state = 'French';
    case 'ENGLISH':
      return state = 'English';
    default:
      return state;
  }
}
