import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1
      }
    },
    end: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const dotVariants = {
    start: {
      y: "0%",
      scale: 1
    },
    end: {
      y: "100%",
      scale: 1.2
    }
  }

  const dotTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            duration: 1 
          }}
        >
          <div className="w-20 h-20 bg-gradient rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">H</span>
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.h2 
          className="text-3xl font-bold text-gradient mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          HERO InfoTech
        </motion.h2>

        {/* Animated Dots */}
        <motion.div
          className="flex justify-center space-x-3 mb-8"
          variants={containerVariants}
          initial="start"
          animate="end"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-4 h-4 bg-gradient rounded-full"
              variants={dotVariants}
              transition={{
                ...dotTransition,
                delay: index * 0.1
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-neutral-gray text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Preparing your experience
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          className="mt-6 w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.div
            className="h-full bg-gradient rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </motion.div>

        {/* Subtle Message */}
        <motion.p
          className="text-neutral-gray text-sm mt-8 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Transforming businesses through technology
        </motion.p>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient rounded-full blur-2xl"></div>
      </div>
    </div>
  )
}

export default Loading