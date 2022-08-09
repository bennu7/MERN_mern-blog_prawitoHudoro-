import React from "react";
// import { LoginBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./blogItem.scss";
import { useHistory } from "react-router-dom";

const BlogItem = (props) => {
  const history = useHistory();
  const { image, title, body, name, date } = props;

  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="post" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">
          {name} - {date ? date : null}
        </p>
        <p className="body">{body}</p>
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
