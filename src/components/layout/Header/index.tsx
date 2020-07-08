// Core
import React from 'react';
import { Link } from 'react-router-dom';
import { book } from 'routes';
import './styles.scss';

export const Header = () => (
  <div className="header">
    <Link to={book.homePage}>
      <h1 className="header__title">
        Cookbook Javascript
      </h1>
    </Link>
  </div>
);
