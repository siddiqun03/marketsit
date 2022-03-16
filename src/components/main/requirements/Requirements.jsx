import React, { useContext } from "react";
import { Context } from "../../../context/langContext";
import translate from "../../../localization/content";
import "./Requirements.css";

function Requirements() {
  const { lang } = useContext(Context);
  return (
    <section>
      <ol className="requirments-list">
        <li className=" requirments-item">
          <h4 className="requarments-headeing">
            {translate[lang].main.serviceH}
          </h4>
          <p className="requarments-desc">{translate[lang].main.serviceD}</p>
        </li>
        <li className=" requirments-item">
          <h4 className="requarments-headeing">
            {translate[lang].main.deliveryH}
          </h4>
          <p className="requarments-desc">{translate[lang].main.deliveryD}</p>
        </li>
        <li className="requirments-item">
          <h4 className="requarments-headeing">
            {translate[lang].main.returnH}
          </h4>
          <p className="requarments-desc">{translate[lang].main.returnD}</p>
        </li>
      </ol>
    </section>
  );
}

export default Requirements;
