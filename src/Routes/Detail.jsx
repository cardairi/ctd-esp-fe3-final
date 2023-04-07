import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [detail, setDetail] = useState([]);
  const {state} = useContext(ContextGlobal);
  const param = useParams()

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${param.id}`
      );
      const data = await response.json();
      setDetail(data);
    };
    getUserData();
  }, [param.id]);

  return (
    <div >

      <h1>Detail Dentist {detail.id}</h1>
      <div className="card" style={{ background: state.theme.backgroundCard, color:state.theme.color, marginLeft: '35rem' }}>
        <img src="/images/doctor.jpg" alt="" width={200} />
        {detail.name && <h4>Name: {detail.name}</h4>}
        {detail.email && <h4>Email: {detail.email}</h4>}
        {detail.phone && <h5>Phone: {detail.phone}</h5>}
        {detail.website && <h5>Website: {detail.website}</h5>}
      </div>
    </div>
  );
};

export default Detail;