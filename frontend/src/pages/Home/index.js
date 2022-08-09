import { React, useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const baseUrl = "http://localhost:3000/";

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]);

  useEffect(() => {
    Axios.get(baseUrl + "api/v1/blog?page=1&perPage=10")
      .then((result) => {
        const responseAPI = result.data.data;

        setDataBlog(responseAPI.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const history = useHistory();

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
