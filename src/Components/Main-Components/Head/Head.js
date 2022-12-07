// import styles from './Home.modulus.css';
import React,{useState,useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import styles from "../../../Framework/CSS/Framework.modulus.css"
const  Head = (props) =>{
    return(
        <div className="head flex start">
            <picture className='flex start'>
                <img src = {props.headImg} alt = "Head image" />
            </picture>
            <span className='flex start'>{props.headTitle}</span>
        </div>
    )
}
export default Head;
