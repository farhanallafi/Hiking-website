import React from 'react'
import './Parallax.css'
/* import myVideo from '../../assets/img/Hiking.mp4' */
export default function Video() {
    return (
        <div>
            <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/" 
            id="bgvid" 
            playsInline='playsinline' 
            autoPlay='autoplay' 
            muted='muted' 
            loop='loop'>
{/*                      <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm"/> */}
                     <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
                    {/* <source src={myVideo} type="video/mp4"/> */}
            </video>
        </div>
    )
}

