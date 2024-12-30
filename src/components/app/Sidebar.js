import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Spotify from '../components/Spotify'
import Footer from '../components/Footer'

function Sidebar() {
    return(
        <div className='sidebar'>
            <Header />

            <Navigation />

            <Spotify />

            <Footer />
        </div>
    )
}

export default Sidebar