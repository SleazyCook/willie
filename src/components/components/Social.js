import social from "../../data/social"

function Social() {
    return(
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
    )
}

export default Social