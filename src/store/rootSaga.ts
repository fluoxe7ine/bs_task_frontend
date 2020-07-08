// Core
import { all } from 'redux-saga/effects';
// Watchers
import { recipeWatchers as recipe } from './recipe/saga/watchers';

const run = (watchers: any) => watchers.map((watcher: any) => watcher());

export function* rootSaga() {
  yield all([
    recipe,
  ].map(run).reduce((watchers, group) => [...watchers, ...group], []));
}
