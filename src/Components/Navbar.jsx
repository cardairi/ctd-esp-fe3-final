import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state,toggleTheme} = useContext(ContextGlobal);
  
  return (
    <nav  style={{ background: state.theme.backgroundNavbar, color:state.theme.color }} >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">Home</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/favs">Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>
        Change theme</button>
    </nav>
  )
}

export default Navbar