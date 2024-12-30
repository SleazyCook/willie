import bio from "../../data/bio"

function About() {
    return(
        <div className='page about'>

            <h2 className='page__header'>
                About Me
            </h2>

            <div className='about__content'>
                {bio.map((bioObj) => {
                    return(
                        <p className='paragraph' key={bioObj.id}>
                            {bioObj.p}
                        </p>
                    )
                })}
            </div>

        </div>
    )
}

export default About