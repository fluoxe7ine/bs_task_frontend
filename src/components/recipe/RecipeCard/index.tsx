import React from 'react';
import './styles.scss';
import { FaTable } from 'react-icons/fa';
import { useReadableDate, useShortDescription } from 'utils/hooks';
import { IRecipeCard } from '../types';
import noCover from './assets/nocover.jpg';

export const RecipeCard: React.FC<IRecipeCard> = ({
  id = null,
  cover,
  title = '',
  description = '',
  date,
}) => {
  const shortDescription = useShortDescription(description, 300);
  const readableDate = useReadableDate(new Date(date));

  if (!id || !title || !shortDescription || !readableDate) {
    return null;
  }

  return (
    <div className="recipe">
      <img className="recipe__cover" src={cover || noCover} alt="Recipe cover" />
      <div className="recipe__content">
        <h2 className="recipe__title">{title}</h2>
        <span className="recipe__description">{shortDescription}</span>
      </div>
      <div className="recipe__date date">
        <FaTable className="date__icon" />
        <span className="date__label">{readableDate}</span>
      </div>
    </div>
  );
};
