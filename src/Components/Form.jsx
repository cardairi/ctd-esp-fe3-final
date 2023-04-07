import React, { useState } from "react";


const Form = () => {
  const [user,setUser] = useState({
      name: ' ',
      email: ' '
  })

  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(user.name.length > 5){
      const emailRegex = /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
      if(emailRegex.test(user.email)){
        setMessage(`Gracias ${user.name}, te contactaremos cuanto antes vía mail`)
      } else {
        setMessage(`Por favor verifique su información nuevamente`)
      }
    } else {
      setMessage(`Por favor verifique su información nuevamente`)
    }
    
  }
  return (
    <div className="state">
      <form onSubmit={handleSubmit}>
      <label>Nombre</label>
        <input type="text" onChange={(e) => setUser({...user, name: e.target.value})}/>
        <label>Email</label>
        <input type="email" onChange={(e) => setUser({...user, email: e.target.value})}/>
        <button>Send</button>
      </form>
      <h1>{message}</h1>
    </div>
  );
};



export default Form;