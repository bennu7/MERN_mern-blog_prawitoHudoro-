import { React, useEffect } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/blog";

const Home = () => {
  useEffect(() => {
    console.log("harusnya keluar", baseUrl);
    Axios.get(baseUrl)
      .then((result) => {
        console.log("data API => ", result.data);
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
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
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
