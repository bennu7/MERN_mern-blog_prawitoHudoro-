import React from "react";
import {
  ICFacebook,
  ICGithub,
  ICInstagram,
  ICTelegram,
  ICTwitter,
  LogoIbnuDev,
} from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoIbnuDev} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICFacebook} />
          <Icon img={ICInstagram} />
          <Icon img={ICTelegram} />
          <Icon img={ICGithub} />
          <Icon img={ICTwitter} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2022</p>
      </div>
    </div>
  );
};

export default Footer;
