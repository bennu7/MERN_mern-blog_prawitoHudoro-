import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";

const MainApp = () => {
  return (
    <div>
      <p>Header</p>
      <Router>
        <switch>
          <Route path={"/home"}>
            <Home />
          </Route>
          <Route path={"/create-blog"}>
            <CreateBlog />
          </Route>
          <Route path={"/detail-blog"}>
            <DetailBlog />
          </Route>
        </switch>
      </Router>
      <p>Footer</p>
    </div>
  );
};

export default MainApp;
