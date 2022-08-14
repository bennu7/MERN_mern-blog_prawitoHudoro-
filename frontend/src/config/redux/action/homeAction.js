import Axios from "axios";

const baseUrl = "http://localhost:3000/";
export const setDataBlog = (page) => (dispatch) => {
  Axios.get(baseUrl + `api/v1/blog?page=${page}&perPage=4`)
    .then((result) => {
      const responseAPI = result.data.data;

      dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      dispatch({
        type: "UPDATE_PAGE",
        payload: {
          currentPage: responseAPI.current_page,
          totalPage: responseAPI.total_page,
        },
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
