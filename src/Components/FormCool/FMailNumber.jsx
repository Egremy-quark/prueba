import React from 'react'
import styled from "styled-components";
import InputForm from './InputForm';
import imgProfile from './images/SAUTK7RECZE73KGFFQLKKR3DJQ.jpg'


const FMailNumber = ({ mail, setMail, phone, setPhone }) => {





    return (
        < >

            <ContainerOfChat>


                <Chat>
                    <ProfileImgBox src={imgProfile} alt='profileImg' />
                    <SectionForm >
                        <TitlePerForm> Datos de contacto </TitlePerForm>
                        <InputForm
                            type="email"
                            state={mail}
                            changeState={setMail}
                            name="mail"
                            placeholder="Correo electrónico"
                        // regularExpresion={/^[a-zA-ZÀ-ÿ\s?.,0-9]{4,100}$/}
                        />
                        <InputForm
                            type="number"
                            state={phone}
                            changeState={setPhone}
                            name="phone"
                            placeholder="Teléfono celular"
                        // regularExpresion={/^[a-zA-ZÀ-ÿ\s?.,0-9]{4,100}$/}
                        />

                    </SectionForm>
                </Chat>
            </ContainerOfChat>





            {
                (mail.field || phone.field) &&
                <Success>
                    {`
                    Correo electrónico: ${mail.field}  
                    `}
                    <br />
                    <br />
                    {`
                    Teléfono celular: ${phone.field} 
                    `}
                </Success>
            }

        </>
    )
}

export default FMailNumber


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
// const Success = styled.div`
//     max-height: 80px;
//     max-width: 300px;
//     font-size: 14px;
//     background: #F074DC;
//     color: #141414;
//     padding: 10px 30px;
//     /* font-weight: bold; */
//     border-radius: 5px;
//   `;