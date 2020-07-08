// Core
import { combineReducers } from 'redux';
import { recipeReducer as recipe } from './recipe/reducer';

export const rootReducer = combineReducers({
  recipe,
});
