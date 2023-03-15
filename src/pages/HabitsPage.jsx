import styled from "styled-components";
import NavBar from './NavBar.jsx'
export default function Habits({userData}){
    console.log ("userDataApos login",userData)
    return(
        <HabitsContainer>
            <NavBar>
                <img src={userData.image}></img>
                <p>{userData.name}</p>
            </NavBar>
                <img src={userData.image}></img>
                <p>{userData.name}</p>
        </HabitsContainer>
    )
}

const HabitsContainer = styled.div `
    width:100%;
`
