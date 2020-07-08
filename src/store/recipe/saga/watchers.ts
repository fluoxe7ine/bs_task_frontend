import { takeEvery } from 'redux-saga/effects';
import { recipeActions } from '../actions';

import { getAllRecipesWorker, createRecipeWorker } from './workers';

export const recipeWatchers = [
  function* getAllRecipesWatcher() {
    yield takeEvery(recipeActions.getAllRecipesAsync.request, getAllRecipesWorker);
  },
  function* createRecipeWatcher() {
    yield takeEvery(recipeActions.createRecipeAsync.request, createRecipeWorker);
  },
];
