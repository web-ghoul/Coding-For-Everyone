// Libraries
import React,{useState,useEffect,useRef} from 'react';
import week_data from '../../../data/weeks.json'

//Styles Files
import style from "./NumSys.modulus.css"
import styles from "../../../Framework/CSS/Framework.modulus.css"

//Components
import Head from '../../Main-Components/Head/Head';
import Objective from "../../Main-Components/Objective/Objective"
import Tutorial from "../../Main-Components/Tutorial/Tutorial"

const  NumSys = () =>{
    const [weekData,useWeekData] = useState(week_data) 
    const [weeks,setWeeks] = useState("week-0")
    return (
        <section className="numsys">
            <div className="container">
                <Head headImg={weekData[weeks].urlImg} headTitle = "Number Systems"/>
                <Objective week={weeks} />
                <Tutorial week="week-0"/>
            </div>
        </section>
    );
}
export default NumSys;
