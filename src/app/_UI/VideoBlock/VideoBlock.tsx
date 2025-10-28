"use client"

import { useMediaQuery } from '@/hooks/MediaQuery/useMediaQuery';
import { useState, useEffect } from 'react'

export default function VideoBlock() {

  const [hasWindow, setHasWindow] = useState(false);

  const isMobile = useMediaQuery("(max-width: 767px)") as boolean

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true)
    }
  }, []);

  return (
    <>
      {hasWindow && 
        <div className='video-block'>
            <video
              className="video-block__video"
              controls={false}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={isMobile ? "/img/Section-1/video-fon-fallback_mob 1.jpg" : "/img/Section-1/video-fon-fallback_screen 1.jpg"}
            >
              <source src="/img/Section-1/video-fon.webm" type="video/webm" />
            </video>
        </div> 
      }
    </>
  )  
}  

