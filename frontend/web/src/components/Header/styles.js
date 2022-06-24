import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #20295F;
    display: flex;
    border-bottom: 5px solid #EE6B26
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img{
        width: 110px;
        height: 50px;
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
`