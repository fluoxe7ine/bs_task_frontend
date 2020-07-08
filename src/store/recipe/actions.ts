import { createAsyncAction } from 'typesafe-actions';
import { IRecipe, IRecipeFormData } from 'components/recipe/types';

export enum RecipeTypes {
  GET_ALL_RECIPES = 'GET_ALL_RECIPES',
  GET_ALL_RECIPES_SUCCESS = 'GET_ALL_RECIPES_SUCCESS',
  GET_ALL_RECIPES_FAIL = 'GET_ALL_RECIPES_FAIL',

  CREATE_RECIPE = 'CREATE_RECIPE',
  CREATE_RECIPE_SUCCESS = 'CREATE_RECIPE_SUCCESS',
  CREATE_RECIPE_FAIL = 'CREATE_RECIPE_FAIL',
}

export const recipeActions = {
  getAllRecipesAsync: createAsyncAction(
    RecipeTypes.GET_ALL_RECIPES,
    RecipeTypes.GET_ALL_RECIPES_SUCCESS,
    RecipeTypes.GET_ALL_RECIPES_FAIL,
  )<undefined, IRecipe[], undefined>(),

  createRecipeAsync: createAsyncAction(
    RecipeTypes.CREATE_RECIPE,
    RecipeTypes.CREATE_RECIPE_SUCCESS,
    RecipeTypes.CREATE_RECIPE_FAIL,
  )<IRecipeFormData, IRecipe, undefined>(),
};
