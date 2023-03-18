
import styled from "styled-components";
import { useContext, useState } from "react";
import Habit from '../Components/Habit.jsx'
import { HabitContext } from "../Contexts/HabitContext.jsx";
import { FormCardContext } from "../Contexts/FormCardContext";
const selectedColor = "#CFCFCF" 
const unSelectedColor = "#FFFFFF"


export default function HabitsFeed() {
    const {isCanceled , setIsCanceled} = useContext(FormCardContext)
    const { habit, setHabit } = useContext(HabitContext)
    const [btnPlusClicked, setBtnPlusClicked] = useState(false)

    function addNewHabit() {
        setBtnPlusClicked(true) 
        setIsCanceled(false)
    }

    console.log("HABITO",habit)
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
            {(!btnPlusClicked && !habit.saveClicked) &&
                <DefaultContainer>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </DefaultContainer>
            }

            <SetedCardContainer>
            {
                habit.map((h => <SetedCard>{
                    <>
                             <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 5.5C4.13261 5.5 4.25979 5.55268 4.35355 5.64645C4.44732 5.74021 4.5 5.86739 4.5 6V12C4.5 12.1326 4.44732 12.2598 4.35355 12.3536C4.25979 12.4473 4.13261 12.5 4 12.5C3.86739 12.5 3.74021 12.4473 3.64645 12.3536C3.55268 12.2598 3.5 12.1326 3.5 12V6C3.5 5.86739 3.55268 5.74021 3.64645 5.64645C3.74021 5.55268 3.86739 5.5 4 5.5ZM6.5 5.5C6.63261 5.5 6.75979 5.55268 6.85355 5.64645C6.94732 5.74021 7 5.86739 7 6V12C7 12.1326 6.94732 12.2598 6.85355 12.3536C6.75979 12.4473 6.63261 12.5 6.5 12.5C6.36739 12.5 6.24021 12.4473 6.14645 12.3536C6.05268 12.2598 6 12.1326 6 12V6C6 5.86739 6.05268 5.74021 6.14645 5.64645C6.24021 5.55268 6.36739 5.5 6.5 5.5ZM9.5 6C9.5 5.86739 9.44732 5.74021 9.35355 5.64645C9.25979 5.55268 9.13261 5.5 9 5.5C8.86739 5.5 8.74021 5.55268 8.64645 5.64645C8.55268 5.74021 8.5 5.86739 8.5 6V12C8.5 12.1326 8.55268 12.2598 8.64645 12.3536C8.74021 12.4473 8.86739 12.5 9 12.5C9.13261 12.5 9.25979 12.4473 9.35355 12.3536C9.44732 12.2598 9.5 12.1326 9.5 12V6Z" fill="#666666" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C13 3.26522 12.8946 3.51957 12.7071 3.70711C12.5196 3.89464 12.2652 4 12 4H11.5V13C11.5 13.5304 11.2893 14.0391 10.9142 14.4142C10.5391 14.7893 10.0304 15 9.5 15H3.5C2.96957 15 2.46086 14.7893 2.08579 14.4142C1.71071 14.0391 1.5 13.5304 1.5 13V4H1C0.734784 4 0.48043 3.89464 0.292893 3.70711C0.105357 3.51957 0 3.26522 0 3V2C0 1.73478 0.105357 1.48043 0.292893 1.29289C0.48043 1.10536 0.734784 1 1 1H4.5C4.5 0.734784 4.60536 0.48043 4.79289 0.292893C4.98043 0.105357 5.23478 0 5.5 0L7.5 0C7.76522 0 8.01957 0.105357 8.20711 0.292893C8.39464 0.48043 8.5 0.734784 8.5 1H12C12.2652 1 12.5196 1.10536 12.7071 1.29289C12.8946 1.48043 13 1.73478 13 2V3ZM2.618 4L2.5 4.059V13C2.5 13.2652 2.60536 13.5196 2.79289 13.7071C2.98043 13.8946 3.23478 14 3.5 14H9.5C9.76522 14 10.0196 13.8946 10.2071 13.7071C10.3946 13.5196 10.5 13.2652 10.5 13V4.059L10.382 4H2.618ZM1 3V2H12V3H1Z" fill="#666666" />
                             </svg>
                        <p>{h.text}</p>
                                {h.daysOfWeek !== undefined  ?  <WeekDays>
                                            {  
                                               h.daysOfWeek.map((d=><DayButtonCard 
                                               key={d.id}
                                               id={d.id} 
                                               color={d.selected}>
                                                    {d.name}
                                                    </DayButtonCard>))
                                            
                                            }
                                            
                                </WeekDays> : <></> }
                                
                         
                    </>

                }</SetedCard>))
            }

            </SetedCardContainer>
            

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