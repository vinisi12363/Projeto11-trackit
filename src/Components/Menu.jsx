import styled from "styled-components";
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Menu(){
    
     const navigate = useNavigate();
    const percentage = 75;
    function irparaHabitos(){
        navigate("/habitos")
    }
    function irParaHistorico(){
        navigate("/historico")
    }
    return(
        <Menucontainer data-test="menu" >
            <Link to="/habitos" data-test="habit-link">
             <p>Hábitos</p>
            </Link>
       
          
            <Link data-test="today-link" to="/hoje">
                <CircularPContainer>
                    <CircularProgressbar value={percentage} text={'Hoje'} background={true} styles={{
                        // Customize the root svg element
                        root: {},
                        // Customize the path, i.e. the "completed progress"
                        path: {
                        // Path color
                        stroke: `rgba(255, 255, 255, ${percentage / 100})`,
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
                <p>Histórico</p>
            </Link>
           
            
         </Menucontainer>

    )
  
}
const CircularPContainer = styled.div `
    width:91px;
    min-height:91px;
    position:relative;
    bottom:35px;

`

const Menucontainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width: 95%;
    height: 94px;
    position: fixed;
    bottom:0px;
    background-color:"#FFFFFF";
    
    
   
    p{
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