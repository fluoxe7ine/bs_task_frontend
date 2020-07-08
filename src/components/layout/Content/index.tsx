// Core
import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { book } from 'routes';
import './styles.scss';
// Components
import { RecipeCards } from 'components/recipe';
import { WideButton } from 'components/ui';

export const Content = () => {
  const history = useHistory();

  const addNewRecipeHandler = () => {
    history.push(book.createRecipePage);
  };

  return (
    <div className="content">
      <Switch>
        <Route path={book.homePage} exact>
          <WideButton onClick={addNewRecipeHandler} color="#ff9a00">Add new recipe</WideButton>
          <RecipeCards />
        </Route>
        <Route path={book.recipePage} exact>
          <div>recipe page</div>
        </Route>
        <Route path={book.editRecipePage} exact>
          <div>edit recipe</div>
        </Route>
        <Route path={book.createRecipePage} exact>
          <div>create recipe</div>
        </Route>
        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </div>
  );
};
