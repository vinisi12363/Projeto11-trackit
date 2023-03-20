import styled from "styled-components";
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HabitHook } from "../Hooks/HabitHook";
import { useEffect, useState } from "react";
import { PercentContextHook } from "../Hooks/PercentContextHook";

export default function Menu(){
    const {habit} = HabitHook()
    const {percent , setPercent} = PercentContextHook()
    console.log("percent" , percent)
    const p = 75;
    
    useEffect(()=>{
       // setPercent(p);
    },[])
    
    return(
        
        <Menucontainer data-test="menu" >
            <Link to="/habitos" data-test="habit-link">
             <a>Hábitos</a>
            </Link>
       
          
            <Link data-test="today-link" to="/hoje">
                <CircularPContainer>
                    <CircularProgressbar value={percent} text={'Hoje'} background={true} styles={{
                        // Customize the root svg element
                        root: {},
                        // Customize the path, i.e. the "completed progress"
                        path: {
                        // Path color
                        stroke: `rgba(255, 255, 255, ${percent/ 100})`,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Customize transition animation
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        // Rotate the path
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                        // Trail color
                        stroke: '#52B6FF',
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',
                        // Rotate the trail
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                        },
                        // Customize the text
                        text: {
                        // Text color
                        fill: '#FFFFFF',
                        // Text size
                        fontSize: '20px',
                        },
                        // Customize background - only used when the `background` prop is true
                        background: {
                        fill: '#52B6FF',
                        },
                    }} >
                    
                    </CircularProgressbar>
                </CircularPContainer>
            </Link>
            <Link   data-test="history-link" to="/historico">
                <a>Histórico</a>
            </Link>
           
            
         </Menucontainer>
        
       

    )
  
}
const Menucontainer = styled.footer`
    
    position: fixed;
    bottom:0;
    left:0;
    width:100vw;
    height:15%;
    display:flex;
    justify-content:space-between;
    background:#FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
   
   
    a{  margin-left:10px;
        margin-right:10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        text-decoration:none;
        color: #52B6FF;
    }

`
const CircularPContainer = styled.div `
    width:91px;
    height:91px;
    position:relative;
    bottom:30px;


`

