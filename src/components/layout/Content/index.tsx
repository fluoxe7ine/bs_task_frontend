// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { book } from 'routes';
import { HomePage, CreateRecipePage } from 'components/pages';
import './styles.scss';

export const Content = () => (
  <div className="content">
    <Switch>
      <Route path={book.homePage} exact>
        <HomePage />
      </Route>
      <Route path={book.recipePage} exact>
        <div>recipe page</div>
      </Route>
      <Route path={book.editRecipePage} exact>
        <div>edit recipe</div>
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
