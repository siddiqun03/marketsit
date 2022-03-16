import React, { useEffect, useState } from "react";
import "./Ordered.css";

function Ordered() {
  const [date, setDate] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((date) => setDate(date));
  }, []);

  return (
    <section className="ordered-container">
      <div className="ordered-box">
        {date.map((item) => {
          return (
            <p className="order-desc" key={item.id}>
              Номер вашего заказа №{item.id}, с Вами свяжется наш менеджер.
            </p>
          );
        })}
      </div>
    </section>
  );
}

export default Ordered;
