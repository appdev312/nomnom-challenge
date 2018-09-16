import { fromJS } from 'immutable';

import appReducer from '../reducer';
import { loadRecipeList, recipeListLoaded, recipeListError } from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      recipeList: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadRecipeList action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('recipeList', false);

    expect(appReducer(state, loadRecipeList())).toEqual(expectedResult);
  });

  it('should handle the recipeListLoaded action correctly', () => {
    const fixture = [
      {
        title: 'test recipe',
        content: 'I love test recipe',
      },
    ];
    const expectedResult = state
      .set('recipeList', fixture)
      .set('loading', false);

    expect(appReducer(state, recipeListLoaded(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the recipeListError action correctly', () => {
    const fixture = {
      message: 'Not found',
    };
    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(appReducer(state, recipeListError(fixture))).toEqual(
      expectedResult,
    );
  });
});
