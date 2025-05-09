"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedListProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right"
  once?: boolean
}

export default function AnimatedList({
  children,
  className = "",
  staggerDelay = 0.1,
  direction = "up",
  once = true,
}: AnimatedListProps) {
  // Define animation variants based on direction
  const getDirectionOffset = () => {
    switch (direction) {
      case "up": return { y: 40, opacity: 0 }
      case "down": return { y: -40, opacity: 0 }
      case "left": return { x: 40, opacity: 0 }
      case "right": return { x: -40, opacity: 0 }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: getDirectionOffset(),
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={containerVariants}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
