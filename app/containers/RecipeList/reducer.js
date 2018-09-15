import { fromJS } from 'immutable';

import {
  LOAD_RECIPE_LIST,
  LOAD_RECIPE_LIST_SUCCESS,
  LOAD_RECIPE_LIST_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  recipeList: null,
});

function recipeListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RECIPE_LIST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('recipeList', null);
    case LOAD_RECIPE_LIST_SUCCESS:
      return state
        .set('recipeList', action.recipeList)
        .set('loading', false);
    case LOAD_RECIPE_LIST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default recipeListReducer;
