// Core
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Middlewares
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
// Roots
import { createBrowserHistory } from 'history';
import { createRootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { IRecipe } from '../components/recipe/types';

const sagaMiddleware = createSagaMiddleware();

export interface IStore {
  recipe: {
    isLoading: boolean;
    recipes: IRecipe[];
  };
}

export const history = createBrowserHistory();

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
