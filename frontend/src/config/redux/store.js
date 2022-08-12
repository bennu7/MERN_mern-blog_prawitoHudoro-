import { createStore } from "redux";
import reducer from "./reducer/reducer";

const store = createStore(reducer);
// const store = configureStore(reducer);

export default store;
