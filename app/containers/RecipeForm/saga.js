import { push } from 'react-router-redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { SAVE_RECIPE } from './constants';
import { saveRecipeSuccess, saveRecipeError } from './actions';
import { loadRecipeList } from '../App/actions';

export function* saveRecipe(action) {
  try {
    yield call(
      request,
      '_store',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.recipe),
      }
    );

    yield [
      put(saveRecipeSuccess()),
      put(loadRecipeList()),
      put(push('/')),
    ];
  } catch (err) {
    yield put(saveRecipeError());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* triggerFunctions() {
  yield takeLatest(SAVE_RECIPE, saveRecipe);
}
