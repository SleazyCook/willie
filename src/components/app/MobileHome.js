

import social from "../../data/social"

function MobileHome() {
    return(
        <div className='mobile-home'>
            
            {/* header */}
            <div className='header'>
                <img src='https://i.imgur.com/986JIcQ.jpg' alt='avatar' />
                <h1 className='title'>
                    [EMB]
                </h1>
            </div>

            {/* social buttons */}
            <div className='social-btn__container'>
                {social.map((socialObj) => {
                    return(
                        <a 
                            className={`social-btn social-btn--${socialObj.name}`}
                            href={socialObj.link} 
                            key={socialObj.id} 
                            target='_blank'
                        >
                            <span className='social-btn--icon'>
                                <img src={socialObj.icon} alt={`${socialObj.name} logo`} />
                            </span>
                            <span className='social-btn--text'>{socialObj.name}</span>
                        </a>
                    )
                })}
            </div>



        </div>
    )
}

export default MobileHome