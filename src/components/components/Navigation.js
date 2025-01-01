import { Link } from 'react-router-dom'

function Navigation() {

    const nav = [
        {
            id: 1,
            name: 'Home',
            link: '/',
        },
        {
            id: 2,
            name: 'About',
            link: 'about'
        },
        // {
        //     id: 3,
        //     name: 'Contact',
        //     link: 'contact'
        // }
    ]

    return(
        <div className='navigation'>
            {nav.map((navObj) => {
                return(
                    <Link 
                        className={`nav-link nav-link--${navObj.name}`} 
                        to={navObj.link} 
                        key={navObj.id}
                    >
                        {navObj.name}
                    </Link>
                )
            })}
        </div>
    )
}

export default Navigation