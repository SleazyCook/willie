import { Outlet } from 'react-router-dom'

import Mobile from './Mobile'

import Sidebar from './Sidebar'

import '../../styles/app/app.css'
import '../../styles/app/sidebar.css'
import '../../styles/pages/home.css'
import '../../styles/components/social.css'

function App() {

    return(
        <div>

            {window.innerWidth < 1000 ? <Mobile /> 
            
            : 
            
                <div className='app-content'>
                    <Sidebar />
                    <Outlet context />
                </div>
            }

        </div>
    )
}

export default App