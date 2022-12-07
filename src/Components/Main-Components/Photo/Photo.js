// Libraries
import React,{useState,useEffect,useRef} from 'react';

//Styles Files
import styles from "../../../Framework/CSS/Framework.modulus.css"

//Images
import types from "../../Topics/NumSys/imgs/Number-System.png"
import binary from "../../Topics/NumSys/imgs/binary.jpeg"
const  Photo = (props) =>{
    return (
        <picture className={`flex start ${props.class == 'icon' ? "icon":""}`}>
            <img src={props.img}  style={props.wid ?{width:props.wid+"%"}:{}} alt={props.desc} />
        </picture>
    );
}
export default Photo;
