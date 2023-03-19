
import styled from "styled-components";
import { useContext, useState } from "react";
import Habit from '../../Components/Habit.jsx'
import { HabitContext } from "../../Contexts/HabitContext.jsx";
import { FormCardContext } from "../../Contexts/FormCardContext";
import {UserContextHook} from '../../Hooks/UserContextHook'
const selectedColor = "#CFCFCF" 
const unSelectedColor = "#FFFFFF"


export default function HabitsFeed() {
    const {isCanceled , setIsCanceled} = useContext(FormCardContext)
    const { habit, setHabit } = useContext(HabitContext)
    const [habitsInServer, setHabitsInServer] = useState ([])
    const [btnPlusClicked, setBtnPlusClicked] = useState(false)
    const {user} = UserContextHook()
    localStorage.setItem('token', user.token)
    const token = localStorage.getItem(user.token);
    if (!token) {
     localStorage.clear()
    }
    function addNewHabit() {
        setBtnPlusClicked(true) 
        setIsCanceled(false)
    }
 
    return (
        <HabitsContainer>
            <NewHabitContainer>
                <h2>Meus Hábitos</h2>

                <PlusContainer onClick={addNewHabit}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.244925 8.66063V6.23279H5.55921V0.837576H8.39169V6.23279H13.7599V8.66063H8.39169V13.867H5.55921V8.66063H0.244925Z" fill="white" />
                    </svg>
                </PlusContainer>


            </NewHabitContainer>
            {btnPlusClicked && <Habit />}
            {
                <DefaultContainer>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </DefaultContainer>
            }

           

        </HabitsContainer>

    )

}

const HabitsContainer = styled.div`
    background-color:#F2F2F2;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
 

`
const NewHabitContainer = styled.div`
    background-color:#F2F2F2;
    width:340px;
    height:100%;
  
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    margin-top:18px;
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        
        color: #126BA5;
    }

`
const PlusContainer = styled.div`
    width:40px;
    height:35px;
    border-radius: 4.63636px;
    background: #52B6FF;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   

`
const DefaultContainer = styled.div`
    margin-left:18px;
    margin-right:18px;
    p {

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
  


`
const SetedCardContainer = styled.div `
    margin-top:10px;


`
const SetedCard = styled.div`
margin-top:10px;
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;

p{
    min-width: 100%;
    height: 25px;
    position:relative;
    left:15px;
    bottom:28px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    
    color: #666666;
    }

    svg{
      
        position:relative;
        left:300px;
        top:8px;
    }


`

const WeekDays = styled.div`
    position:relative;
    bottom:35px;
    width:303px;
    height:35px;
    margin-left:18px;
`

const DayButtonCard = styled.button`
    
    width: 30px;
    height: 30px;
    margin-right:5px;
    
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */
    color:${props => !props.color ? selectedColor : unSelectedColor};
    background:${props => props.color ? selectedColor : unSelectedColor};
    opacity: ${props => props.selected ? '0.5' : '1'};
    
     /* &:hover {  
        color:${props => !props.color && 'gray'};
        background-color: ${props => props.color ? selectedColor : 'lightgray'};
    }  */

`