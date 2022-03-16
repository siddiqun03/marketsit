import React, { useState, useEffect, useContext } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Carditem from "./Carditem";
import map from "../../images/Rectangle.png";
import empty from "../../images/empty.svg";
import { Context } from "../../context/Totally";

function Card() {
  const { total } = useContext(Context);
  const [date, setDate] = useState(
    JSON.parse(window.localStorage.getItem("buy")) || []
  );
  useEffect(() => {
    setDate(JSON.parse(window.localStorage.getItem("buy")));
  }, []);
  return (
    <section className="korzinka">
      {date && date.length > 0 ? (
        <React.Fragment>
          <h4 className="korzina-head">Корзина</h4>
          <div className="korzina-topp">
            <ul className="korzina-list">
              {date.map((item) => {
                return <Carditem key={item.id} item={item} />;
              })}
              <li className="delivery-item">
                <h4>Доставка</h4>
                <img src={map} alt="" width={584} height={173} />
                <div className="delivery-info">
                  <p>Доставка курьером</p>
                  <p>0 ₸</p>
                </div>
              </li>
            </ul>
            <div className="totally-price">
              <p className="totally-price-desc">
                ИТОГО: <span className="price-num">{total}</span>₸
              </p>
              <Link to="/ordering" className="link oformlena-btn">
                Перейти к оформлению
              </Link>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="empty-box">
          <img src={empty} alt="no item" width={409} height={315} />
          <p className="empty-head">Корзина пуста</p>
          <p className="empty-desc">Но это никогда не поздно исправить !</p>
          <Link
            to="/"
            className="link empty-btn"
            title="Products | В каталог товаров"
          >
            В каталог товаров
          </Link>
        </div>
      )}
    </section>
  );
}

export default Card;
