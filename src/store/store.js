import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { changeNews } from "../reducer/reducer";

export const createMystore = () =>
  createStore(changeNews, applyMiddleware(logger, thunk));
