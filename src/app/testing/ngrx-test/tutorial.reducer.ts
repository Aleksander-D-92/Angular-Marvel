import {Tutorial} from './tutorial.model';
import {Actions, ADD_TUTORIAL} from './tutorial.actions';

const initialState: Tutorial = {
  name: 'Initial Name',
  url: 'initial url'
};

export function reducer(state: Tutorial[] = [initialState], action: Actions): Tutorial[] {
  switch (action.type) {
    case ADD_TUTORIAL:
      return [...state, action.payload];
    default:
      return state;
  }
}
