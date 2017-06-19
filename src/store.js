import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

const initialState = {
  test: [1, 2, 3]
};
const enhancers = [];
// const middleware = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const store = createStore(rootReducer, initialState);

export default store;
