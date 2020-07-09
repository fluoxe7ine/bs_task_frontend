import React, { useEffect } from 'react';
import './styles.scss';
import { RecipeCard } from 'components/recipe';
import { useDispatch, useSelector } from 'react-redux';
import { recipeActions } from 'store/recipe/actions';
import { IStore } from 'store';
import { useCached } from 'utils/hooks';
import { Link, generatePath } from 'react-router-dom';
import { book } from 'routes';
import { IRecipe, IRecipeCard } from '../types';
import { Loader } from '../../ui/Loader';

export const RecipeCards: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector<IStore, boolean>(
    ({ recipe }) => recipe.isLoading,
  );
  const recipes = useSelector<IStore, IRecipe[]>(
    ({ recipe }) => recipe.recipes,
  );

  useEffect(() => {
    dispatch(recipeActions.getAllRecipesAsync.request());
  }, [dispatch]);

  const cachedRecipes = useCached(recipes);

  if (isLoading && !cachedRecipes) {
    return <Loader />;
  }

  if (!cachedRecipes?.length && !isLoading) {
    return <span>Sorry, there are no recipes yet</span>;
  }

  return (
    <>
      {cachedRecipes.map(({ _id: id, versions }) => {
        const latestVersion = versions[versions.length - 1];

        return {
          id,
          ...latestVersion,
        };
      })
        .reverse()
        .map((recipe: IRecipeCard) => (
          <Link
            key={recipe.id}
            className="card"
            to={generatePath(book.recipePage, { id: recipe.id })}
          >
            <RecipeCard
              id={recipe.id}
              date={recipe.date}
              description={recipe.description}
              title={recipe.title}
              cover={recipe.cover}
            />
          </Link>
        ))}
    </>
  );
};
