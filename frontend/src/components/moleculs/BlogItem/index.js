import React from "react";
import { LoginBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./blogItem.scss";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
  const history = useHistory();

  return (
    <div className="blog-item">
      <img className="image-thumb" src={LoginBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          loremAnim amet anim eiusmod veniam non. Labore non dolore Lorem ut
          sint. Qui enim non dolor culpa sit ex adipisicing.
        </p>
        <Gap height={10} />
        <Button
          title={"baca selengkapnya"}
          onClick={() => {
            history.push("/detail-blog");
          }}
        />
      </div>
    </div>
  );
};

export default BlogItem;
