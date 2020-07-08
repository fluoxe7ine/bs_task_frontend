// Core
import React from 'react';
import { Link } from 'react-router-dom';
import { book } from 'routes';
import './styles.scss';

export const Header = () => (
  <div className="header">
    <h1 className="header__title">
      <Link to={book.homePage}>
        Cookbook Javascript
      </Link>
    </h1>
  </div>
);
