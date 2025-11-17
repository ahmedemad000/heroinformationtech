import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "James Wilson",
      position: "CTO, Global Financial Services",
      content: "HERO InfoTech delivered an exceptional digital transformation project. Their team's expertise in cloud migration and data engineering helped us achieve 65% faster processing times and 40% cost reduction.",
      avatar: "👨‍💼",
      rating: 5,
      industry: "Finance",
      results: ["65% Faster Processing", "40% Cost Reduction", "99.9% Uptime"]
    },
    {
      name: "Dr. Maria Garcia",
      position: "Head of Technology, Healthcare Innovations", 
      content: "The AI-powered analytics platform revolutionized our patient care services. Their understanding of healthcare compliance and data security helped us improve diagnostic accuracy by 45% while maintaining HIPAA compliance.",
      avatar: "👩‍⚕️",
      rating: 5,
      industry: "Healthcare",
      results: ["45% Accuracy Improvement", "HIPAA Compliant", "Real-time Analytics"]
    },
    {
      name: "Robert Taylor",
      position: "E-commerce Director, Retail Giant Corp",
      content: "Outstanding work on our e-commerce platform modernization. The new React-based system handles 3x more traffic with 50% better performance, resulting in a 35% increase in conversion rates during peak seasons.",
      avatar: "👨‍💻",
      rating: 5,
      industry: "Retail",
      results: ["3x Traffic Capacity", "50% Performance Boost", "35% Conversion Increase"]
    },
    {
      name: "Sarah Chen",
      position: "Operations Director, Manufacturing Leaders Ltd",
      content: "HERO's supply chain optimization solution saved us millions in operational costs. Their AI-driven predictive maintenance reduced equipment downtime by 70% and improved overall efficiency by 55%.",
      avatar: "👩‍🏭",
      rating: 5,
      industry: "Manufacturing",
      results: ["70% Less Downtime", "55% Efficiency Gain", "Millions Saved"]
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  }

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient dark:text-gradient-purple mb-6"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-neutral-gray dark:text-gray-300 max-w-2xl mx-auto"
          >
            Discover how we've helped businesses across industries achieve remarkable results through innovative technology solutions.
          </motion.p>
        </motion.div>

        <div 
          className="max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Client Info & Avatar */}
                  <div className="bg-gradient dark:bg-gradient-purple p-8 lg:p-12 text-white flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
                    <motion.div 
                      className="text-8xl mb-6"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      {testimonials[currentIndex].avatar}
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {testimonials[currentIndex].name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-blue-100 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {testimonials[currentIndex].position}
                    </motion.p>
                    
                    <motion.div 
                      className="flex space-x-1 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-300 text-xl">★</span>
                      ))}
                    </motion.div>

                    {/* Industry Badge */}
                    <motion.div 
                      className="bg-white/20 rounded-full px-4 py-2 text-sm font-semibold"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {testimonials[currentIndex].industry} Industry
                    </motion.div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="col-span-2 p-8 lg:p-12">
                    <motion.blockquote 
                      className="text-2xl md:text-3xl leading-relaxed text-neutral-dark dark:text-white mb-8 font-light"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      "{testimonials[currentIndex].content}"
                    </motion.blockquote>

                    {/* Results Metrics */}
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {testimonials[currentIndex].results.map((result, index) => (
                        <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <div className="text-primary-blue dark:text-purple-400 font-bold text-lg">
                            {result}
                          </div>
                        </div>
                      ))}
                    </motion.div>

                    {/* Progress Dots */}
                    <div className="flex justify-center space-x-3">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex
                              ? 'bg-gradient w-8 dark:bg-gradient-purple'
                              : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-2xl">←</span>
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-2xl">→</span>
            </motion.button>
          </div>

          {/* Client Logos Carousel */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-center text-lg text-neutral-gray dark:text-gray-400 mb-8 font-semibold">
              Trusted by innovative companies worldwide
            </h3>
            <div className="flex overflow-hidden space-x-12 py-4">
              {["TechCorp", "InnovateLabs", "DataSystems", "CloudFirst", "AI Solutions", "Digital Partners"].map((logo, index) => (
                <motion.div
                  key={logo}
                  className="flex-shrink-0 bg-white dark:bg-gray-700 rounded-xl px-8 py-4 shadow-md border border-gray-100 dark:border-gray-600"
                  animate={{
                    x: [0, -1200]
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    }
                  }}
                >
                  <span className="text-lg font-semibold text-neutral-dark dark:text-white">{logo}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials