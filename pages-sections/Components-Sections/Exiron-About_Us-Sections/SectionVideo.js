import React from 'react';
export default function SectionVideo() {
    
  return (
    <div style = {{height: '100vh', width: '100vw'}}>
        <iframe
            // style = {{width:100}}
            width={"100vw"}
            style = {{height: '100vh', width: '100vw'}}
            src="https://www.youtube.com/embed/qNxmo4nAA_Q"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            ></iframe>
    </div>
  )
}
