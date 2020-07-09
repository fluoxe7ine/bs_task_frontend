import React from 'react';
import './styles.scss';
import { RecipeCard } from '../RecipeCard';
import { useRecipe } from '../../../utils/hooks';

export interface IArchivedRecipes {
  recipeId: string
}

export const ArchivedRecipes: React.FC<IArchivedRecipes> = ({ recipeId }) => {
  const recipeData = useRecipe(recipeId);

  const archiveVersions = recipeData && recipeData.versions.length ? recipeData.versions.slice(0, -1) : undefined;

  if (!archiveVersions?.length) {
    return null;
  }

  return (
    <div className="recipes">
      <h3 className="recipes__title">Previous versions</h3>
      {
      archiveVersions.reverse().map((version) => (
        <div key={version._id} className="recipes__item">
          <RecipeCard
            key={version._id}
            title={version.title}
            description={version.description}
            date={version.date}
            id={version._id}
            cover={version.cover}
          />
        </div>
      ))
    }
    </div>
  );
};
