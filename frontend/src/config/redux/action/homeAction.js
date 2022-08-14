import Axios from "axios";

const baseUrl = "http://localhost:3000/";
export const setDataBlog = () => (dispatch) => {
  Axios.get(baseUrl + "api/v1/blog?page=1&perPage=10")
    .then((result) => {
      const responseAPI = result.data.data;

      dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
