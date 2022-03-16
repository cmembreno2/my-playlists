import React from 'react';

const SpecificPlaylist = ({name,img,likes,songs,songslist})=>{
    return(
        <article className='playlist'>
            <h1>{name}</h1>
            <img src={img} alt=""/>
            <h4>{likes}<i className='fas fa-heart'></i>{songs}</h4>
            <iframe title="spotify" src={songslist} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </article>
    )
}

export default SpecificPlaylist