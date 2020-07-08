import React from 'react';
import { RecipeCard } from 'components/Recipe';
import { IRecipe } from '../types';

interface IRecipeCards {
  recipes: IRecipe[]
}

export const RecipeCards: React.FC<IRecipeCards> = ({
  recipes = [],
}) => {
  if (!recipes.length) {
    return <span>Sorry, there are no recipes yet</span>;
  }

  return (
    <>
      {recipes.map(({
        id, date, cover, description, title,
      }) => <RecipeCard key={id} id={id} date={date} description={description} title={title} cover={cover} />)}
    </>
  );
};
