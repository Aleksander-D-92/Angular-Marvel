import {TutorialActions, ADD_TUTORIAL, REMOVE_TUTORIAL} from './actionss';
import {Tutorial} from './app.state';

const initialState: Tutorial = {
  name: 'Initial Name',
  url: 'initial url'
};

export function tutorialReducers(state: Tutorial[] = [initialState], action: TutorialActions): Tutorial[] {
  switch (action.type) {
    case ADD_TUTORIAL:
      return [...state, action.payload];
    case REMOVE_TUTORIAL:
      return state.filter(e => e.url !== action.payload.url);
  }
}
