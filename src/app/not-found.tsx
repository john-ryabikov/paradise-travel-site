'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NotFound() {

  const pathname = usePathname()
  const router = useRouter()
  const [isValidRoute, setIsValidRoute] = useState(true)

  useEffect(() => {
    
    const checkRoute = async () => {
      try {
        const knownRoutes = await getKnownRoutes()
        const currentPath = pathname || window.location.pathname
        
        if (!knownRoutes.includes(currentPath) && currentPath !== '/404') {
          setIsValidRoute(false)
        }
      } catch (error) {
        setIsValidRoute(false)
      }
    }
    
    checkRoute()
  }, [pathname])

  if (isValidRoute && pathname !== '/404') {
    return null
  }
  
  return (
    <div>
      <h1>Страница не найдена!</h1>
      <p>Не удалось найти запрошенный ресурс</p>
    </div>
  )
}

async function getKnownRoutes(): Promise<string[]> {
  return [
    '/',
    '/404'
  ]
}
