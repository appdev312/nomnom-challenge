import { fromJS } from 'immutable';

import {
  LOAD_RECIPE_DETAIL,
  LOAD_RECIPE_DETAIL_SUCCESS,
  LOAD_RECIPE_DETAIL_ERROR,
  DELETE_RECIPE,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  recipe: null,
});

function recipeDetailReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RECIPE_DETAIL:
      return state
        .set('loading', true)
        .set('error', false)
        .set('recipe', null);
    case LOAD_RECIPE_DETAIL_SUCCESS:
      return state
        .set('recipe', action.recipe)
        .set('loading', false);
    case LOAD_RECIPE_DETAIL_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case DELETE_RECIPE:
      return state
        .set('loading', true)
        .set('error', false);
    case DELETE_RECIPE_SUCCESS:
      return state
        .set('loading', false);
    case DELETE_RECIPE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default recipeDetailReducer;
