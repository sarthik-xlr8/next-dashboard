// import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import Reducers from "../reducers";

// const store = () => {
//   const store = createStore(Reducers, applyMiddleware(thunkMiddleware));
//   return store;
// };

// export default store;

import { createStore, compose } from "redux";
import Reducers from "../reducers";

const Store = (initialState = {}) => {
  const enhancers = compose(
    typeof window !== "undefined" && window.devToolsExtension
      ? window.devToolsExtension()
      : (f) => f
  );
  const store = createStore(Reducers, initialState, enhancers);
  return store;
};

export default Store;
