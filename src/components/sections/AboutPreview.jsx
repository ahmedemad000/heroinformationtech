import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const AboutPreview = () => {
  const stats = [
    { number: "15+", label: "Years Experience", delay: 0.1 },
    { number: "200+", label: "Projects Delivered", delay: 0.2 },
    { number: "50+", label: "Expert Team", delay: 0.3 },
    { number: "99%", label: "Client Satisfaction", delay: 0.4 }
  ]

  const values = [
    { icon: "🚀", title: "Innovation", description: "Pushing boundaries with cutting-edge solutions" },
    { icon: "🤝", title: "Partnership", description: "Collaborating for mutual success" },
    { icon: "⭐", title: "Excellence", description: "Delivering quality in every project" },
    { icon: "🌍", title: "Global Mindset", description: "Serving clients worldwide" }
  ]

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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  }

  const valueCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.5 + i * 0.1,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8">
              
               
              

              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-cyan-300 dark:to-purple-400 bg-clip-text text-transparent mb-6 leading-tight"
                variants={itemVariants}
              >
                Pioneering Digital{' '}
                <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
                  Transformation
                </span>
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We are a premier technology consulting firm with over <span className="font-semibold text-cyan-600 dark:text-cyan-400">15 years of experience</span> in driving digital transformation for businesses worldwide. Our journey began with a simple vision: to make advanced technology accessible and impactful for every organization.
              </p>
            </motion.div>

            {/* Values Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={valueCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 dark:border-gray-700 group cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="text-2xl group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      {value.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">
                        {value.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <Link 
                to="/about" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-3xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center space-x-3 group"
              >
                <span>Our Story & Mission</span>
                <motion.span
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </motion.span>
              </Link>
              
            
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative"
          >
            {/* Main Image Container */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
              variants={itemVariants}
            >
              {/* Main Image */}
              <motion.div 
                className="w-full h-96 bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Hover Content */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                  initial={{ opacity: 0, y: 20 }}
                >
                  <h3 className="text-xl font-bold mb-2">Our Global Team</h3>
                  <p className="text-white/90 text-sm">Collaborating across time zones to deliver excellence</p>
                </motion.div>
              </motion.div>

              {/* Accent Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </motion.div>

       
           

            {/* Decorative Element */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl opacity-10 -z-10"
              animate={{
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview