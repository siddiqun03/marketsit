import React, { useState, useEffect } from "react";
import "./admin.css";

function admin() {
  const [date, setDate] = useState([]);
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((date) => setDate(date));
  }, []);
  useEffect(() => {
    setProductInfo(JSON.parse(window.localStorage.getItem("buy")));
  }, []);
  return (
    <div>
      {date.map((item) => {
        return (
          <div key={item.id} className="request">
            <p className="id">info person:</p>
            <br />
            <p className="city">ID: {item.id}</p>
            <p className="city">City: {item.city}</p>
            <p className="street">Street: {item.street}</p>
            <p className="home">Home: {item.home}</p>
            <p className="floor">Floor: {item.floor}</p>
            <p className="phoneNum">Number: {item.phoneNum}</p>
          </div>
        );
      })}
      {productInfo.map((item) => {
        return (
          <div key={item.id} className="request">
            <p className="id">info products: </p>
            <br />
            <p>ID: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>Total order: {item.totalOrder}</p>
            <p>Total price: {item.totalPrice}</p>
          </div>
        );
      })}
    </div>
  );
}

export default admin;
