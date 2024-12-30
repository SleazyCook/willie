

import MobileHome from "../../app/MobileHome"
import Header from "../../components/Header"
import Social from "../../components/Social"

function Home() {

    return(
        <div className='page home'>

        {window.innerWidth < 1000 ? <MobileHome /> : <>
        
            
            <Header />
            
            <Social />
            
            
            </>}

        </div>
    )
}

export default Home