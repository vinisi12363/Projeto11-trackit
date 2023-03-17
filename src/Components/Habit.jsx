import { useContext, useState } from "react"
import styled from "styled-components"
import { HabitHook } from "../Hooks/HabitHook"
const selectedColor = "#CFCFCF" 
const unSelectedColor = "#FFFFFF"

export default function Habit(){
    const  [newHabitText, setNewHabitText] = useState("")
    const [saveHabitClicked, setSaveHabitClicked] = useState(false)
    const {habit , setHabit} = HabitHook()
    console.log("HABIT",habit)
    const [weekDaysInfo, setWeekDaysInfo] = useState (
        [
            {
                id: "btn1",
                name: "D",
                selected: false

            },
            {
                id: "btn2",
                name: "S",
                selected: false

            },
            {
                id: "btn3",
                name: "T",
                selected: false

            },
            {
                id: "btn4",
                name: "Q",
                selected: false

            },
            {
                id: "btn5",
                name: "Q",
                selected: false

            },
            {
                id: "btn6",
                name: "S",
                selected: false

            },
            {
                id: "btn7",
                name: "S",
                selected: false

            },



        ]
    )
    
    function saveHabit(){
       
        setSaveHabitClicked(true)
        const newHabitContext = {
            id:1,
            text:newHabitText,
            saveClicked:true,
            daysOfWeek:"Domingo",
        }
        setHabit([...habit , newHabitContext])
        
        console.log ("NEW HABIT", habit);
    }

    function selectDay(id) {
        
        const newWeekDaysInfo= weekDaysInfo.map((w => {
            if (id === w.id) {
                return {...w, selected: !w.selected}
            }
            return w
        }))
       setWeekDaysInfo (newWeekDaysInfo);
    }
    return (
    <NewHabit>

                    <input key ="newHabitInput" value={newHabitText} type="text" onChange={e=>setNewHabitText(e.target.value)} ></input>
               
                    <WeekDays>
                        {
                            weekDaysInfo.map((day => {

                                return <DayButton
                                    id={day.id}
                                    color={day.selected}                                    
                                    onClick={() => selectDay(day.id)}>
                                    {day.name}
                                </DayButton>

                            }))
                        }

                    </WeekDays>

                    <StyledP>Cancelar</StyledP>
                    <BtnSalvar onClick={()=>saveHabit()}>salvar</BtnSalvar>
                    

            </NewHabit>
    )

}

const NewHabit = styled.div`
    width:340px;
    height:180px;
    margin-top:8px;
    border-radius:5px;
    background-color:white;
    input{
        width: 303px;
        height: 45px;
        left: 36px;
        top: 165px;
        margin-left:18px;
        margin-top:8px;
        margin-bottom:8px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }



`

const StyledP = styled.p `
    
        position:relative;
        top:22px;
        left:10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;

    
`
const WeekDays = styled.div`
    width:303px;
    height:35px;
    margin-left:18px;
`

const DayButton = styled.button`
    
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
    
     &:hover {  
        color:${props => !props.color && 'gray'};
        background-color: ${props => props.color ? selectedColor : 'lightgray'};
    } 

`
const BtnSalvar = styled.button`
        position:relative;
        left:240px;
        bottom:20px;
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border:none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        /* identical to box height */

        text-align: center;

        color: #FFFFFF;

`