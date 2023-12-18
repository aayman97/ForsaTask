import { createStore, combineReducers, applyMiddleware } from "redux";

import settingReducer from "./reducers/settingReducer";

const rootReducer = combineReducers({
  settingReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
