// Library
import React,{useState,useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";

//Styles Files
import styles from "../../../Framework/CSS/Framework.modulus.css"

const  Title = (props) =>{
    return(
        <div className= {props.done ? "title flex start done" :"title flex start"} style ={{fontSize : props.fontSize,fontWeight:props.fontW}}>
            <i className ="flex center">
                <props.icon/>
            </i>
            <span>{props.title}</span>
        </div>
    )
}
export default Title;
