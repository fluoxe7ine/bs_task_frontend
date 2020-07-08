import React from 'react';
import './styles.scss';
import { FaTable } from 'react-icons/fa';
import { useReadableDate, useShortDescription } from 'utils/hooks';
import { IRecipe } from '../types';
import noCover from './assets/nocover.jpg';

export const RecipeCard: React.FC<IRecipe> = ({
  id = null,
  cover,
  title = '',
  description = '',
  date,
}) => {
  const shortDescription = useShortDescription(description, 300);
  const readableDate = useReadableDate(date);

  if (!id || !title || !shortDescription || !readableDate) {
    return null;
  }

  return (
    <div className="recipe">
      <img className="recipe__cover" src={cover ?? noCover} alt="Recipe cover" />
      <div className="recipe__content">
        <h2 className="recipe__title">{title}</h2>
        <article className="recipe__description">{shortDescription}</article>
      </div>
      <div className="recipe__date date">
        <FaTable className="date__icon" />
        <span className="date__label">{readableDate}</span>
      </div>
    </div>
  );
};
