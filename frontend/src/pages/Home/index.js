import { React, useEffect } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";

const baseUrl = "http://localhost:3000/";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const dataBlog = useSelector((state) => state.homeReducer.dataBlog);

  useEffect(() => {
    dispatch(setDataBlog());
  }, [dispatch]);

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title={"create blog"}
          onClick={() => {
            history.push("/create-blog");
          }}
        />
      </div>
      {/* <p>state global : {name}</p> */}
      {/* <p>{stateGlobal.name}</p> */}
      <Gap height={20} />
      <div className="content-wrapper">
        {/* better make metode ini null */}
        {Array.isArray(dataBlog)
          ? dataBlog.map((blog) => {
              return (
                <BlogItem
                  key={blog._id}
                  image={baseUrl + blog.image}
                  title={blog.title}
                  body={blog.body}
                  name={blog.author.name}
                  date={blog.createdAt}
                />
              );
            })
          : null}
        {/* {dataBlog.map((blog) => {
          return <BlogItem key={blog._id} />;
        })} */}
      </div>
      <div className="pagination">
        <Button title={"Previoes"} />
        <Gap width={20} />
        <Button title={"Next"} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
