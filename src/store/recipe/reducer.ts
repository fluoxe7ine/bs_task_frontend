import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { RecipeTypes, recipeActions } from './actions';
import { IRecipe } from '../../components/recipe/types';

type RecipesState = null | IRecipe[];
type RecipesAction =
  | { type: RecipeTypes.CREATE_RECIPE_SUCCESS; payload: IRecipe }
  | { type: RecipeTypes.GET_ALL_RECIPES_SUCCESS; payload: IRecipe[] };

export const recipeReducer = combineReducers({
  isLoading: createReducer(true)
    .handleAction(
      [
        recipeActions.getAllRecipesAsync.request,
        recipeActions.createRecipeAsync.request,
      ],
      () => true,
    )
    .handleAction(
      [
        recipeActions.getAllRecipesAsync.success,
        recipeActions.getAllRecipesAsync.failure,
        recipeActions.createRecipeAsync.success,
        recipeActions.createRecipeAsync.failure,
      ],
      () => false,
    ),
  recipes: createReducer<RecipesState, RecipesAction>(null)
    .handleAction(
      [recipeActions.getAllRecipesAsync.success],
      (_, action) => action.payload,
    )
    .handleAction(
      [recipeActions.createRecipeAsync.success],
      (store, action) => {
        if (store) {
          return store.concat(action.payload);
        }

        return [action.payload];
      },
    ),
});
