import React from 'react';
import Logo from '../../assets/imgs/Logo.png';
import ButtonLink from './components/ButtonLink'
import './Menu.css'

function Menu() {
  return (
    <nav className="Menu">
        <a href="/" >
            <img src={Logo} alt="Logo" className='Logo' />            
        </a>
        <ButtonLink className='ButtonLink' href='/'>
            Novo Vídeo
        </ButtonLink>
    </nav>
  );
}

export default Menu;
