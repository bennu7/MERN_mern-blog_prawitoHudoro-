import React from "react";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="RegisterBg" />
      </div>

      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="input your name" />
        <Gap height={5} />
        <Input label="Email" placeholder="input your email" />
        <Gap height={5} />
        <Input label="Password" placeholder="input your password" />
        <Gap height={50} />
        <Button title="register" />
        <Gap height={100} />
        <Link title={"Kembali ke Login"} />
      </div>
    </div>
  );
};

export default Register;
