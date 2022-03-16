import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Main.css";
import Products from "../main/products/Products";
import Selected from "../main/selected/Selected";
import Card from "../card/Card";
import Contacts from "./contacts/Contacts";
import Requirements from "./requirements/Requirements";
import Ordering from "./ordering/Ordering";
import Ordered from "./ordered/Ordered";
import SingleProducts from "./singleproducts/SingleProducts";
import Singleshop from "./singleShop/Singleshop";
import { Provider } from "../../context/langContext";
import { Provider as Totally } from "../../context/Totally";
import Login from "../login/Login";
import Admin from "../admin/Admin";

function Main() {
  return (
    <main className="container ">
      <Provider>
        <Totally>
          <Routes>
            <Route index path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/SingleProducts/:id" element={<SingleProducts />} />
            <Route path="/Singleshop/:id" element={<Singleshop />} />
            <Route path="/selected" element={<Selected />} />
            <Route path="/card" element={<Card />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/service-requirements" element={<Requirements />} />
            <Route path="/ordering" element={<Ordering />} />
            <Route path="/ordered" element={<Ordered />} />
          </Routes>
        </Totally>
      </Provider>
    </main>
  );
}

export default Main;
