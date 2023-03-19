import styled from "styled-components";
export default function Today(){
    return(
        <TodayContainer>
            <TodayMessageArea>
            <h1>Segunda, 17/05</h1>
            <p>Nenhum hábito concluído ainda</p>
            </TodayMessageArea>


        </TodayContainer>


    )



}
const TodayContainer = styled.div `
    display:flex;
    flex-direction:column;
    width:100%;
`
const TodayMessageArea =styled.div `
    min-width:303px;
    background-color:green;
    h1{

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #BABABA;
    }


`