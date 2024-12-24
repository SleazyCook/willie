

import MobileHome from "../../app/MobileHome"

import Social from "../../components/Social"

function Home() {

    return(
        <div className='page home'>

        {window.innerWidth < 1000 ? <MobileHome /> : 
        
            
            <Social />
            
            
            }

        </div>
    )
}

export default Home