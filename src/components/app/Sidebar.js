import Navigation from '../components/Navigation'
import Spotify from '../components/Spotify'
import Footer from '../components/Footer'

function Sidebar() {
    return(
        <div className='sidebar'>
            <div className='home__header'>
                <img src='https://i.imgur.com/986JIcQ.jpg' alt='avatar' />
                <h1 className='name'>
                    Willie the Pack Mack
                </h1>
            </div>

            <Navigation />

            <Spotify />

            <Footer />
        </div>
    )
}

export default Sidebar