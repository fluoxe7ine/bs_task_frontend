// Core
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// Middlewares
import createSagaMiddleware from "redux-saga";
// Roots
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { IRecipe } from "../components/recipe/types";

const sagaMiddleware = createSagaMiddleware();

export interface IStore {
  recipe: {
    isLoading: boolean;
    recipes: IRecipe[];
  };
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
