import logo from '../assets/images/logo-qa-noir.png'
import { Button } from '@mantine/core'
import { Burger } from '@mantine/core';
import '../assets/styles/Header.css'

function Header() {
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <a href="index.html">
                    <img src={logo} alt="Logo du restaurant le Quai Antique" className='logo'/>
                </a>
            </div>
            <nav>
                <a href="#">Carte</a>
                <a href="#">Connexion</a>
                <Button className='button' color="dark" size="md" compact>Réserver</Button>
            </nav>
                <Burger className='burger-icon' size="sm" />
        </div>
    )
}

export default Header