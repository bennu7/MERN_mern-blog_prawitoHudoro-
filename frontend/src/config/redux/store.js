import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));
// const store = configureStore(reducer);

export default store;
