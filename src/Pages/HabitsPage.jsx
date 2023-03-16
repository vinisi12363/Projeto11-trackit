import styled from "styled-components";
import NavBar from './NavBar.jsx'
import {UserContextHook} from '../Hooks/UserContextHook'

export default function Habits(){

    const {user} = UserContextHook()
    console.log ("user", user)

    return(
        <HabitsContainer>
            <NavBar>
                <img src={user.image}></img>
                <p>{user.name}</p>
            </NavBar>
                <img src={user.image}></img>
                <p>{user.name}</p>
        </HabitsContainer>
    )
}

const HabitsContainer = styled.div `
    width:100%;
`
