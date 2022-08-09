const { createStore } = require("redux");
// const { configureStore } = require("@reduxjs/toolkit");

const initialState = {
  dataBlog: [],
  name: "Lalu Ibnu",
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);
// const store = configureStore(reducer);

export default store;
