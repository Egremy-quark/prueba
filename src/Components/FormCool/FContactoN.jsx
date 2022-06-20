import React from 'react'
import styled from "styled-components";
import InputForm from './InputForm';
import imgProfile from './images/SAUTK7RECZE73KGFFQLKKR3DJQ.jpg'


const FContactoN = ({ nombre, setNombre, segundoNombre, setSegundoNombre, paterno, setPaterno, materno, setMaterno }) => {


    return (
        < >

            <ContainerOfChat>


                <Chat>
                    <ProfileImgBox src={imgProfile} alt='profileImg' />
                    <SectionForm >
                        <TitlePerForm> ¿Cuál es tu nombre? </TitlePerForm>
                        <InputForm
                            type="text"
                            state={nombre}
                            changeState={setNombre}
                            name="nombre"
                            placeholder="Nombre"
                            regularExpresion={/^[a-zA-ZÀ-ÿ\s?.,0-9]{2,100}$/}
                        />
                        <InputForm
                            type="text"
                            state={segundoNombre}
                            changeState={setSegundoNombre}
                            name="segundoNombre"
                            placeholder="Segundo nombre"
                        />
                        <InputForm
                            type="text"
                            state={paterno}
                            changeState={setPaterno}
                            name="paterno"
                            placeholder="Apellido paterno"
                            regularExpresion={/^[a-zA-ZÀ-ÿ\s?.,0-9]{2,100}$/}
                        />
                        <InputForm
                            type="text"
                            state={materno}
                            changeState={setMaterno}
                            name="segundoNombre"
                            placeholder="Apellido materno"
                            regularExpresion={/^[a-zA-ZÀ-ÿ\s?.,0-9]{2,100}$/}
                        />
                    </SectionForm>
                </Chat>
            </ContainerOfChat>





            {
                (nombre.field || paterno.field || materno.field) &&
                <Success>
                    {`${nombre.field} ${segundoNombre.field} ${paterno.field} ${materno.field}`}

                </Success>
            }

        </>
    )
}

export default FContactoN


const ContainerOfChat = styled.div`
margin: 40px;
`

const ProfileImgBox = styled.img`
height: 55px;
width: 55px;
border-radius: 5px;
border: 3px solid pink;
`



const Chat = styled.div`
display: flex;
gap: 0px;

`



const SectionForm = styled.div`
display: flex;
background-color: #F0F0F0;
flex-direction: column;
/* position: relative; */
margin-left: 20px;
margin-right: 10px;
padding: 20px;
align-items: right;
text-align: center;
border-radius: 5px;

`


const TitlePerForm = styled.p`
font-weight: bold;
display: flex;
`



const Success = styled.div`

    display: flex;
    align-items: left;
    text-align: left;
    flex-direction: column;
    margin-top: 20px;
    max-height: 120px;
    max-width: 300px;
    font-size: 12px;
    background: #F074DC;
    color: #141414;
    padding: 10px 30px;
    /* font-weight: bold; */
    border-radius: 5px;
`;
