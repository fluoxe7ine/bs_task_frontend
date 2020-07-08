import { call, put } from 'redux-saga/effects';
import { recipeActions } from 'store/recipe/actions';
import { getAllRecipes } from 'api/recipe';

export function* getAllRecipesWorker() {
  try {
    const recipes = yield call(getAllRecipes);
    yield put(recipeActions.getAllRecipesAsync.success(recipes));
  } catch (e) {
    yield put(recipeActions.getAllRecipesAsync.failure());
  }
}
