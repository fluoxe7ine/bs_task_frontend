import { takeEvery } from 'redux-saga/effects';
import { recipeActions } from '../actions';

import {
  getAllRecipesWorker, createRecipeWorker, getRecipeWorker, editRecipeWorker,
} from './workers';

export const recipeWatchers = [
  function* getAllRecipesWatcher() {
    yield takeEvery(recipeActions.getAllRecipesAsync.request, getAllRecipesWorker);
  },
  function* createRecipeWatcher() {
    yield takeEvery(recipeActions.createRecipeAsync.request, createRecipeWorker);
  },
  function* getRecipeWatcher() {
    yield takeEvery(recipeActions.getRecipeAsync.request, getRecipeWorker);
  },
  function* editRecipeWatcher() {
    yield takeEvery(recipeActions.editRecipeAsync.request, editRecipeWorker);
  },
];
