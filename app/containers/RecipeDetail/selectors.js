import { createSelector } from 'reselect';

const selectRecipeDetail = (state) => state.get('recipeDetail');

const makeSelectCurrentRecipe = () => createSelector(
  selectRecipeDetail,
  (recipeDetailState) => recipeDetailState.get('currentRecipe')
);

const makeSelectLoading = () => createSelector(
  selectRecipeDetail,
  (recipeDetailState) => recipeDetailState.get('loading')
);

const makeSelectError = () => createSelector(
  selectRecipeDetail,
  (recipeDetailState) => recipeDetailState.get('error')
);

export {
  makeSelectCurrentRecipe,
  makeSelectLoading,
  makeSelectError,
};
