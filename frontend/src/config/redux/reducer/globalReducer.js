const initialState = {
  // dataBlogs: [],
  name: "Lalu Ibnu Hidayatullah ibnudev",
};
const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME")
    return {
      ...state,
      name: "Ibnu",
    };

  return state;
};

export default globalReducer;
