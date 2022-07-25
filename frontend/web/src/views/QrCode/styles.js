import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
`

export const Content = styled.div `
    width: 50%;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;

    h1{
        color: #EE6B26;
    }

    p{
        color: #20295F;
        font-weight: bold;
    }
`

export const QrCodeArea = styled.div `
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: center;
`

export const ValidationCode = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 10px;

    span{
        text-transform: uppercase;
        font-weight: bold;
    }

    input{
        font-size: 18px;
        padding: 10px;
        margin-top: 5px;
        text-align: center;
    }

    button{
        text-transform: uppercase;
        font-weight: bold;
        font-size: 18px;
        padding: 15px;
        margin-top: 10px;
        background-color:  #EE6B26;
        color: #FFF;
        border-radius: 30px;
        border: none;

        transition: .8s;
        cursor: pointer;

        &:hover{         
            background-color: #20295F;
        }
    }
`