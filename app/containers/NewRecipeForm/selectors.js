import { createSelector } from 'reselect';

const selectNewRecipe = (state) => state.get('newRecipe');

const makeSelectLoading = () => createSelector(
  selectNewRecipe,
  (newRecipeState) => newRecipeState.get('loading')
);

const makeSelectError = () => createSelector(
  selectNewRecipe,
  (newRecipeState) => newRecipeState.get('error')
);

export {
  makeSelectLoading,
  makeSelectError,
};
