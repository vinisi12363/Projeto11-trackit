import styled from "styled-components";
import NavBar from './NavBar.jsx'
import HabitsFeed from "./HabitsFeed.jsx";
import {UserContextHook} from '../Hooks/UserContextHook'

export default function Habits(){

    const {user} = UserContextHook()
    
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
