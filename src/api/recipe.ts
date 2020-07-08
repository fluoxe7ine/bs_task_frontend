import { ENDPOINTS } from './endpoints';
import { IRecipeFormData } from '../components/recipe/types';

export const getAllRecipes = async () => {
  const response = await fetch(ENDPOINTS.getAllRecipes);
  const recipes = await response.json();

  return recipes;
};

export const postRecipe = async ({ cover, title, description }: IRecipeFormData) => {
  const form = new FormData();
  if (cover && cover.length) {
    form.append('cover', cover[0]);
  }
  form.append('title', title);
  form.append('description', description);
  form.append('date', new Date().toISOString());

  const response = await fetch(ENDPOINTS.postRecipe, {
    method: 'POST',
    body: form,
  });

  const data = await response.json();

  console.log({ data });

  return data;
};
