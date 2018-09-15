import { fromJS } from 'immutable';

import {
  SAVE_RECIPE,
  SAVE_RECIPE_SUCCESS,
  SAVE_RECIPE_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
});

function recipeDetailReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_RECIPE:
      return state
        .set('loading', true)
        .set('error', false);
    case SAVE_RECIPE_SUCCESS:
      return state
        .set('loading', false);
    case SAVE_RECIPE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default recipeDetailReducer;
