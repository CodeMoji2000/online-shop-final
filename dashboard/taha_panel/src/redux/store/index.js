import reducers from "../reducer/index.js";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import dataSaga from "../saga/index.js";
// import { USER_LOGOUT } from "../constant/types";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  // if (action.type === USER_LOGOUT) {
  //   state = undefined;
  // }

  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware({
  onError: (error) => {
    console.log("saga error : ", error);
  },
});
const enhancers = applyMiddleware(sagaMiddleware);

const store = createStore(persistedReducer, enhancers);
const persistor = persistStore(store);

sagaMiddleware.run(dataSaga);

export { store, persistor };
