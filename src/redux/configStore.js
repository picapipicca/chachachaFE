import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import Card from "./modules/card";
import comment from "./modules/comment";

//리듀서엮기
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  comment:Comment,
  user: User,
  card: Card,
  router: connectRouter(history),
});

// 미들웨어 묶기
const middlewares = [thunk.withExtraArgument({history: history})];

    // 어느 환경인 지 알려줌(개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// logger
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
//redux devTools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
//미들웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//스토어 만들기
let store = (initialStore) => createStore(rootReducer, enhancer);

    export default store();