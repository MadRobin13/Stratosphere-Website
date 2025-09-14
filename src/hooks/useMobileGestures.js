import { useEffect } from 'react'

export default function useMobileGestures({ onSwipeDown, onSwipeUp, onSwipeLeft, onSwipeRight }) {
  useEffect(() => {
    let startY = 0
    let startX = 0
    let startTime = 0
    const minSwipeDistance = 50
    const maxSwipeTime = 500

    const handleTouchStart = (e) => {
      const touch = e.touches[0]
      startY = touch.clientY
      startX = touch.clientX
      startTime = Date.now()
    }

    const handleTouchEnd = (e) => {
      if (!startY || !startX) return

      const touch = e.changedTouches[0]
      const endY = touch.clientY
      const endX = touch.clientX
      const endTime = Date.now()

      const deltaY = endY - startY
      const deltaX = endX - startX
      const deltaTime = endTime - startTime

      // Check if swipe was fast enough and far enough
      if (deltaTime > maxSwipeTime) return

      const absDeltaY = Math.abs(deltaY)
      const absDeltaX = Math.abs(deltaX)

      // Vertical swipes
      if (absDeltaY > absDeltaX && absDeltaY > minSwipeDistance) {
        if (deltaY < 0 && onSwipeUp) {
          onSwipeUp()
        } else if (deltaY > 0 && onSwipeDown) {
          onSwipeDown()
        }
      }
      // Horizontal swipes
      else if (absDeltaX > absDeltaY && absDeltaX > minSwipeDistance) {
        if (deltaX < 0 && onSwipeLeft) {
          onSwipeLeft()
        } else if (deltaX > 0 && onSwipeRight) {
          onSwipeRight()
        }
      }

      // Reset
      startY = 0
      startX = 0
      startTime = 0
    }

    // Only add touch listeners on mobile devices
    if ('ontouchstart' in window) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true })
      document.addEventListener('touchend', handleTouchEnd, { passive: true })
    }

    return () => {
      if ('ontouchstart' in window) {
        document.removeEventListener('touchstart', handleTouchStart)
        document.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [onSwipeDown, onSwipeUp, onSwipeLeft, onSwipeRight])
}