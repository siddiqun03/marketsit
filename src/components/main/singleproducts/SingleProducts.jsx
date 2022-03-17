import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleProducts.css";

function SingleProducts() {
  const [earphones, setEarphones] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch("http://localhost:3001/earphones")
      .then((res) => res.json())
      .then((date) => setEarphones(date));
  }, []);

  function add(item, e) {
    let local = JSON.parse(window.localStorage.getItem("buy")) || [];
    let lll = earphones.find((el) => el.id === item.id);
    local = [...local, lll];

    const names = new Set();
    local = local.filter((item) =>
      !names.has(JSON.stringify(item)) ? names.add(JSON.stringify(item)) : false
    );

    window.localStorage.setItem("buy", JSON.stringify([...new Set(local)]));
    document.location.replace("/card");
  }

  return (
    <React.Fragment>
      {earphones
        .filter((i) => i.id === id)
        .map((item) => {
          return (
            <section key={item.id}>
              <h3 className="type-item">{item.title}</h3>
              <div className="singleProduct-box-top">
                <div className="img-box">
                  <img
                    src={item.img.one}
                    alt={item.title}
                    width={285}
                    height={260}
                  />
                  <img
                    src={item.img.two}
                    alt={item.title}
                    width={285}
                    height={260}
                  />
                  <img
                    src={item.img.three}
                    alt={item.title}
                    width={285}
                    height={260}
                  />
                  <img
                    src={item.img.four}
                    alt={item.title}
                    width={285}
                    height={260}
                  />
                  <img
                    src={item.img.five}
                    alt={item.title}
                    width={285}
                    height={260}
                  />
                </div>
                <div className="products-bottom">
                  <p className="product-title">{item.title}</p>
                  <p className="product-price"> {item.price} ₸</p>
                </div>
              </div>
              <div className="singleProduct-box-bottom">
                <div className="info-products">
                  <h4 className="characters">Характеристики и описание</h4>
                  <p className="charackter-desc">{item.desc}</p>
                </div>
                <div className="saver-box">
                  <Link
                    to="/card"
                    className="link buy-btn"
                    onClick={(e) => add(item, e)}
                  >
                    Buy
                  </Link>
                  <button onClick={(e) => add(item, e)} className="save-btn">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.08589 6.04598L0.48584 2.50532L2.05663 0.959961L5.65556 4.50172H22.5757C22.7487 4.50171 22.9193 4.54149 23.074 4.61789C23.2286 4.69428 23.3629 4.80518 23.4662 4.94173C23.5695 5.07828 23.639 5.2367 23.669 5.40435C23.699 5.57199 23.6888 5.74422 23.6391 5.90729L20.9749 14.6443C20.9064 14.8693 20.7659 15.0667 20.5743 15.2069C20.3827 15.3472 20.1503 15.423 19.9114 15.423H6.30608V17.6072H18.5172V19.7915H5.19598C4.90157 19.7915 4.61921 19.6764 4.41103 19.4716C4.20284 19.2668 4.08589 18.989 4.08589 18.6993V6.04598ZM6.30608 6.68597V13.2387H19.0855L21.0837 6.68597H6.30608ZM5.75103 24.16C5.30941 24.16 4.88587 23.9874 4.5736 23.6801C4.26132 23.3729 4.08589 22.9562 4.08589 22.5218C4.08589 22.0873 4.26132 21.6706 4.5736 21.3634C4.88587 21.0562 5.30941 20.8836 5.75103 20.8836C6.19266 20.8836 6.61619 21.0562 6.92847 21.3634C7.24074 21.6706 7.41618 22.0873 7.41618 22.5218C7.41618 22.9562 7.24074 23.3729 6.92847 23.6801C6.61619 23.9874 6.19266 24.16 5.75103 24.16ZM19.0722 24.16C18.6306 24.16 18.207 23.9874 17.8948 23.6801C17.5825 23.3729 17.4071 22.9562 17.4071 22.5218C17.4071 22.0873 17.5825 21.6706 17.8948 21.3634C18.207 21.0562 18.6306 20.8836 19.0722 20.8836C19.5138 20.8836 19.9374 21.0562 20.2496 21.3634C20.5619 21.6706 20.7373 22.0873 20.7373 22.5218C20.7373 22.9562 20.5619 23.3729 20.2496 23.6801C19.9374 23.9874 19.5138 24.16 19.0722 24.16Z"
                        fill="#838383"
                      />
                    </svg>
                    Add to basket
                  </button>
                </div>
              </div>
            </section>
          );
        })}
    </React.Fragment>
  );
}

export default SingleProducts;
