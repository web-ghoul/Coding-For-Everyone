//Libraries
import React,{useState,useEffect,useRef} from 'react';
import week_data from '../../../data/weeks.json'

//Styles Files
import styles from "../../../Framework/CSS/Framework.modulus.css"

const  Objectives = (props) =>{
    const [weekData,useWeekData] = useState(week_data) 
    const [weeks,setWeeks] = useState(props.week)
    return (
        <article className='objective grid start'>
            <div className="title">Objectives</div>
            <ul className='grid start'>
                {
                    Object.keys(weekData).map((key,index)=>{
                        if(key === weeks){
                            return(
                                Object.keys(weekData[key].objective).map((k,i)=>{
                                    return (
                                        <li key={i}>{k}</li>
                                    )
                                })
                            )
                        }
                    })
                }
            </ul>
        </article>
    );
}
export default Objectives;
