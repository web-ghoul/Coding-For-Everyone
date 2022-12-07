// Libraries
import React,{useState,useEffect,useRef} from 'react';
import week_data from '../../../data/weeks.json'

//Styles Files
import styles from "../../../Framework/CSS/Framework.modulus.css"

//Icons
import {GoPrimitiveDot} from "react-icons/go"
import {RiNumber1} from "react-icons/ri"
import {RiNumber2} from "react-icons/ri"
import {RiNumber3} from "react-icons/ri"
import {RiNumber4} from "react-icons/ri"
import {RiNumber5} from "react-icons/ri"
import {RiNumber6} from "react-icons/ri"
import {RiNumber7} from "react-icons/ri"
import {RiNumber8} from "react-icons/ri"
import {RiNumber9} from "react-icons/ri"
import {RxDotFilled} from "react-icons/rx"

//Components
import Title from "../Title/Title"
import Photo from "../Photo/Photo"

const  Tutorial = (props) =>{
    const [weekData,useWeekData] = useState(week_data) 
    const [weeks,setWeeks] = useState(props.week)
    const [objectiveNames, setObjectivesNames] = useState([])
    const [objects, setObjects] = useState([])
    const [numbersOfParts,setNumbersOfParts] = useState([])
    const handleDate = ()=>{
        setNumbersOfParts(()=>[RiNumber1,RiNumber2,RiNumber3,RiNumber4,RiNumber5,RiNumber6,RiNumber7,RiNumber8,RiNumber9]);
        setObjectivesNames(()=>[])
        setObjects(()=>[])
        Object.keys(weekData[weeks]["objective"]).map((obj)=>{
            setObjectivesNames((arr)=>[...arr,obj])
            setObjects((arr)=> [...arr,weekData[weeks]["objective"][obj]])
        })
    }
    useEffect(()=>{
        handleDate()
    },[])
    return (
        <div className="tutorial">
            <div className="contain grid start">
                {
                    objects.map((object,index)=>{
                        return(
                            <div key={index} className="point grid start">
                                <div className="contain grid">
                                    <Title icon={numbersOfParts[index]} title={objectiveNames[index]} done={true} fontW={600} fontSize = {28}/>
                                    {Object.keys(object).map((k,i)=>{
                                        return (
                                            <div key={i} className="part grid start">
                                                <Title icon={GoPrimitiveDot} title={k} fontSize = {26}/>
                                                {
                                                    object[k].img.map((img,i)=>{
                                                        return (
                                                            <Photo img={img} wid ={75}  desc={k}/>
                                                        )
                                                    })
                                                }
                                                <div className="dots grid start">
                                                    {
                                                        object[k].hasOwnProperty("dots")? 
                                                        Object.keys(object[k].dots).map((dot,i)=>{
                                                            return (
                                                                <div key={i} className="dot grid start">
                                                                    <Title icon={RxDotFilled} title={dot} fontSize = {25}/>
                                                                    <Photo img={object[k].dots[dot][0]} wid={75} desc={object[k].dots[dot][0]}/>
                                                                </div>
                                                            )
                                                        }):""
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        )
                    })
                }                    
            </div>
        </div>
    );
}
export default Tutorial;
