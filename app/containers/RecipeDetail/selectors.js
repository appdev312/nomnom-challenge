import { createSelector } from 'reselect';

const selectRecipeDetail = (state) => state.get('recipeDetail');

const makeSelectRecipe = () => createSelector(
  selectRecipeDetail,
  (recipeDetailState) => recipeDetailState.get('recipe')
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
  makeSelectRecipe,
  makeSelectLoading,
  makeSelectError,
};
