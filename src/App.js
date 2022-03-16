import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
