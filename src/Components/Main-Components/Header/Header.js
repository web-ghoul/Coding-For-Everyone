//Libraries
import React from 'react';
import { Outlet, Link } from "react-router-dom";

//Style Files
import styles from '../../../Framework/CSS/Framework.modulus.css'

//Images
import imgLogo from "../../../Images/photo (153).png"


//Components
import Photo from "../Photo/Photo"
const  Header = () => {
  return (
    <header>
      <div className="contain flex between">
        <div className="logo flex center">
          <Link to="/" className='flex center'>
            <Photo img={imgLogo} desc={"Logo image"}/>
            <span>Coding for Everyone</span>
          </Link>
        </div>
        <nav>
            <ul className='flex center'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
