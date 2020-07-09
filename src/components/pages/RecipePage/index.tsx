import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, generatePath } from 'react-router-dom';
import { book } from 'routes';
import { push } from 'connected-react-router';
import { IStore } from 'store';
import { useRecipe } from 'utils/hooks';
import { RecipeCard, ArchivedRecipes } from 'components/recipe';
import { Loader, WideButton } from 'components/ui';

export const RecipePage = () => {
  const params = useParams<{id: string}>();
  const dispatch = useDispatch();

  const recipeData = useRecipe(params.id);

  const lastVersion = recipeData ? recipeData.versions[recipeData.versions.length - 1] : undefined;

  const isLoading = useSelector<IStore, boolean>(({ recipe }) => recipe.isLoading);

  const editButtonHandler = () => {
    dispatch(push(generatePath(book.editRecipePage, { id: params.id })));
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!recipeData || !lastVersion) {
    return null;
  }

  return (
    <>
      <RecipeCard
        title={lastVersion.title}
        description={lastVersion.description}
        date={lastVersion.date}
        id={lastVersion._id}
        cover={lastVersion.cover}
      />
      <WideButton color="skyblue" type="button" onClick={editButtonHandler}>Edit Recipe</WideButton>
      <ArchivedRecipes recipeId={params.id} />
    </>
  );
};
