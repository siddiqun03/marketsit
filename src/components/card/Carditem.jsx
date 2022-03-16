import React, { useContext, useState } from "react";
import { Context } from "../../context/Totally";

function Carditem({ item }) {
  const { totally, setTotal } = useContext(Context);
  const [count, setCount] = useState(0);

  function Delete(i) {
    let index = totally.findIndex((el) => el.id === i);
    totally.splice(index, 1);
    console.log(index);
    window.localStorage.setItem("buy", JSON.stringify([...new Set(totally)]));
    document.location.reload();
  }

  function incr() {
    let index = totally.findIndex((el) => el.id === item.id);
    totally[index].totalPrice = ((count + 1) * item.price).toFixed(2);
    totally[index].totalOrder = count + 1;
    window.localStorage.setItem("totalPrice", JSON.stringify(totally));

    function findTotal() {
      let result = 0;
      JSON.parse(window.localStorage.getItem("totalPrice")).forEach((el) => {
        result += Number(el.totalPrice) || 0;
        console.log(result);
        return result;
      });
      return result;
    }

    setTotal(findTotal());
    return setCount(count + 1);
  }
  function decr() {
    if (count > 0) {
      let index = totally.findIndex((el) => el.id === item.id);
      totally[index].totalPrice = ((count - 1) * item.price).toFixed(2);
      totally[index].totalOrder = count - 1;
      window.localStorage.setItem("totalPrice", JSON.stringify(totally));

      function findTotal() {
        let result = 0;
        JSON.parse(window.localStorage.getItem("totalPrice")).forEach((el) => {
          result += Number(el.totalPrice) || 0;
          console.log(result);
          return result;
        });
        return result;
      }

      setTotal(findTotal());
      return setCount(count - 1);
    }
  }

  return (
    <li className="korzinka-item">
      <div className="korzinka-top">
        <button onClick={() => Delete(item.id)} className="btn-delete"></button>
        <img src={item.img.one} alt={item.title} width={146} height={136} />
        <div className="korzonka-title-box">
          <h3 className="korzinka-title">{item.title}</h3>
          <p className="item-price"> {item.price} ₸</p>
        </div>
      </div>
      <div className="korzinka-bottom">
        <div className="count-box">
          <button className="inc" onClick={decr}>
            -
          </button>
          <p className="counter">{count}</p>
          <button className="dinc" onClick={incr}>
            +
          </button>
        </div>
        <p className="totalCost">{item.price * count}₸</p>
      </div>
    </li>
  );
}

export default Carditem;
