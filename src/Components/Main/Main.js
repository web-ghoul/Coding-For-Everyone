//Libraries
import React from 'react';
import { Outlet, Link } from "react-router-dom";

//Components
import Header from "../Main-Components/Header/Header"
import Footer from "../Main-Components/Footer/Footer"

//Styles Files
import styles from "../../Framework/CSS/Framework.modulus.css"

const  Main = () => {
  return (
    <main>
      <div className="container grid stretch">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </main>
  );
}
export default Main;
