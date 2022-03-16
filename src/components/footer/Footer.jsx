import React, { useContext } from "react";
// import translate from "../../localization/content";
import { Context } from "../../context/langContext";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../images/site-logo.svg";
import vk from "../../images/VK.svg";
import instagram from "../../images/Instagram.svg";
import telegram from "../../images/Telegram.svg";
import whatsapp from "../../images/Whatsapp.svg";

function Footer() {
  const { lang, setLang } = useContext(Context);
  return (
    <footer className="container footer-container">
      <Link className="link" to="/">
        <img src={logo} alt="logo" title="Home | дом" width={85} height={30} />
      </Link>
      <div className="footer-socials-links-box">
        <div className="footer-bottom">
          <ul className="footer-links-list">
            <li className="footer-links-item">
              <Link className="link footer-links" to="/selected">
                Избранное
              </Link>
            </li>
            <li className="footer-links-item">
              <Link className="link footer-links" to="/card">
                Корзина
              </Link>
            </li>
            <li className="footer-links-item">
              <Link className="link footer-links" to="/contacts">
                Контакты
              </Link>
            </li>
          </ul>
          <ul className="footer-links-list footer-lang-list">
            <li className="footer-services-item">
              <Link className="link footer-links" to="/service-requirements">
                Условия сервиса
              </Link>
            </li>
            <li className="footer-lang-item">
              <button
                className={lang === "eng" ? "langBtn activeLang" : "langBtn"}
                type="button"
                onClick={() => {
                  setLang("eng");
                  window.location.reload();
                }}
              >
                Eng
              </button>
              <button
                className={lang === "ru" ? "langBtn activeLang" : "langBtn"}
                type="button"
                onClick={() => {
                  setLang("ru");
                  window.location.reload();
                }}
              >
                Ru
              </button>
            </li>
          </ul>
        </div>
        <div className="socials-box">
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
            <img src={vk} alt="VK" title="VK" width={30} height={31} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt="Instagram"
              title="Instagram"
              width={30}
              height={31}
            />
          </a>
          <a
            href="https://web.telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={telegram}
              alt="Telegram"
              title="Telegram"
              width={30}
              height={31}
            />
          </a>
          <a
            href="https://www.whatsapp.com/?lang=ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
              title="WhatsApp"
              width={30}
              height={31}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
