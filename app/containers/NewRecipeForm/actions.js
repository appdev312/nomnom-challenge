import {
  SAVE_RECIPE,
  SAVE_RECIPE_SUCCESS,
  SAVE_RECIPE_ERROR,
} from './constants';

/**
 * Save the recipe
 *
 * @param {object} recipe
 *
 * @return {object} An action object with a type of SAVE_RECIPE
 */
export function saveRecipe(recipe) {
  return {
    type: SAVE_RECIPE,
    recipe,
  };
}

/**
 * Dispatched when the recipe is saved by the request saga
 *
 * @return {object} An action object with a type of SAVE_RECIPE_SUCCESS
 */
export function saveRecipeSuccess() {
  return {
    type: SAVE_RECIPE_SUCCESS,
  };
}

/**
 * Dispatched when saving the recipe fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of SAVE_RECIPE_ERROR
 */
export function saveRecipeError(error) {
  return {
    type: SAVE_RECIPE_ERROR,
    error,
  };
}
