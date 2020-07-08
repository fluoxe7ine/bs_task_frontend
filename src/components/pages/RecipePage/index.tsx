import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, generatePath } from 'react-router-dom';
import { book } from 'routes';
import { push } from 'connected-react-router';
import { recipeActions } from 'store/recipe/actions';
import { IStore } from 'store';
import { IRecipe } from 'components/recipe/types';
import { RecipeCard } from 'components/recipe/RecipeCard';
import { Loader, WideButton } from 'components/ui';

export const RecipePage = () => {
  const params = useParams<{id: string}>();
  const dispatch = useDispatch();

  const recipeData = useSelector<IStore, IRecipe | undefined>(({ recipe }) => {
    if (params.id && recipe.recipes) {
      return recipe.recipes.find((r) => r._id === params.id);
    }

    return undefined;
  });

  const lastVersion = recipeData ? recipeData.versions[recipeData.versions.length - 1] : undefined;
  const archiveVersions = recipeData && recipeData.versions.length ? recipeData.versions.slice(0, -1) : undefined;

  const isLoading = useSelector<IStore, boolean>(({ recipe }) => recipe.isLoading);

  useEffect(() => {
    if (params.id && !recipeData) {
      dispatch(recipeActions.getRecipeAsync.request(params.id));
    }
  }, [dispatch, params.id, recipeData]);

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
      {
        archiveVersions?.length
          ? (
            <>
              <h3>Previous versions</h3>
              <div style={{ pointerEvents: 'none' }}>
                {
                  archiveVersions.map((version) => (
                    <RecipeCard
                      key={version._id}
                      title={version.title}
                      description={version.description}
                      date={version.date}
                      id={version._id}
                      cover={version.cover}
                    />
                  ))
                }
              </div>
            </>
)
          : null
      }
    </>
  );
};
