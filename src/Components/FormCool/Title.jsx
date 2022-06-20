import React from 'react'
import styled from "styled-components";
import clock from './images/clock.svg'
import clipBoard from './images/clipBoard.svg'

const Title = () => {
    return (
        <BoxTitle>

            <TitleInBox>
                <TextOfBox >
                    Título de formulario
                    <SecondLine>
                        <Clock src={clock} alt='clipBoard' />En menos 5 minutos
                    </SecondLine>
                </TextOfBox>

                {/* Segundo bloque */}
                <ClipBoard src={clipBoard} alt='clipBoard' />
            </TitleInBox>
            {/* <progress v  */}
        </BoxTitle>
    )
}

export default Title


const BoxTitle = styled.div`
    /* position: sticky; */
    top:0px;
    width: 100%;
    height: 100%;
    background-color:#F074DC;
    border-radius: 5px 5px 0px 0px;
    margin-bottom: 20px;
`;


const TitleInBox = styled.div`
display: grid;
padding-top: 45px;
padding-bottom: 45px;
grid-template-columns: 1fr 1fr;
margin-left:15px ;
text-align: center;
justify-items: center;
`;

const TextOfBox = styled.div`
display: flex;
flex-direction: column;
font-size: 14px;
`



const SecondLine = styled.div`
padding-top: 35px;
display: flex;
align-items: center;
text-align:left;
font-size: 12px;
`


const ClipBoard = styled.img`
height: 55px;
width: 55px;
`


const Clock = styled.img`
height: 15px;
width: 15px;
`