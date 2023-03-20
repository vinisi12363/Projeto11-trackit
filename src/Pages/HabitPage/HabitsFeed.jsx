
import styled from "styled-components";
import trashIcon from '../../Utils/images/lixeira.png'
import plusIcon from '../../Utils/images/plus.png'
import { useContext, useEffect, useState } from "react";
import Habit from '../../Components/Habit.jsx'
import { HabitContext } from "../../Contexts/HabitContext.jsx";
import { FormCardContext } from "../../Contexts/FormCardContext";
import { UserContextHook } from '../../Hooks/UserContextHook'
import {BtnPlusClickedHook} from '../../Hooks/BtnPlusClickedHook'
import axios from "axios"
const selectedColor = "#CFCFCF"
const unSelectedColor = "#FFFFFF"


export default function HabitsFeed() {
 
    const { isCanceled, setIsCanceled } = useContext(FormCardContext)
    const [habitsInServer, setHabitsInServer] = useState([])
    const {btnPlusClicked, setBtnPlusClicked} = BtnPlusClickedHook()
    const [haveHabits, setHaveHabits] = useState(false)
    const [weekDaysInfo, setWeekDaysInfo] = useState(
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
    const { user } = UserContextHook()
    localStorage.setItem('token', user.token)
    const token = localStorage.getItem(user.token);
    if (!token) {
        localStorage.clear()
    }
    function addNewHabit() {
        setBtnPlusClicked(true)
        setIsCanceled (false);
    }

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const require = axios.get(URL, config);
        require.then(res => {
            
            setHabitsInServer([...res.data])
            if (res.data!== []){
                setHaveHabits(true)
                

            }
            

        })
        require.catch(err => {
            console.log(err.response.data.message)
            setHaveHabits(false)
        })

    }, [])
    function markSelectedDays(vetor) {
        const newObj = weekDaysInfo
        newObj.map(n => {
            if (n.id === vetor) {
                n.selected = true;
            }
        })
        console.log("newobj", newObj)
        setWeekDaysInfo(newObj);
    }
    function deleteHabit(id) {
      const resultado = window.confirm("Tem certeza que deseja deletar o hábito?");
        if (resultado) {
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
            const config = {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }
            const require = axios.delete(url, config)
            require.then(res => {
                console.log(res.data)
            })
            require.catch(err => {
                console.log(err.response.data.message)
            })
        } else {
            alert("Cancelando...")
        }




    }


    return (
        <HabitsContainer>
            <>

                <NewHabitContainer>
                    <h2>Meus Hábitos</h2>

                    <PlusContainer data-test="habit-create-btn" onClick={addNewHabit} >
                       
                        <img src={plusIcon} alt="btn mais"></img>
                    </PlusContainer>


                </NewHabitContainer>

                {btnPlusClicked ? <Habit />: <></>}

                { !haveHabits ?  (<DefaultContainer>
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </DefaultContainer>)
                    : (<SetedCardContainer  >
                    {
                        habitsInServer.map((h => <SetedCard  data-test="habit-container" >{
                            <>
                                <DeleteBinContainer data-test="habit-delete-btn"   onClick={()=>deleteHabit(h.id)} >
                                     <img src={trashIcon} alt="Lixeira" className="trash-icon" /> 
                                </DeleteBinContainer>


                                <p data-test="habit-name">{h.name}</p>
                                <WeekDays>
                                    {weekDaysInfo.map((d => <DayButtonCard  data-test="habit-day" key={d.id} >{
                                        d.name
                                    }</DayButtonCard>))
                                    }
                                </WeekDays>
                            </>



                        }</SetedCard>))
                    }

                </SetedCardContainer>)
                }





            </>


        </HabitsContainer>

    )

}

const HabitsContainer = styled.div`
    overflow:hidden;
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
const PlusContainer = styled.button`
    border: none;
    cursor: pointer;
    padding: 0;
    width:40px;
    height:35px;
    border-radius: 4.63636px;
    background: #52B6FF;
    img{
       
    }
    

`
const DeleteBinContainer = styled.button`

    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    min-width:40px;
    min-height:40px;
    border-radius:5px;
    position:relative;
        left:280px;
        top:15px;
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
const SetedCardContainer = styled.div`
    margin-top:10px;


`
const SetedCard = styled.div`
margin-top:10px;
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
div {
    background-color:"red";
}
p{
    min-width: 100%;
    height: 25px;
    position:relative;
    left:15px;
    bottom:48px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    
    color: #666666;
    }

 

`

const WeekDays = styled.div`
    position:relative;
    bottom:52px;
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