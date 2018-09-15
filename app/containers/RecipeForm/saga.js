import { call, put, takeLatest } from 'redux-saga/effects';

import {
  SAVE_RECIPE,
} from './constants';
import { saveRecipeSuccess, saveRecipeError } from './actions';
import { loadRecipeList } from '../App/actions';
import { loadRecipeDetail } from '../RecipeDetail/actions';
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
    yield put(saveRecipeSuccess());
    
    if (action.recipe.id) {
      // edit form
      yield put(loadRecipeDetail(action.recipe.id));
    } else {
      yield put(loadRecipeList());
    }
  } catch (err) {
    console.log(err);
    yield put(saveRecipeError());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* triggerFunctions() {
  yield takeLatest(SAVE_RECIPE, saveRecipe);
}
