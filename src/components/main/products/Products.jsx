import React, { useContext, useState, useEffect } from "react";
import "./Products.css";
import banner from "../../../images/Banner.png";
import { Link } from "react-router-dom";
import { Context } from "../../../context/langContext";
import translate from "../../../localization/content";

function Products() {
  const [data, setData] = useState([]);
  const [earphone, setEarphone] = useState([]);
  const [arr, setArr] = useState([]);

  const { lang } = useContext(Context);

  useEffect(() => {
    setArr(JSON.parse(window.localStorage.getItem("like")) || []);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/chexols")
      .then((res) => res.json())
      .then((date) => setData(date));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/earphones")
      .then((res) => res.json())
      .then((date) => setEarphone(date));
  }, []);

  function like(item, e) {
    let local = JSON.parse(window.localStorage.getItem("like")) || [];
    let lll = earphone.find((el) => el.id === item.id);
    if (e.target.checked) {
      local = [...local, lll];

      const names = new Set();
      local = local.filter((item) =>
        !names.has(JSON.stringify(item))
          ? names.add(JSON.stringify(item))
          : false
      );

      window.localStorage.setItem("like", JSON.stringify([...new Set(local)]));
    } else {
      if (local.length === 1) {
        local = [];
      }
      let index = earphone.findIndex((el) => el.id === item.id);
      local.splice(index, 1);
      console.log(index);
      window.localStorage.setItem("like", JSON.stringify(local));
    }
  }

  return (
    <React.Fragment>
      <section className="products-container">
        <aside title="Iphone 13">
          <img
            className="banner"
            src={banner}
            alt="aside"
            width={1150}
            height={226}
          />
        </aside>
        <h3 className="chexol-header">{translate[lang].main.chexolsHeader}</h3>
        <ul className="chexol-list">
          {data?.map((item) => (
            <li key={item.id} className="chexol-item">
              <Link className="link card-link" to={`/Singleshop/${item.id}`}>
                <img
                  className="chexol-img"
                  src={item.img.one}
                  alt="chexol img"
                  width={220}
                  height={237}
                />
                <p className="chexol-desc">{item[lang]}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="earPhones">
        <h3 className="chexol-header">{translate[lang].main.earphone}</h3>
        <ul className="chexol-list earphone-list">
          {earphone?.map((item) => (
            <li key={item.id} className="chexol-item">
              <Link
                className="link card-link earphone-card-link"
                to={`/SingleProducts/${item.id}`}
              >
                <img
                  className="chexol-img earphone-img"
                  src={item.img.one}
                  alt="chexol img"
                  width={219}
                  height={237}
                />
                <div className="card-bottom">
                  <div className="hero-card">
                    <p className="earphone-title">{item.title}</p>
                    <p className="earphone-price">{item.price}</p>
                  </div>
                  <p className="earphone-rate">{item.rate}</p>
                </div>
              </Link>
              <label>
                <input
                  defaultChecked={arr?.find((i) => i.id === item.id)}
                  onChange={(e) => like(item, e)}
                  className="favorite-input"
                  type="checkbox"
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                </svg>
              </label>
            </li>
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}
export default Products;
