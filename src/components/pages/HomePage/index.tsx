import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { WideButton } from '../../ui/WideButton';
import { RecipeCards } from '../../recipe/RecipeCards';
import { book } from '../../../routes';

export const HomePage = () => {
  const dispatch = useDispatch();

  const addNewRecipeHandler = () => {
    dispatch(push(book.createRecipePage));
  };

  return (
    <>
      <WideButton type="button" onClick={addNewRecipeHandler} color="#ff9a00">Add new recipe</WideButton>
      <RecipeCards />
    </>
  );
};
