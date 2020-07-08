import { ENDPOINTS } from './endpoints';

export const getAllRecipes = async () => {
  const response = await fetch(ENDPOINTS.getAllRecipes);
  const recipes = await response.json();

  return recipes;
};
