import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { generatePath } from 'react-router-dom';
import { book } from 'routes';
import { editRecipe } from 'api/recipe';
import { IRecipeFormData } from 'components/recipe/types';
import { recipeActions } from '../../actions';

export function* editRecipeWorker({
  payload: { id, data },
}: {
  payload: { id: string; data: IRecipeFormData };
}) {
  try {
    const recipe = yield call(editRecipe, id, data);
    yield put(recipeActions.editRecipeAsync.success(recipe));
    yield put(push(generatePath(book.recipePage, { id })));
  } catch (e) {
    yield put(recipeActions.editRecipeAsync.failure());
  }
}
