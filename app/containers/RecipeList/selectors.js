import { createSelector } from 'reselect';

const selectRecipeList = (state) => state.get('recipeList');

const makeSelectList = () => createSelector(
  selectRecipeList,
  (recipeListState) => recipeListState.get('recipeList')
);

const makeSelectLoading = () => createSelector(
  selectRecipeList,
  (recipeListState) => recipeListState.get('loading')
);

const makeSelectError = () => createSelector(
  selectRecipeList,
  (recipeListState) => recipeListState.get('error')
);

export {
  makeSelectList,
  makeSelectLoading,
  makeSelectError,
};
