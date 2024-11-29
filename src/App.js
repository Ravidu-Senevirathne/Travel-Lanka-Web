import React from "react";
import "./App.css";
import Home from "./Componenets/Home/Home";
import Navbar from "./Componenets/Navbar/Navbar";
import Main from "./Componenets/Main/Main";
import Footer from "./Componenets/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
