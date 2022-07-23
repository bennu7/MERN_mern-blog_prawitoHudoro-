import React from "react";
import "./createBlog.scss";
import { Button, Gap, Input, TextArea, Upload } from "../../components";

const CreateBlog = () => {
  return (
    <div className="blog-post">
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
