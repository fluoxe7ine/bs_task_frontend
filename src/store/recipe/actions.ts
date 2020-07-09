import { createAsyncAction } from 'typesafe-actions';
import { IRecipe, IRecipeFormData } from 'components/recipe/types';

export enum RecipeTypes {
  GET_ALL_RECIPES = 'GET_ALL_RECIPES',
  GET_ALL_RECIPES_SUCCESS = 'GET_ALL_RECIPES_SUCCESS',
  GET_ALL_RECIPES_FAIL = 'GET_ALL_RECIPES_FAIL',

  CREATE_RECIPE = 'CREATE_RECIPE',
  CREATE_RECIPE_SUCCESS = 'CREATE_RECIPE_SUCCESS',
  CREATE_RECIPE_FAIL = 'CREATE_RECIPE_FAIL',

  GET_RECIPE = 'GET_RECIPE',
  GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS',
  GET_RECIPE_FAIL = 'GET_RECIPE_FAIL',

  EDIT_RECIPE = 'EDIT_RECIPE',
  EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS',
  EDIT_RECIPE_FAIL = 'EDIT_RECIPE_FAIL',
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

  getRecipeAsync: createAsyncAction(
    RecipeTypes.GET_RECIPE,
    RecipeTypes.GET_RECIPE_SUCCESS,
    RecipeTypes.GET_RECIPE_FAIL,
  )<string, IRecipe, undefined>(),

  editRecipeAsync: createAsyncAction(
    RecipeTypes.EDIT_RECIPE,
    RecipeTypes.EDIT_RECIPE_SUCCESS,
    RecipeTypes.EDIT_RECIPE_FAIL,
  )<{ id: string, data: IRecipeFormData }, IRecipe, undefined>(),
};
