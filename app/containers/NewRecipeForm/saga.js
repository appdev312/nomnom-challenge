import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SAVE_RECIPE } from './constants';
import * as actions from './actions';
import { loadRecipeList } from '../RecipeList/actions';
import request from 'utils/request';

export function* saveRecipe(action) {
  try {
    const res = yield call(
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

    yield put(actions.saveRecipeSuccess());
    yield put(loadRecipeList());
  } catch (err) {
    yield put(actions.saveRecipeError());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* triggerFunctions() {
  yield takeLatest(SAVE_RECIPE, saveRecipe);
}
