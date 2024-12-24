import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Mobile from './Mobile'

import '../../styles/app/app.css'
import '../../styles/pages/home.css'

function App() {

    // Window Size
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    return(
        <div className='app-content'>

            {windowSize.width > 1000 ? <Mobile /> : <Outlet context />}

        </div>
    )
}

export default App