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
                <ul>
                    <li>
                        <a href="#">Carte</a>
                    </li>
                    <li>
                        <a href="#">Connexion</a>
                    </li>
                </ul>
                <Button className='button' color="dark" size="md" compact>Réserver</Button>
                <Burger className='burger-icon' size="sm" />
            </nav>
        </div>
    )
}

export default Header