import { push } from 'react-router-redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import {
  LOAD_RECIPE_DETAIL,
  DELETE_RECIPE,
} from './constants';
import * as actions from './actions';

export function* loadRecipeDetail(action) {
  try {
    const res = yield call(
      request,
      '_find',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: action.id,
        }),
      }
    );

    if (res.length > 0) {
      yield put(actions.recipeDetailLoaded(res[0]));
    } else {
      yield put(actions.recipeDetailError(new Error('Not found')));
    }
  } catch (err) {
    yield put(actions.recipeDetailError(err));
  }
}

export function* deleteRecipe(action) {
  try {
    yield call(
      request,
      '_delete',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: action.id,
        }),
      }
    );

    yield put(actions.deleteRecipeSuccess());
    yield put(push('/'));
  } catch (err) {
    yield put(actions.deleteRecipeError());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* triggerFunctions() {
  yield takeLatest(LOAD_RECIPE_DETAIL, loadRecipeDetail);
  yield takeLatest(DELETE_RECIPE, deleteRecipe);
}
