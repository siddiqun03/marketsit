import React, { useState, useContext } from "react";
import "./Ordering.css";
import map from "../../../images/location.png";
import { Context } from "../../../context/Totally";

function Ordering() {
  const { total } = useContext(Context);
  const [selection, setSelection] = useState("");
  const [street, setStreet] = useState("");
  const [home, sethome] = useState("");
  const [floor, setFloor] = useState("");
  const [flat, setFlat] = useState("");
  const [number, setNumber] = useState(0);

  function onSub(e) {
    e.preventDefault();

    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: new Date().getTime(),
        city: selection,
        street: street,
        home: home,
        floor: floor,
        flat: flat,
        phoneNum: number,
      }),
    });
    window.location.replace("/ordered");
  }

  return (
    <section className="ordering-container">
      <h4 className="ordering-head">Оформление заказа</h4>
      <form onSubmit={(e) => onSub(e)} className="form-box">
        <div className="ordering-left-box">
          <div className="delivery-pay">
            <p className="delivery-pay-head">Доставка курьером</p>
            <p className="deliver-pay-price">400T</p>
          </div>
          <img
            src={map}
            width={375}
            alt="map"
            height={146}
            className="ordering-img"
          />
          <div className="address-box">
            <p className="adress">Адрес доставки</p>
            <select
              required
              className="input-order selection"
              onChange={(e) => setSelection(e.target.value)}
            >
              <option value="Tashkent">Tashkent</option>
              <option value="Fergana">Fergana</option>
              <option value="Samarqand">Samarqand</option>
            </select>
            <input
              required
              className="input-order street"
              type="text"
              placeholder="Srteet"
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              required
              className="input-order home"
              type="number"
              placeholder="home"
              onChange={(e) => sethome(e.target.value)}
            />
            <input
              required
              className="input-order floor"
              type="number"
              placeholder="floor"
              onChange={(e) => setFloor(e.target.value)}
            />
            <input
              required
              className="input-order flat"
              type="number"
              placeholder="flat"
              onChange={(e) => setFlat(e.target.value)}
            />
          </div>
        </div>
        <div className="ordering-right-box">
          <div className="your-oreder">
            <h4 className="your-order-head">Ваш заказ</h4>
            {JSON.parse(window.localStorage.getItem("totalPrice")).map((el) => {
              return (
                <div key={el.id}>
                  <p className="item-info">
                    {el.totalOrder || 0}x {el.title}: {el.totalPrice || 0} T
                  </p>
                </div>
              );
            })}
            <div>
              <p className="total-price">{total}T</p>
            </div>
          </div>
          <div className="your-oreder payment">
            <h3 className="payment-head">Способ оплаты</h3>
            <p className="payment-desc">Счет на kaspi.kz</p>
            <p className="payment-desc">Есть промокод?</p>
          </div>
          <div className="your-oreder taker-number">
            <h3 className="payment-head">Номер получателя</h3>
            <input
              required
              className="input-order number-input"
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              placeholder="+7__ __ __ __ __"
            />
          </div>
          <button className="oreder-btn" type="submit">
            Закончить оформление
          </button>
        </div>
      </form>
    </section>
  );
}

export default Ordering;
