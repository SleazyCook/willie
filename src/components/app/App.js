import { Outlet } from 'react-router-dom'

import '../../styles/app/app.css'

function App() {
    return(
        <div>
            <Outlet context />
        </div>
    )
}

export default App