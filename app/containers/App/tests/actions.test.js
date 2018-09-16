import {
  LOAD_RECIPE_LIST,
  LOAD_RECIPE_LIST_SUCCESS,
  LOAD_RECIPE_LIST_ERROR,
} from '../constants';

import {
  loadRecipeList,
  recipeListLoaded,
  recipeListError,
} from '../actions';

describe('App Actions', () => {
  describe('loadRecipeList', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_RECIPE_LIST,
      };

      expect(loadRecipeList()).toEqual(expectedResult);
    });
  });

  describe('recipeListLoaded', () => {
    it('should return the correct type and the passed recipes', () => {
      const recipeList = ['Test'];

      const expectedResult = {
        type: LOAD_RECIPE_LIST_SUCCESS,
        recipeList,
      };

      expect(recipeListLoaded(recipeList)).toEqual(expectedResult);
    });
  });

  describe('recipeListError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        message: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_RECIPE_LIST_ERROR,
        error: fixture,
      };

      expect(recipeListError(fixture)).toEqual(expectedResult);
    });
  });
});
