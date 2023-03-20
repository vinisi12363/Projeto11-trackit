
import NavBar from '../../Components/NavBar'
import Today from "../../Components/Today";
import Menu from '../../Components/Menu'
import styled from 'styled-components';



export default function TodayPage(){
    return (
        <TodayContainer>  
                <NavBar/>
                <Today/>
                <Menu/>
        </TodayContainer>
    )
  
   


}
const TodayContainer = styled.div `
    min-height:100vw;
    background-color: "#E5e5e5e5";
    overflow-y:scroll;

`