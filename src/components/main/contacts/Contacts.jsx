import React, { useContext } from "react";
import "./Contacts.css";
import watsapp from "../../../images/Whatsapp.svg";
import vk from "../../../images/VK.svg";
import instagram from "../../../images/Instagram.svg";
import telegram from "../../../images/Telegram.svg";
import { Context } from "../../../context/langContext";
import translate from "../../../localization/content";

function Contacts() {
  const { lang } = useContext(Context);
  return (
    <section className="map-container">
      <div className="contacts-top">
        <div className="location-box">
          <h4 className="header-contact">{translate[lang].main.mapH}</h4>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1769.8495022108643!2d71.42591458623559!3d51.146362214917374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586b9c2191fe3%3A0x752260353b8bec87!2sComfort%20Hotel%20Astana!5e0!3m2!1sru!2s!4v1647355456727!5m2!1sru!2s"
            width="722"
            height="424"
            loading="eager"
          ></iframe>
          <div className="location-dot">
            <p className="location-place">Аксай-3а, 62ф, Алматы, Казахстан</p>
            <p className="location-home">3 этаж 35 кабинет</p>
          </div>
        </div>
        <div className="sotial">
          <a
            className="sotial-network"
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <img src={watsapp} alt="" width={40} height={40} />
          </a>
          <a
            className="sotial-network"
            href="https://www.vk.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="VK"
          >
            <img src={vk} alt="" width={54} height={36} />
          </a>
          <a
            className="sotial-network"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <img src={instagram} alt="" width={40} height={40} />
          </a>
          <a
            className="sotial-network"
            href="https://www.telegram.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <img src={telegram} alt="" width={49} height={49} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
