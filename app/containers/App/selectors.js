import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectCurrentRecipe = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentRecipe')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectRecipeList = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('recipeList')
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectCurrentRecipe,
  makeSelectLoading,
  makeSelectError,
  makeSelectRecipeList,
  makeSelectLocation,
};