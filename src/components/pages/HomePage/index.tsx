import React from 'react';
import { useHistory } from 'react-router-dom';
import { WideButton } from '../../ui/WideButton';
import { RecipeCards } from '../../recipe/RecipeCards';
import { book } from '../../../routes';

export const HomePage = () => {
  const history = useHistory();

  const addNewRecipeHandler = () => {
    history.push(book.createRecipePage);
  };

  return (
    <>
      <WideButton type="button" onClick={addNewRecipeHandler} color="#ff9a00">Add new recipe</WideButton>
      <RecipeCards />
    </>
  );
};
