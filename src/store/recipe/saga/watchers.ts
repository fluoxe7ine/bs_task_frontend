import { takeEvery } from 'redux-saga/effects';
import { recipeActions } from '../actions';

import { getAllRecipesWorker } from './workers';

export const recipeWatchers = [
  function* getAllRecipes() {
    yield takeEvery(recipeActions.getAllRecipesAsync.request, getAllRecipesWorker);
  },
];
