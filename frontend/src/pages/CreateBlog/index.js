import React from "react";
import "./createBlog.scss";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components";
import { useHistory } from "react-router-dom";
import "../";

const CreateBlog = () => {
  const history = useHistory();

  return (
    <div className="blog-post">
      <Link
        title={"kembali"}
        onClick={() => {
          history.goBack();
        }}
      />
      <p className="title">CreateBlog new blog post</p>
      <Input label={"Post Title"} />
      <p>Upload Image</p>
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title={"Save"} />
      </div>
    </div>
  );
};

export default CreateBlog;
