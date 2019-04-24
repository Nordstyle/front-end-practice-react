import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { usersReducer } from "./reducers";

export default createStore(usersReducer, applyMiddleware(thunk));