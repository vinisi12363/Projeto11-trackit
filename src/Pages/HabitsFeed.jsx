import styled from "styled-components";

export default function HabitsFeed() {
    
    function addNewHabit(){
        alert("plus clicked!")
        
    
        

        
   
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

            <DefaultContainer>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </DefaultContainer>


            <NewHabit>
                    
                    <form>
                        <input type="text" ></input>
                        <WeekDays> 
                            <DayButton>D</DayButton>
                            <DayButton>S</DayButton>
                            <DayButton>T</DayButton>
                            <DayButton>Q</DayButton>
                            <DayButton>Q</DayButton>
                            <DayButton>S</DayButton>
                            <DayButton>S</DayButton>
                         </WeekDays>
                         
                         <p>Cancelar</p>
                        <BtnSalvar >salvar</BtnSalvar>
                    </form>
                
            </NewHabit>

        </HabitsContainer>

    )

}

const HabitsContainer = styled.div`
    background-color:#F2F2F2;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    
 

`
const NewHabitContainer = styled.div `
    background-color:#F2F2F2;
    width:100%;
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
        margin-left:17px;
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
    margin-right:18px;

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


const NewHabit = styled.div `
    width:340px;
    height:180px;
    margin-left:18px;
    margin-top:8px;

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

  form p {
    position:relative;
    top:22px;
    left:10px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    /* identical to box height */
    text-align: center;
    color: #52B6FF;

  }
    


`

const WeekDays = styled.div `
    width:303px;
    height:35px;
    margin-left:18px;
`

const DayButton = styled.button `
    width: 30px;
    height: 30px;
    left: 206px;
    top: 218px;
    margin-right:5px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */


    color: #DBDBDB;

`

const BtnSalvar = styled.button `
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