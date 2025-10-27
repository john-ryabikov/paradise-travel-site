"use client"

import { useMediaQuery } from '@/hooks/MediaQuery/useMediaQuery';
import { useState, useEffect } from 'react'

import ReactPlayer from "react-player"

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
            {!isMobile && (
              <ReactPlayer
                url={"/img/Section-1/video-fon.webm"}
                width="100%"
                height="100%"
                style={{ width: '100%', height: '100%' }}
                playing
                playsInline
                loop
                muted
                config={{
                file: {
                  attributes: {
                    style: {
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      minWidth: '100%',
                      minHeight: '100%',
                      objectFit: 'cover'
                    }
                  }
                }
               }}
              />
            )}
        </div> 
      }
    </>
  )  
}  

