// Libraries
import React,{useState,useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";

//Json File
import week_data from '../../data/weeks.json'

//Components
import Head from "../Main-Components/Head/Head"

//Style Files
import style from "./Topics.modulus.css"
import styles from "../../Framework/CSS/Framework.modulus.css"

//Images
import topicImg from "../../Images/Premium Vector _ Online conference meeting   illustration.jfif"
const  Topics = () =>{
    const [weekData,useWeekData] = useState(week_data) 
    const [weeks,setWeeks] = useState([])
    useEffect(()=>{
        let weeksNumber =[];
        for (const key in weekData) {
            if (Object.hasOwnProperty.call(weekData, key)) {
                weeksNumber.push(key)
            }
        }
        setWeeks(()=>weeksNumber)
    },[weekData])
    return(
        <section className="topics">
                <div className="container grid stretch">
                    <Head headImg={topicImg} headTitle = "Topics"/>
                    <form action="GET" className='search grid stretch'>
                        <div className="fields grid stretch">
                            <div className="search-by-name flex center">
                                <input type="search" placeholder='search by week name'/>
                            </div>
                            <div className="search-by-level flex center">
                                <input type="number" placeholder='search by level number'/>
                            </div>
                        </div>
                        <div className="btns flex center">
                            <button type='button'>Search</button>
                        </div>
                    </form>
                    <div className="boxes grid stretch start">
                        {
                            weeks.map(w=>{
                                return (
                                    <div key={weekData[w].id} className="week grid stretch">
                                        <Link to = {weekData[w].link} >
                                            <div className="icon">
                                                <img src= {weekData[w].urlImg} alt="Week Image" />
                                            </div>
                                            <article className='grid start'>
                                                <div className="week-name">{weekData[w].name}</div>
                                                <div className="week-num">{w}</div>
                                                <div className="winner-week">{weekData[w].prog_of_week}</div>
                                            </article>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
    )
}
export default Topics;
