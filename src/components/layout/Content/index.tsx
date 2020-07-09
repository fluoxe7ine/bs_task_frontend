// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { book } from 'routes';
import {
  HomePage, CreateRecipePage, RecipePage, EditRecipePage,
} from 'components/pages';
import './styles.scss';

export const Content = () => (
  <div className="content">
    <Switch>
      <Route path={book.homePage} exact>
        <HomePage />
      </Route>
      <Route path={book.recipePage} exact>
        <RecipePage />
      </Route>
      <Route path={book.editRecipePage} exact>
        <EditRecipePage />
      </Route>
      <Route path={book.createRecipePage} exact>
        <CreateRecipePage />
      </Route>
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  </div>
);
