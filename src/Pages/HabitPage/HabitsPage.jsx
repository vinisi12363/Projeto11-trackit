import styled from "styled-components";
import NavBar from '../../Components/NavBar'
import Menu from '../../Components/Menu'
import HabitsFeed from "./HabitsFeed.jsx";
import {UserContextHook} from '../../Hooks/UserContextHook'
import { HabitHook } from '../../Hooks/HabitHook'
export default function Habits(){

    const {user} = UserContextHook()
    const {habit} = HabitHook()
    
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
                <Menu/>
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
