import React from 'react'

export default function VideoSection() {
    return (
        <div className='header'>
     
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
                </video>
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                        {/* <h1 class="display-3">Video Header</h1> */}
                        {/* <p class="lead mb-0">forwards team europe</p> */}
                    </div>
                    </div>
                </div>
        </div>
    )
}
