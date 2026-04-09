// src/hooks/useIsOpen.js
import { useState, useEffect } from 'react'
import { businessHours } from '../data/menu.js'

export function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function check() {
      const now = new Date()
      const day = now.getDay()
      const hour = now.getHours()
      const minute = now.getMinutes()

      const closedToday = businessHours.closedDays.includes(day)
      const afterOpen =
        hour > businessHours.open.hour ||
        (hour === businessHours.open.hour && minute >= businessHours.open.minute)
      const beforeClose =
        hour < businessHours.close.hour ||
        (hour === businessHours.close.hour && minute < businessHours.close.minute)

      setIsOpen(!closedToday && afterOpen && beforeClose)
    }

    check()
    const interval = setInterval(check, 60_000) // re-check every minute
    return () => clearInterval(interval)
  }, [])

  return isOpen
}
