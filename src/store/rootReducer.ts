// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { recipeReducer as recipe } from './recipe/reducer';

export const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  recipe,
});
