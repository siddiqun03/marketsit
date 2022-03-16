import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/site-logo.svg";
import "./Header.css";
import translate from "../../localization/content";
import { Context } from "../../context/langContext";
import { Context as totalContext } from "../../context/Totally";

function Header() {
  const { lang } = useContext(Context);
  const { liked, totally } = useContext(totalContext);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-left">
          <Link className="link logo-link" to="/">
            <img
              className="logo"
              src={logo}
              alt="logo"
              title="QPICK"
              width={85}
              height={30}
            />
          </Link>
          <div className="dropDown">
            <p className="dropDown-desc">{translate[lang].header.dropHeader}</p>
          </div>
        </div>
        <div className="header-right">
          <Link
            className="link heart-link"
            to="/selected"
            title="favorite | избринной"
          >
            <span className="heart"></span>
            <span className="shop-count heart-count">{liked.length}</span>
          </Link>
          <Link className="link shopping-link" to="/card">
            <span className="shopping-bug"></span>
            <span className="shop-count">{totally.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
