import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer, Header } from "../../components";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import "./mainApp.scss";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
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
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
