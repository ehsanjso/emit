import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sectionsReducer from "../reducers/sections";
import timerReducer from "../reducers/timer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      sections: sectionsReducer,
      timer: timerReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
