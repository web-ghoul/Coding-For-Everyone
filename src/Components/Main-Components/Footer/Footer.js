// import styles from './Home.modulus.css';
import React from 'react';
import style from "./Footer.modulus.css"
import styles from "../../../Framework/CSS/Framework.modulus.css"
import facebook from "../../../Images/social-media-facebook.png";
import Twitter from "../../../Images/social-media-twitter.png";
import instagram from "../../../Images/social-media-instagram.png";
const  Footer = () =>{
    return(
        <footer>
            <div className="contain flex between">
                <span>Contact Me</span>
                <div className="icons flex end">
                    <div className="icon flex center">
                        <img src={facebook} alt="facebook icon" />
                    </div>
                    <div className="icon flex center">
                        <img src={Twitter} alt="Twitter icon" />
                    </div>
                    <div className="icon flex center">
                        <img src={instagram} alt="instagram icon" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
