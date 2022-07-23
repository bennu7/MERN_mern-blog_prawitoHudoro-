import React from "react";
import { RegisterBg } from "../../assets";
import "./detail-blog.scss";

const DetailBlog = () => {
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Content Blog loremEt sint non nostrud minim minim duis Lorem voluptate
        aute minim deserunt dolore cillum cillum. Aliqua eiusmod elit aliquip
        esse Lorem id sunt excepteur velit minim voluptate. Id exercitation
        nostrud incididunt sunt consectetur. Consequat sit nostrud nisi do
        fugiat et ex nulla culpa laborum. Enim cupidatat non consectetur minim
        sunt do dolore. Quis veniam do adipisicing magna incididunt.
        Exercitation non enim reprehenderit qui commodo qui elit in ad quis
        Lorem in ex id. Culpa enim in voluptate cillum mollit ut veniam eiusmod
        incididunt ullamco minim cillum. lQui ad mollit consequat pariatur
        excepteur dolor. Commodo laboris reprehenderit pariatur nulla enim. Duis
        fugiat qui enim sint occaecat ipsum. Deserunt ullamco qui laboris
        officia fugiat. Mollit non consequat nostrud deserunt ex ut Lorem ex.
      </p>
    </div>
  );
};

export default DetailBlog;
