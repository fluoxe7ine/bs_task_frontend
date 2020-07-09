import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { RecipeTypes, recipeActions } from './actions';
import { IRecipe } from '../../components/recipe/types';

type RecipesState = null | IRecipe[];
type RecipesAction =
  | { type: RecipeTypes.EDIT_RECIPE_SUCCESS; payload: IRecipe }
  | { type: RecipeTypes.CREATE_RECIPE_SUCCESS; payload: IRecipe }
  | { type: RecipeTypes.GET_ALL_RECIPES_SUCCESS; payload: IRecipe[] }
  | { type: RecipeTypes.GET_RECIPE_SUCCESS; payload: IRecipe};

export const recipeReducer = combineReducers({
  isLoading: createReducer(true)
    .handleAction(
      [
        recipeActions.getAllRecipesAsync.request,
        recipeActions.createRecipeAsync.request,
        recipeActions.getRecipeAsync.request,
        recipeActions.editRecipeAsync.request,
      ],
      () => true,
    )
    .handleAction(
      [
        recipeActions.getAllRecipesAsync.success,
        recipeActions.getAllRecipesAsync.failure,
        recipeActions.createRecipeAsync.success,
        recipeActions.createRecipeAsync.failure,
        recipeActions.getRecipeAsync.success,
        recipeActions.getRecipeAsync.failure,
        recipeActions.editRecipeAsync.success,
        recipeActions.editRecipeAsync.failure,
      ],
      () => false,
    ),
  recipes: createReducer<RecipesState, RecipesAction>(null)
    .handleAction(
      [recipeActions.getAllRecipesAsync.success],
      (_, action) => action.payload,
    )
    .handleAction(
      [recipeActions.createRecipeAsync.success, recipeActions.getRecipeAsync.success],
      (store, action) => {
        if (store) {
          return store.concat(action.payload);
        }

        return [action.payload];
      },
    ).handleAction(
      [recipeActions.editRecipeAsync.success], (store, action) => {
        if (store) {
          const recipeIndex = store.findIndex((r) => r._id === action.payload._id);
          const newStore = [...store];
          newStore[recipeIndex] = action.payload;

          return newStore;
        }

        return [action.payload];
      },
    ),
});
