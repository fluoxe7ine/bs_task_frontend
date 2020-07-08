import { createAsyncAction } from "typesafe-actions";
import { IRecipe } from "components/recipe/types";

export enum RecipeTypes {
  GET_ALL_RECIPES = "GET_ALL_RECIPES",
  GET_ALL_RECIPES_SUCCESS = "GET_ALL_RECIPES_SUCCESS",
  GET_ALL_RECIPES_FAIL = "GET_ALL_RECIPES_FAIL",
}

export const recipeActions = {
  getAllRecipesAsync: createAsyncAction(
    RecipeTypes.GET_ALL_RECIPES,
    RecipeTypes.GET_ALL_RECIPES_SUCCESS,
    RecipeTypes.GET_ALL_RECIPES_FAIL
  )<undefined, IRecipe[], undefined>(),
};
