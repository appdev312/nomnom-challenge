import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_RECIPE_LIST } from './constants';
import * as actions from './actions';

import request from 'utils/request';

export function* loadRecipeList() {
  try {
    const res = yield call(
      request,
      '_find',
      {
        method: 'POST',
      }
    );

    yield put(actions.recipeListLoaded(res));
  } catch (err) {
    yield put(actions.recipeListError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* triggerFunctions() {
  yield takeLatest(LOAD_RECIPE_LIST, loadRecipeList);
}
