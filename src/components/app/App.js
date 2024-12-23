import { Outlet } from 'react-router-dom'

import '../../styles/app/app.css'
import '../../styles/pages/home.css'

function App() {
    return(
        <div className='app-content'>
            <Outlet context />
        </div>
    )
}

export default App