// import styles from './Header.modulus.css';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import styles from '../../../Framework/CSS/Framework.modulus.css'
import imgLogo from "../../../Images/waitng-illustration.svg"
import style from "./Header.modulus.css"
const  Header = () => {
  return (
    <header>
      <div className="contain flex between">
        <div className="logo flex center">
          <Link to="/" className='flex center'>
            <picture>
              <img src={imgLogo} alt="Logo image" />
            </picture>
            <div className="icon">Coding for Everyone</div>
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
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
