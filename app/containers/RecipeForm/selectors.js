import { createSelector } from 'reselect';

const selectRecipeForm = (state) => state.get('recipeForm');

const makeSelectLoading = () => createSelector(
  selectRecipeForm,
  (recipeFormState) => recipeFormState.get('loading')
);

const makeSelectError = () => createSelector(
  selectRecipeForm,
  (recipeFormState) => recipeFormState.get('error')
);

export {
  selectRecipeForm,
  makeSelectLoading,
  makeSelectError,
};
