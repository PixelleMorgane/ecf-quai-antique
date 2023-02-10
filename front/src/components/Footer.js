import logo from '../assets/images/logo-qa-blanc.png'
import { Button } from '@mantine/core'
import '../assets/styles/Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='logo-container'>
                <a href="index.html">
                    <img src={logo} alt="Logo du restaurant le Quai Antique" className='logo'/>
                </a>
            </div>
            <div className='hours'>
                <h3>Horaires</h3>
                <ul>
                    <li>test</li>
                </ul>
            </div>
            <Button className='button' variant="white" color="dark" size="md" compact>Réserver</Button>
        </div>
    )
}

export default Footer