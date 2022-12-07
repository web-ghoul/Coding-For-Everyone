//Libraries
import React from 'react';

//Styles Files
import style from "./Footer.modulus.css"
import styles from "../../../Framework/CSS/Framework.modulus.css"

//Icons
import {SlSocialFacebook} from "react-icons/sl"
import {SlSocialInstagram} from "react-icons/sl"
import {SlSocialTwitter} from "react-icons/sl"
const  Footer = () =>{
    return(
        <footer>
            <div className="contain flex between">
                <span>Contact Me</span>
                <div className="icons flex end">
                    <div className="icon flex center">
                       <SlSocialFacebook/>
                    </div>
                    <div className="icon flex center">
                        <SlSocialTwitter/>
                    </div>
                    <div className="icon flex center">
                        <SlSocialInstagram/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
