import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

export const Form = styled.div `
    width: 50%;
    margin-bottom: 70px;
`

export const TypeIcons = styled.div `
    width: 100%;
    
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    .inative{
        opacity: 0.5;
    }

    button{
        background: none;
        border: none;
    }

    img{
        width: 50px;
        height: 50px;
        margin: 10px;

        
        cursor: pointer;

        &:hover{
            opacity: 0.6;
        }
    }
`


export const Input = styled.div `
    width: 100%;
    margin: 20px 0;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    span{
        color: #707070;
        margin-bottom: 5px;
    }

    input{
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #EE6B26;
    }

`

export const TextArea = styled.div `
    width: 100%;
    margin: 20px 0;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    span{
        color: #707070;
        margin-bottom: 5px;
    }

    textarea{
        font-size: 16px;
        border: 1px solid #EE6B26;
        border-radius: 10px;
        padding: 10px;
    }

`

export const Options = styled.div `
    width: 100%;
    margin-top: 30px;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    div{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
        font-size: 18px;

        input{
            width: 25px;
            height: 25px;
            margin-right: 10px;
            cursor: pointer;
        }
    }
    

    button {
        font-weight: bold;
        color: #20295F;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover{
            opacity: 0.6;
        }
    }
`

export const Save = styled.div `
    width: 100%;
    margin-top: 40px;

    button{
        width: 100%;
        padding: 20px;
        background-color: #EE6B26;
        border: none;
        border-radius: 40px;

        font-size: 18px;
        font-weight: bold;
        color: #FFF;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

`