import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchFetchNeuro } from "./Middleware/Middleware";
import AuthStore from "./Store/AuthStore";
import PredictionStore from "./Store/PredictionStore";
const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    AuthStore: AuthStore,
    PredictionStore: PredictionStore,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchNeuro);

export default Store;
