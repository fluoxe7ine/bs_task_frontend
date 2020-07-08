import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { book } from 'routes';
import { generatePath } from 'react-router-dom';
import { IRecipeFormData } from 'components/recipe/types';
import { postRecipe } from 'api/recipe';
import { recipeActions } from '../../actions';

export function* createRecipeWorker({ payload: formData }: { payload: IRecipeFormData }) {
  try {
    const recipe = yield call(postRecipe, formData);

    yield put(recipeActions.createRecipeAsync.success(recipe));
    yield put(push(generatePath(book.recipePage, { id: recipe._id })));
  } catch (e) {
    yield put(recipeActions.createRecipeAsync.failure());
  }
}
