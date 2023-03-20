import { useEffect, useState } from "react"
import styled from "styled-components"
import { FormCardHook } from "../Hooks/FormCardHook"
import { UserContextHook } from "../Hooks/UserContextHook"
import axios from "axios"

const selectedColor = "#CFCFCF" 
const unSelectedColor = "#FFFFFF"



export default function Habit(){
    const [setingHabit, setSetingHabit] = useState(false)
    const {user} = UserContextHook()
    const {isCanceled, setIsCanceled} = FormCardHook()
    const [newHabitText, setNewHabitText] = useState("")
    const [cont , setCont] = useState (0)
    const [saveHabitClicked, setSaveHabitClicked] = useState(false)
    const [weekDaysInfo, setWeekDaysInfo] = useState (
        [
            {
                id: 0,
                name: "D",
                selected: false

            },
            {
                id: 1,
                name: "S",
                selected: false

            },
            {
                id: 2,
                name: "T",
                selected: false

            },
            {
                id: 3,
                name: "Q",
                selected: false

            },
            {
                id: 4,
                name: "Q",
                selected: false

            },
            {
                id: 5,
                name: "S",
                selected: false

            },
            {
                id: 6,
                name: "S",
                selected: false

            },



        ]
    )
    const [daysSelected, setDaysSelected] = useState([])
    
    localStorage.setItem('token', user.token)

    const token = localStorage.getItem('token');
    if (!token) {
     localStorage.clear()
    }

        
    
    function saveHabit(){
        
        

        const newDaySelected = [...weekDaysInfo]
                setDaysSelected(newDaySelected)
                const newArrayDay = weekDaysInfo.filter(objeto => objeto.selected).map(objeto => objeto.id);
                setNewHabitText("")
              
        setCont(+1)
        
        setSaveHabitClicked(true)
         
       if (newHabitText !== ""){
        const  newHabit = {
            name:newHabitText,
            days:newArrayDay,
        }
        
        
        if (newHabit !== undefined && newHabit.name !== ""  && newHabit.days.length>0 && newHabit.days !== []){
            setSetingHabit(true)
            const url ="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
            const body = newHabit
            const config = {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }
        
                const require = axios.post (url, body ,config)
                require.then(res=>{
                    console.log(res.data)
                    setSetingHabit(false)
                    setDaysSelected([])
                    setNewHabitText("")
                })
                require.catch(err=>{
                    console.log(err.response.data.message)
                    setSetingHabit(false)
                })
        }
       }else {alert("não pode salvar um hábito com o campo vazio!")
            setSetingHabit (false)
        }
      
           
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
    function cancelarForm (){
        setIsCanceled (true);
    }

    return (
        !isCanceled && <NewHabit data-test="habit-create-container">
            
            <input  disabled={setingHabit} key ="newHabitInput" value={newHabitText} type="text" onChange={e=>setNewHabitText(e.target.value)} ></input>
                
                <WeekDays disabled={setingHabit}>
                    {
                        weekDaysInfo.map((day => {

                            return <DayButton
                                data-test="habit-day" 
                                id={day.id}
                                color={day.selected}                                    
                                onClick={() => selectDay(day.id)}>
                                {day.name}
                            </DayButton>

                        }))
                    }

                </WeekDays>

                <StyledP data-test="habit-create-cancel-btn" onClick={()=>cancelarForm()}>Cancelar</StyledP>
                <BtnSalvar data-test="habit-create-save-btn" disabled={setingHabit} onClick={()=>{saveHabit();}}>salvar</BtnSalvar>
                    
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

const StyledP = styled.button `
        border:none;
        background:transparent;
        position:relative;
        left:135px;
        top:15px;
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
        left:155px;
        top:15px;
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