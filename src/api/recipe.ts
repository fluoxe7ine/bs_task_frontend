import { ENDPOINTS } from './endpoints';
import { IRecipeFormData } from '../components/recipe/types';

export const getAllRecipes = async () => {
  const response = await fetch(ENDPOINTS.getAllRecipes);
  const recipes = await response.json();

  return recipes;
};

const generateForm = (formData: IRecipeFormData) => {
  const form = new FormData();
  if (formData.cover && formData.cover.length) {
    form.append('cover', formData.cover[0]);
  }
  form.append('title', formData.title);
  form.append('description', formData.description);
  form.append('date', new Date().toISOString());

  return form;
};

export const postRecipe = async (formData: IRecipeFormData) => {
  const form = generateForm(formData);

  const response = await fetch(ENDPOINTS.postRecipe, {
    method: 'POST',
    body: form,
  });

  const data = await response.json();

  return data;
};

export const editRecipe = async (id: string, formData: IRecipeFormData) => {
  const form = generateForm(formData);

  const response = await fetch(`${ENDPOINTS.editRecipe}/${id}`, {
    method: 'POST',
    body: form,
  });

  const data = await response.json();

  return data;
};

export const getRecipe = async (id: string) => {
  const response = await fetch(`${ENDPOINTS.getRecipe}/${id}`);
  const recipe = await response.json();

  return recipe;
};
