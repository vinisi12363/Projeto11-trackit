import styled from "styled-components";
import NavBar from './NavBar.jsx'
export default function Habits(){
    return(
        <HabitsContainer>
            <NavBar></NavBar>
        </HabitsContainer>
    )
}

const HabitsContainer = styled.div `
    width:100%;
`
