import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StatsCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })
  const countRef = useRef(0)

  useEffect(() => {
    if (inView) {
      let startTime
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        
        countRef.current = Math.floor(progress * end)
        setCount(countRef.current)
        
        if (progress < 1) {
          requestAnimationFrame(animateCount)
        }
      }
      
      requestAnimationFrame(animateCount)
    }
  }, [inView, end, duration])

  return (
    <motion.span ref={ref} className="font-bold">
      {count}{suffix}
    </motion.span>
  )
}

export default StatsCounter