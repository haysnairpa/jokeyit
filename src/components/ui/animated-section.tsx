"use client"

import { ReactNode } from "react"
import { motion, Variants } from "framer-motion"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  type?: "tween" | "spring" | "fade"
  once?: boolean
  duration?: number
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  type = "tween",
  once = true,
  duration = 0.5,
}: AnimatedSectionProps) {
  // Define animation variants based on direction
  const getVariants = (): Variants => {
    // Initial states based on direction
    const initialStates = {
      up: { y: 50, opacity: 0 },
      down: { y: -50, opacity: 0 },
      left: { x: 50, opacity: 0 },
      right: { x: -50, opacity: 0 },
    }

    // Animation types
    const animationTypes = {
      tween: { type: "tween", duration },
      spring: { type: "spring", stiffness: 100, damping: 15 },
      fade: { type: "tween", duration },
    }

    return {
      hidden: initialStates[direction],
      visible: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          ...animationTypes[type],
          delay,
        },
      },
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  )
}
