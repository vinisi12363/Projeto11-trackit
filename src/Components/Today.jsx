import styled from "styled-components";
import axios from "axios"
import {UserContextHook} from '../Hooks/UserContextHook'
import { useEffect, useState } from "react";
import { HabitHook } from "../Hooks/HabitHook";

import {CirclesWithBar} from 'react-loader-spinner'
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import { PercentContextHook} from "../Hooks/PercentContextHook"
export default function Today() {

const {habit , setHabit} = HabitHook();
const [listHabits, setListHabits] = useState ([{}])
const {user} = UserContextHook();
const {percent ,setPercent} = PercentContextHook();
const [loadingHabit, setLoadingHabit] = useState(true)
const dataAtual = dayjs().format('DD/MM/YYYY');
dayjs.locale('pt-br');
const nomeDoDia = dayjs().format('dddd');
const [percentageText , setPercentageText] = useState("")
useEffect(()=>{
    
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    const promise = axios.get(url, config)
    promise.then (res=>{
       
        setListHabits([...res.data])
        setHabit({...res.data, 
            id:res.data.id, 
            name:res.data.name,
            days:res.data.days
        
        })
        if (res.data !== [])
        setLoadingHabit(false)
    })
    promise.catch(err=>{
        console.log (err.response.data.message)
    })
},[])
useEffect(()=>{
    let total=0;

    let done=0;    

    listHabits.length &&
            listHabits.forEach(habit=>{
                total++;
                habit.done && done++;
                
            })
    const newPercent = done/total*100
    setPercent(newPercent);
    let num = Math.round(percent)
    
    setPercentageText (`${Math.round(percent)}% dos hábitos concluídos`)

},[listHabits])
    function markHabit(id){
        setLoadingHabit(true)
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const require = axios.post (url,{},config)
        require.then(res=>{
            console.log(res.data)
            setLoadingHabit(false)
        })
        require.catch(err=>{
            console.log (err.response.data.message)
         
        })
    }
    function unMarkHabit(id){
        setLoadingHabit(true)
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const require = axios.post (url,{},config)
        require.then(res=>{
            console.log(res.data)
            setLoadingHabit(false)
        })
        require.catch(err=>{
            console.log (err.response.data.message)
       
        })
    }
    return (
        <TodayContainer>

            <TodayMessageArea>
            
           
                <h1 data-test="today" >{nomeDoDia}, {dataAtual}</h1>
                <p>{listHabits.length ? (<StyledPercentText data-test="today-counter" >{percentageText}</StyledPercentText>) : (<StyledUnPercentText>Nenhum hábito concluído ainda</StyledUnPercentText>)}</p>

                
            </TodayMessageArea>

                
                        {loadingHabit ?    
                        (<CirclesWithBar
                        type="Spinner Type"
                        color="#52B6FF"
                        height={90}
                        width={90}
                        timeout={2000}
                        visible={true}/>) : 
                        (<HabitsDayContainer  >
                                    <>
                                        { 
                                        listHabits.map((h=><HabitDayLabel data-test="today-habit-container">{
                                                    <>
                                                        <h2 data-test="today-habit-name" >{h.name}</h2>    
                                                        <p data-test="today-habit-sequence" >sequência atual: {h.currentSequence} dias</p>
                                                        <p data-test="today-habit-record" >seu recorde: {h.highestSequence} dias</p>
                                                        <svg data-test="today-habit-check-btn" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect   x="0.5" y="0.5" width="68" height="68" rx="4.5" onClick={()=>{h.done? unMarkHabit(h.id) : markHabit(h.id)}} fill={h.done? "#8fc549" : "#ebebeb" }stroke="#E7E7E7" />
                                                            <path d="M48.5686 20.9566C49.1694 20.3503 49.9857 20.0064 50.8392 20.0001C51.6928 19.9938 52.5141 20.3256 53.1237 20.9231C53.7333 21.5205 54.0816 22.335 54.0926 23.1885C54.1035 24.0419 53.7761 24.8651 53.182 25.4779L35.9915 46.9682C35.6962 47.2862 35.3398 47.5413 34.9437 47.7185C34.5476 47.8957 34.1198 47.9912 33.6859 47.9994C33.252 48.0076 32.821 47.9283 32.4184 47.7662C32.0159 47.6041 31.6502 47.3625 31.3431 47.0559L19.9456 35.6628C19.3399 35.0569 18.9998 34.2351 19 33.3784C19.0002 32.5216 19.3407 31.7001 19.9467 31.0944C20.5527 30.4887 21.3744 30.1486 22.2311 30.1488C23.0879 30.149 23.9094 30.4895 24.5151 31.0955L33.5292 40.1117L48.4831 21.0575C48.5103 21.0228 48.5396 20.9899 48.5708 20.9588L48.5686 20.9566Z" fill="white" />
                                                        </svg>
                                                    </>
                                        }</HabitDayLabel>))
                                        }
                                
                                    </>
                                
                            
                            
                    </HabitsDayContainer>   
                    )
                    }
                
                
            

                         
           

        </TodayContainer>


    )



}
const HabitsDayContainer = styled.div`
    margin-top:25px;
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:10px;
    background-color:"red";

`
const HabitDayLabel = styled.div`
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
    margin: 0 0 0 0;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top:18px;
    
    width:340px;
    max-height:94px;
    h2{
                position:relative;
                bottom:10px;
                left:3px;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 19.976px;
                line-height: 25px;
                color: #666666;
            }
    p{
        position:relative;
                bottom:30px;
                left:3px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: -10px;
        color: #666666;

    }
            
    svg{
        position: relative;
        left: 260px;
        bottom:105px;
    }

`


const TodayContainer = styled.div`
    overflow:hidden;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    background-color:#E5E5E5;
    width:100%;
    align-items:center;
`
const TodayMessageArea = styled.div`
    min-width:303px;
    background-color:#E5E5E5;
    h1{

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

 


`

const StyledPercentText = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #8FC549;
`

const StyledUnPercentText = styled.p`
     font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #BABABA;


`