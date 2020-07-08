import { call, put } from 'redux-saga/effects';
import { getRecipe } from 'api/recipe';
import { recipeActions } from '../../actions';

export function* getRecipeWorker({ payload: id }: { payload: string }) {
  try {
    const recipe = yield call(getRecipe, id);

    yield put(recipeActions.getRecipeAsync.success(recipe));
  } catch (e) {
    yield put(recipeActions.getRecipeAsync.failure());
  }
}
