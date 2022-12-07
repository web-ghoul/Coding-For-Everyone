// Libraries
import React,{useState,useEffect,useRef} from 'react';
import { Outlet, Link } from "react-router-dom";

//Json File
import week_data from '../../data/weeks.json'

//Styles Files
import style from "./Home.modulus.css"
import styles from "../../Framework/CSS/Framework.modulus.css"

//Images 
import winnerImg from "../Topics/NumSys/imgs/Hexadecimal-to-Octal-Conversion1.png"
import recentImg from "../../Images/Cartoon Bearded Programmer in Glasses.jfif"

//Components
import Head from "../Main-Components/Head/Head"

const  Home = () =>{
    const [weekData,useWeekData] = useState(week_data) 
    const [weeks,setWeeks] = useState([])
    const progLine = useRef();
    useEffect(()=>{
        let weeksNumber =[];
        for (const key in weekData) {
            if (Object.hasOwnProperty.call(weekData, key) && weekData[key].recent) {
                console.log(key)
                weeksNumber.push(key)
            }
        }
        setWeeks(()=>weeksNumber)
    },[])
    return (
    <section className='home'>
        <div className="container">
            <div className="pow">
                <div className="contain flex start">
                    <picture>
                        <img src={winnerImg} alt="winner image"/>
                    </picture>
                    <div className="info grid center">
                        <span className="name">In Progress...</span>
                        <span className="week">
                            Week
                            <span> Zero</span>
                        </span>
                    </div>
                    <div className="progress-line" ref={progLine}></div>
                </div>
            </div>
            <div className="recent-week">
                <div className="contain grid start">
                    <Head headImg={recentImg} headTitle = "Recent Week"/>
                    <div className="boxes grid stretch">
                        {
                            weeks.map(w=>{
                                return (
                                    <div key={weekData[w].id} className="week grid stretch">
                                        <Link to = {weekData[w].link} >
                                            <picture className="icon flex start">
                                                <img src={weekData[w].urlImg} alt={weekData[w].icon} />
                                            </picture>
                                            <article className='grid start'>
                                                <div className="week-name">{weekData[w].name}</div>
                                                <div className="winner-week">{weekData[w].prog_of_week}</div>
                                            </article>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Home;
