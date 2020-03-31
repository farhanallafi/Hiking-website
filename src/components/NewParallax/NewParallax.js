
import React,{useEffect} from 'react'
import './Parallax.css'
import CountUp from 'react-countup'
/* import myVideo from '../../assets/img/Hiking.mp4' */
export default function Video() {

    return (<>
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
        <div className="counter-container"> 
            <div className="counter" >
                <h4 className="hikers" > Hikers  </h4>
                
                <p> <CountUp className="hikers" end={1218} duration={5}/> person</p>
            </div>
            <div className="counter" >
                <h4 className="distance"> Distance  </h4>
                <p> <CountUp className="distance" end={600} duration={5}/> km </p>
            </div>
            <div className="counter" >
                <h4 className="hike"> Hikes   </h4>
                <p> <CountUp className="hike" end={12} duration={10}/> hike </p>
                
            </div>
        </div>
</>
    )
}

