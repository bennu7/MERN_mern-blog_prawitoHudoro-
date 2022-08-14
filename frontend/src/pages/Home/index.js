import { React, useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";

const baseUrl = "http://localhost:3000/";

const Home = () => {
  const [counter, setCounter] = useState(1);

  const history = useHistory();
  const dispatch = useDispatch();

  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  console.log("page : ", page);

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const previousPage = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const nextPage = () => {
    setCounter(counter >= page.totalPage ? page.totalPage : counter + 1);
  };

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
        <Button title={"Previous"} onClick={previousPage} />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={20} />
        <Button title={"Next"} onClick={nextPage} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
