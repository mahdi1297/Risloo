'use client'

import { useEffect, useMemo, useState } from 'react'

type DeviceType = 'IS_MOBILE' | 'IS_DESKTOP'

export const IS_MOBILE = 'IS_MOBILE'
export const IS_DESKTOP = 'IS_DESKTOP'

export const deviceTypes = {
  IS_MOBILE,
  IS_DESKTOP,
} as const

export const useDeviceType = (WINDOW_BREAKPOINT: number = 800): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < WINDOW_BREAKPOINT ? IS_MOBILE : IS_DESKTOP
    }

    return IS_DESKTOP
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setDeviceType(window.innerWidth < WINDOW_BREAKPOINT ? IS_MOBILE : IS_DESKTOP)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [WINDOW_BREAKPOINT])

  return useMemo(() => deviceType, [deviceType])
}
