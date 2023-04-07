import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'


const Footer = () => {
   const {state} = useContext(ContextGlobal);

  return (
    <footer style={{ background: state.theme.backgroundFooter,  color:state.theme.color }}>
        <p>Powered by</p>
        <img src='./images/DH.png' width={200} alt='DH-logo'/>
        <img src='./images/ico-facebook.png' width={40} alt='Facebook-logo'/>
        <img src='./images/ico-instagram.png' width={40} alt='Instagram-logo' />
        <img src='./images/ico-tiktok.png' width={40} alt='Tiktok-logo' />
        <img src='./images/ico-whatsapp.png' width={40} alt='whatsapp-logo' />
    </footer>
  )
}

export default Footer