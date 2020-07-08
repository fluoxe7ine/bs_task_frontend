import React, { useEffect } from 'react';
import { RecipeCard } from 'components/recipe';
import { useDispatch, useSelector } from 'react-redux';
import { recipeActions } from 'store/recipe/actions';
import { IStore } from 'store';
import { Loader } from 'components/ui/Loader';
import { IRecipe, IRecipeVersion } from '../types';

export const RecipeCards: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector<IStore, boolean>(
    ({ recipe }) => recipe.isLoading,
  );
  const recipes = useSelector<IStore, IRecipe[]>(
    ({ recipe }) => recipe.recipes,
  );

  useEffect(() => {
    if (!recipes) {
      dispatch(recipeActions.getAllRecipesAsync.request());
    }
  }, [dispatch, recipes]);

  if (isLoading) {
    return <Loader />;
  }

  if (!recipes.length && !isLoading) {
    return <span>Sorry, there are no recipes yet</span>;
  }

  return (
    <>
      {recipes.map(({ _id: id, versions }) => {
        const [
          latestVersion,
        ] = versions.sort((v1: IRecipeVersion, v2: IRecipeVersion) => (new Date(v1.date) < new Date(v2.date) ? 1 : 0));

        return (
          <RecipeCard
            key={id}
            id={id}
            date={latestVersion.date}
            description={latestVersion.description}
            title={latestVersion.title}
            cover={latestVersion.cover}
          />
        );
      })}
    </>
  );
};
