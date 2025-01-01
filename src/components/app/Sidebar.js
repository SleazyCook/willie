import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Spotify from '../components/Spotify'
import Footer from '../components/Footer'

function Sidebar() {
    return(
        <div className='sidebar'>

            <Link to='/' className='elitemagicalbeats'>Elite Magical Beats</Link>

            <Navigation />

            <Spotify />

            <Footer />
        </div>
    )
}

export default Sidebar