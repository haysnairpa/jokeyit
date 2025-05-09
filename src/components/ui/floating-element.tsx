"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  distance?: number
  delay?: number
  type?: "float" | "pulse" | "spin" | "bounce"
}

export default function FloatingElement({
  children,
  className = "",
  duration = 3,
  distance = 10,
  delay = 0,
  type = "float",
}: FloatingElementProps) {
  // Define animation variants based on type
  const getAnimationProps = () => {
    switch (type) {
      case "float":
        return {
          animate: { y: [0, -distance, 0] },
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          },
        }
      case "pulse":
        return {
          animate: { scale: [1, 1.05, 1] },
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          },
        }
      case "spin":
        return {
          animate: { rotate: 360 },
          transition: {
            duration,
            repeat: Infinity,
            ease: "linear",
            delay,
          },
        }
      case "bounce":
        return {
          animate: { y: [0, -distance, 0] },
          transition: {
            duration: duration / 2,
            repeat: Infinity,
            ease: "easeOut",
            repeatType: "reverse" as const, // Type assertion to fix the error
            delay,
          },
        }
      default:
        return {
          animate: { y: [0, -distance, 0] },
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          },
        }
    }
  }

  const { animate, transition } = getAnimationProps()

  return (
    <motion.div
      className={className}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
