import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ContactPreview = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      detail: 'Khaled@heroinformationtech.com',
      description: 'Get a response within 2 hours',
      bgImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      gradient: 'from-blue-500 to-cyan-500',
      hoverGradient: 'from-blue-400 to-cyan-400',
      delay: 0.1
    },
    {
      icon: '📞',
      title: 'Call Us',
      detail: '+90 552 6220200',
      description: 'Mon-Fri, 9AM-6PM EST',
      bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      gradient: 'from-purple-500 to-pink-500',
      hoverGradient: 'from-purple-400 to-pink-400',
      delay: 0.2
    },
    {
      icon: '📍',
      title: 'Visit Us',
      detail: 'Amman, Jordan',
      description: 'Schedule an office visit',
      bgImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      gradient: 'from-emerald-500 to-teal-500',
      hoverGradient: 'from-emerald-400 to-teal-400',
      delay: 0.3
    }
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.div
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm text-gray-600 text-sm mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-2 animate-pulse" />
              Let's Start Your Project Today
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Ready to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Transform
              </span>{' '}
              Your Business?
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our expertise in professional services, data analytics,
              AI solutions, and global delivery can drive your digital transformation success.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {contactMethods.map((contact, index) => (
              <motion.div
                key={index}
                custom={contact.delay}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="group"
              >
                {/* Contact Card */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">

                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${contact.bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon Badge */}
                    <motion.div
                      className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-md flex items-center justify-center text-xl border border-gray-100"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {contact.icon}
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {contact.title}
                    </h3>

                    <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                      {contact.detail}
                    </p>

                    <p className="text-gray-600 text-sm mb-6">
                      {contact.description}
                    </p>

                    {/* Action Button */}
                    <motion.div
                      className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span>Contact Now</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Gradient Border Bottom */}
                  <div className={`h-1 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            

            {/* Main CTA */}
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Join hundreds of satisfied clients who have transformed their businesses with our cutting-edge solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="
                  group relative px-10 py-5 
                  bg-gradient-to-r from-blue-600 to-cyan-500 
                  text-white font-semibold 
                  rounded-xl 
                  hover:shadow-xl hover:shadow-blue-500/25 
                  transition-all duration-300 
                  flex items-center space-x-3
                  overflow-hidden
                "
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />

                <span className="relative z-10 flex items-center">
                  <span className="text-lg">Start Your Project</span>
                  <motion.svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </Link>

              <Link
                to="/services"
                className="
                  group px-8 py-5 
                  bg-white text-gray-800 font-semibold 
                  rounded-xl 
                  border-2 border-gray-200 
                  hover:border-blue-300 hover:bg-gray-50
                  hover:shadow-lg 
                  transition-all duration-300
                  flex items-center space-x-2
                "
              >
                <span>Explore Services</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
            </motion.div>


          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactPreview