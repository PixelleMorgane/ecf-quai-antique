import chef from '../assets/images/chef.jpg'
import CarouselComponent from '../components/CarouselComponent'
import '../assets/styles/HomePage.css'

function HomePage() {
    return (
        <div className='home-page-container'>
            <section className="hero-section">
                <h1>Bienvenue au Quai Antique</h1>
            </section>
            <section className="story-section">
                <img src={chef} alt="Chef cuisinier" />
                <div className="story">
                    <h2>Notre cuisine...</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </section>
            <section className="pictures-section">
                <h2>Les immanquables</h2>
                <CarouselComponent />
            </section>
        </div>
    )
}

export default HomePage