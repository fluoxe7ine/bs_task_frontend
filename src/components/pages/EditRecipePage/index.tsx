import React from 'react';
import { RecipeForm } from 'components/recipe';
import { useDispatch } from 'react-redux';
import { recipeActions } from 'store/recipe/actions';
import { useParams } from 'react-router-dom';
import { useRecipe } from 'utils/hooks';
import { IRecipeFormData } from '../../recipe/types';

export const EditRecipePage = () => {
  const params = useParams<{id: string}>();
  const dispatch = useDispatch();

  const recipeData = useRecipe(params.id);
  const lastVersion = recipeData ? recipeData.versions[recipeData.versions.length - 1] : undefined;

  const onSubmit = (data: IRecipeFormData) => {
    dispatch(recipeActions.editRecipeAsync.request({ id: params.id, data }));
  };

  if (!lastVersion) {
    return null;
  }

  return (
    <>
      <RecipeForm
        onSubmit={onSubmit}
        submitButtonTitle="Edit recipe"
        initialTitle={lastVersion.title}
        initialDescription={lastVersion.description}
      />
    </>
  );
};
