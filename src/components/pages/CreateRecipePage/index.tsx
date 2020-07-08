import React from 'react';
import { RecipeForm } from 'components/recipe';
import { useDispatch } from 'react-redux';
import { recipeActions } from 'store/recipe/actions';
import { IRecipeFormData } from '../../recipe/types';

export const CreateRecipePage = () => {
  const dispatch = useDispatch();

  const onSubmit = (data: IRecipeFormData) => {
    dispatch(recipeActions.createRecipeAsync.request(data));
  };

  return (
    <>
      <RecipeForm onSubmit={onSubmit} submitButtonTitle="Create new recipe" />
    </>
  );
};
