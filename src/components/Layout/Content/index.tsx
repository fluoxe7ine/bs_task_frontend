// Core
import React from 'react';
import './styles.scss';
// Components
import { RecipeCards } from 'components/Recipe';

const recipes = [
  {
    id: '0',
    description: 'test',
    title: 'test title',
    date: new Date(),
  },
];

export const Content = () => (
  <div className="content">
    <RecipeCards recipes={recipes} />
  </div>
);
