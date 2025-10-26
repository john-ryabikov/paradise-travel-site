'use client'

import { useState, useEffect } from 'react'

export const useScrollHeader = (scrollThreshold: number = 50) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll);
    
    // Вызываем сразу для начального состояния
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollThreshold])

  return isScrolled
}