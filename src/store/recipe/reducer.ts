import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { RecipeTypes, recipeActions } from './actions';
import { IRecipe } from '../../components/recipe/types';

export const recipeReducer = combineReducers({
  isLoading: createReducer(true)
    .handleAction([recipeActions.getAllRecipesAsync.request], () => true)
    .handleAction(
      [
        recipeActions.getAllRecipesAsync.success,
        recipeActions.getAllRecipesAsync.failure,
      ],
      () => false,
    ),
  recipes: createReducer<
  IRecipe[] | null,
  {
    type:
    | RecipeTypes.GET_ALL_RECIPES_SUCCESS
    | RecipeTypes.GET_ALL_RECIPES_FAIL;
    payload: IRecipe[];
  }
  >(null).handleAction(
    [recipeActions.getAllRecipesAsync.success],
    (_, action) => action.payload,
  ),
});
