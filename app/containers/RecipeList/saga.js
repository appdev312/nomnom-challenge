import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { LOAD_RECIPE_LIST } from '../App/constants';
import { recipeListLoaded, recipeListError } from '../App/actions';

export function* loadRecipeList() {
  try {
    const res = yield call(
      request,
      '_find',
      {
        method: 'POST',
      }
    );

    yield put(recipeListLoaded(res));
  } catch (err) {
    yield put(recipeListError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* triggerFunctions() {
  yield takeLatest(LOAD_RECIPE_LIST, loadRecipeList);
}
