import React from "react";
import { Button, Gap, Input, Link } from "../../components";
import { LoginBg } from "../../assets";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="RegisterBg" />
      </div>

      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="input your email" />
        <Gap height={5} />
        <Input label="Password" placeholder="input your password" />
        <Gap height={50} />
        <Button
          title="Login"
          onClick={() => {
            history.push("/home");
          }}
        />
        <Gap height={100} />
        <Link
          title={"Belum punya akun, silahkan Daftar"}
          onClick={() => {
            history.push("/register");
          }}
        />
      </div>
    </div>
  );
};

export default Login;
