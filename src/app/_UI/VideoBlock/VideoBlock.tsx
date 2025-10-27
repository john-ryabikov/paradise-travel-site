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
            <ReactPlayer
              url={"/img/Section-1/video-fon.mp4"}
              style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
              playing
              loop
              preload
            />
        </div> 
      }
    </>
  )  
}  

