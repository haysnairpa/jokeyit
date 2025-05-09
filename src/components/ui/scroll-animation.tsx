"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { motion, useAnimation, Variants } from "framer-motion"
import { useInView } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate"
  duration?: number
  distance?: number
  threshold?: number
  once?: boolean
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  distance = 50,
  threshold = 0.1,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const controls = useAnimation()

  // Define animation variants based on direction
  const getVariants = (): Variants => {
    // Initial states based on direction
    let initial = {}
    
    switch (direction) {
      case "up":
        initial = { y: distance, opacity: 0 }
        break
      case "down":
        initial = { y: -distance, opacity: 0 }
        break
      case "left":
        initial = { x: -distance, opacity: 0 }
        break
      case "right":
        initial = { x: distance, opacity: 0 }
        break
      case "scale":
        initial = { scale: 0.8, opacity: 0 }
        break
      case "rotate":
        initial = { rotate: -10, opacity: 0 }
        break
      default:
        initial = { y: distance, opacity: 0 }
    }

    return {
      hidden: initial,
      visible: {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: {
          type: "spring",
          damping: 15,
          stiffness: 100,
          duration,
          delay,
        },
      },
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, isInView, once])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  )
}
