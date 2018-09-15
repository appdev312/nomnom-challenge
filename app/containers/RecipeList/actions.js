import {
  LOAD_RECIPE_LIST,
  LOAD_RECIPE_LIST_SUCCESS,
  LOAD_RECIPE_LIST_ERROR,
} from './constants';

/**
 * Load the recipes, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_RECIPE_LIST
 */
export function loadRecipeList() {
  return {
    type: LOAD_RECIPE_LIST,
  };
}

/**
 * Dispatched when the recipes are loaded by the request saga
 *
 * @param  {array} recipeList The list of recipes
 *
 * @return {object} An action object with a type of LOAD_RECIPE_LIST_SUCCESS passing the recipes
 */
export function recipeListLoaded(recipeList) {
  return {
    type: LOAD_RECIPE_LIST_SUCCESS,
    recipeList,
  };
}

/**
 * Dispatched when loading the recipes fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_RECIPE_LIST_ERROR passing the error
 */
export function recipeListError(error) {
  return {
    type: LOAD_RECIPE_LIST_ERROR,
    error,
  };
}
