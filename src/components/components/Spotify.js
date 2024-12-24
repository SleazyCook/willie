function Spotify() {

    const spotifyStyle = {
        borderRadius: '12px',
    }

    return(
        <div className='spotify'>
            <iframe 
                style={spotifyStyle}
                src="https://open.spotify.com/embed/playlist/4orQ2Y9mczHLLsnLIfRQjM?utm_source=generator" 
                width="90%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
        </div>
    )
}

export default Spotify

