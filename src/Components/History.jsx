import styled from "styled-components";

export default function History(){
    return(
        <HistoryContainer>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui</p>
        </HistoryContainer>
    )   
    
}

const HistoryContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    background-color:"#E5E5E5;";

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        /* identical to box height */


        color: #126BA5;
    }
    p{

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;

    }

`