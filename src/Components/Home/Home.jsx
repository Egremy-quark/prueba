import React, { useState } from 'react';
import FContactoN from '../FormCool/FContactoN';
import FNacimientoN from '../FormCool/FNacimientoN';
import styled from "styled-components";
import './Home.css';
import Title from '../FormCool/Title';
import FMailNumber from '../FormCool/FMailNumber';



const Home = () => {


  const obj = JSON.parse(localStorage.getItem('informationUser'))

  const [nombre, setNombre] = useState({ field: "" || obj.nombre, validate: null });
  const [segundoNombre, setSegundoNombre] = useState({ field: "" || obj.segundoNombre || '', validate: null });
  const [paterno, setPaterno] = useState({ field: "" || obj.paterno, validate: null });
  const [materno, setMaterno] = useState({ field: "" || obj.materno, validate: null });



  const [mail, setMail] = useState({ field: "" || obj.mail, validate: null });
  const [phone, setPhone] = useState({ field: "" || obj.phone, validate: null });


  const [day, setDay] = useState({ field: "" || obj.day, validate: null });
  const [month, setMonth] = useState({ field: "" || obj.month });
  const [year, setYear] = useState({ field: "" || obj.year, validate: null });



  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("informationUser",
      JSON.stringify({
        nombre: nombre.field,
        segundoNombre: segundoNombre.field || null,
        paterno: paterno.field,
        materno: materno.field,
        mail: mail.field,
        phone: phone.field,
        day: day.field,
        month: month.field,
        year: year.field
      })
    )
  }



  console.log(obj);

  return (
    <div className='home'>
      <Formulario onSubmit={handleSubmit}>
        <Title />
        <FContactoN
          nombre={nombre}
          setNombre={setNombre}
          segundoNombre={segundoNombre}
          setSegundoNombre={setSegundoNombre}
          paterno={paterno}
          setPaterno={setPaterno}
          materno={materno}
          setMaterno={setMaterno}
        />
        <FNacimientoN
          day={day}
          setDay={setDay}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
        <FMailNumber
          mail={mail}
          setMail={setMail}
          phone={phone}
          setPhone={setPhone}
        />
        {(nombre.field && paterno.field && materno.field && day.field && month.field && year.field && mail.field && phone.field)
          && (
            <div>
              <Aviso>
                Si tus datos son correctos, por favor, continuemos.
              </Aviso>
              <Click
                onSubmit={handleSubmit}
              >  Iniciar </Click>
              <Success>
                {`Fecha de nacimiento: ${day.field} ${month.field} ${year.field} `}
                <br />
                {`Correo electrónico: ${mail.field} `}
                <br />
                {`Teléfono celular: ${phone.field} `}
                <br />
                {`Nombre: ${nombre.field} ${segundoNombre.field} ${paterno.field} ${materno.field} `}
              </Success>
            </div>

          )
        }
      </Formulario>
    </div>
  )
}

export default Home


const Formulario = styled.form`
    max-height: 600px;
    max-width: 500px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 8%; left: 50%;
    align-items: center;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    border: solid 1px black;

    @media (max-width: 800px) {
      /* grid-template-columns: 1fr; */
      /* margin-left: 20px; */
      /* margin-right: 20px; */
    }

  `;

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


const Aviso = styled.div`

    display: flex;
    align-items: left;
    text-align: left;
    flex-direction: column;
    margin-top: 20px;
    max-height: 120px;
    max-width: 300px;
    font-size: 14px;
    background: #F0F0F0;
    color: #141414;
    padding: 10px 30px;
    /* font-weight: bold; */
    border-radius: 5px;
  `;

const Click = styled.button`
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    background: #F64282;
    color: #fff;
    font-size: bold;
    width: 200px;
    padding: 15px 35px;
    &:hover {
       box-shadow: 3px 0px 40px rgba(0, 0, 0, 0.2);
       transform: scale(1.1, 1.1);
       transition: 500ms;
     }
     &:focus {
       border: 2px solid ;
      outline: none;
      box-shadow: 3px 0px 30px rgba(0, 0, 0, 0.2);
 }
`