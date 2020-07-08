import React from 'react';
import './styles.scss';
import { FaTable } from 'react-icons/fa';
import { useReadableDate, useShortDescription } from 'utils/hooks';
import { Link, generatePath } from 'react-router-dom';
import { book } from 'routes';
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
    <Link className="recipe" to={generatePath(book.recipePage, { id })}>
      <img className="recipe__cover" src={cover || noCover} alt="Recipe cover" />
      <div className="recipe__content">
        <h2 className="recipe__title">{title}</h2>
        <article className="recipe__description">{shortDescription}</article>
      </div>
      <div className="recipe__date date">
        <FaTable className="date__icon" />
        <span className="date__label">{readableDate}</span>
      </div>
    </Link>
  );
};
