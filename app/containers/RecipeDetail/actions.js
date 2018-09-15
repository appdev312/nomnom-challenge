import {
  LOAD_RECIPE_DETAIL,
  LOAD_RECIPE_DETAIL_SUCCESS,
  LOAD_RECIPE_DETAIL_ERROR,
  DELETE_RECIPE,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_ERROR,
} from './constants';

/**
 * Load the single recipe
 *
 * @param  {String} id id of the recipe item
 *
 * @return {object} An action object with a type of LOAD_RECIPE_DETAIL
 */
export function loadRecipeDetail(id) {
  return {
    type: LOAD_RECIPE_DETAIL,
    id,
  };
}

/**
 * Dispatched when the recipe is loaded by the request saga
 *
 * @param  {object} recipe
 *
 * @return {object} An action object with a type of LOAD_RECIPE_DETAIL_SUCCESS passing the recipes
 */
export function recipeDetailLoaded(recipe) {
  return {
    type: LOAD_RECIPE_DETAIL_SUCCESS,
    recipe,
  };
}

/**
 * Dispatched when loading the recipe fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_RECIPE_DETAIL_ERROR passing the error
 */
export function recipeDetailError(error) {
  return {
    type: LOAD_RECIPE_DETAIL_ERROR,
    error,
  };
}

/**
 * Delete the recipe
 *
 * @param  {String} id id of the recipe item
 *
 * @return {object} An action object with a type of DELETE_RECIPE
 */
export function deleteRecipe(id) {
  return {
    type: DELETE_RECIPE,
    id,
  };
}

/**
 * Dispatched when the recipe is deleted by the request saga
 *
 * @return {object} An action object with a type of DELETE_RECIPE_SUCCESS
 */
export function deleteRecipeSuccess() {
  return {
    type: DELETE_RECIPE_SUCCESS,
  };
}

/**
 * Dispatched when deleting the recipe fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of DELETE_RECIPE_ERROR
 */
export function deleteRecipeError(error) {
  return {
    type: DELETE_RECIPE_ERROR,
    error,
  };
}
