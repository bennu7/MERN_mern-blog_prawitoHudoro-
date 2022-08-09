const { createStore } = require("redux");
// const { configureStore } = require("@reduxjs/toolkit");

const initialState = {
  dataBlogs: [],
  name: "Lalu Ibnu Hidayatullah ibnudev",
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlogs: action.payload,
    };
  }
  if (action.type === "UPDATE_NAME")
    return {
      ...state,
      name: "Ibnu",
    };

  return state;
};

const store = createStore(reducer);
// const store = configureStore(reducer);

export default store;
