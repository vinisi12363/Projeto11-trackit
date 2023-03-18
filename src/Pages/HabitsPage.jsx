import styled from "styled-components";
import NavBar from './NavBar.jsx'
import HabitsFeed from "./HabitsFeed.jsx";
import {UserContextHook} from '../Hooks/UserContextHook'
import { HabitHook } from "../Hooks/HabitHook.js";
export default function Habits(){

    const {user} = UserContextHook()
    const {habit} = HabitHook()
    console.log("token", user.token)
    localStorage.setItem('token', user.token)

    const token = localStorage.getItem('token');
    if (!token) {
     localStorage.clear()
    }
        return(
        <>
            <HabitsContainer>
                <NavBar/> 
                <HabitsFeed/>     
            </HabitsContainer>
      
        </>
       
    )
}

const HabitsContainer = styled.div `
    display:flex;
    flex-direction: column;
    width:100%;
    min-height:200vw;
    background-color:#F2F2F2;
`
