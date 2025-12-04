import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServicesPreview = () => {
  const services = [
    {
      icon: '👥',
      title: 'Professional Services & Program Delivery',
      description: 'We provide experienced project and program managers who drive complex initiatives from planning to execution. Our teams ensure transparency, governance, and on-time delivery for enterprise-scale programs.',
      capabilities: [
        'Enterprise Program & Project Management',
        'Flexible Staff Augmentation',
        'Global Delivery Models'
      ],
      conclusion: 'We act as an extension of your team—providing the talent, structure, and oversight needed to deliver results at scale.',
      gradient: 'from-blue-500 to-cyan-500',
      border: 'border-blue-100',
      bg: 'bg-gradient-to-br from-blue-50 via-blue-50/80 to-white',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      delay: 0.1
    },
    {
      icon: '📊',
      title: 'Analytics, Data Engineering & ML Operations',
      description: 'We transform complex data into actionable intelligence. Our teams build scalable data pipelines, predictive models, and real-time insights that power smarter decisions and automated operations across enterprise environments.',
      capabilities: [
        'Data Extraction & Engineering',
        'Predictive Analytics & ML Modeling',
        'Dashboards, Reporting & Insights',
        'Incident Intelligence & Automation',
        'ML Ops & Production Deployment'
      ],
      conclusion: 'We turn your data into a competitive advantage—fast, intelligent, and scalable.',
      gradient: 'from-purple-500 to-purple-600',
      border: 'border-purple-100',
      bg: 'bg-gradient-to-br from-purple-50 via-purple-50/80 to-white',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      delay: 0.2
    },
    {
      icon: '🔒',
      title: 'Cybersecurity & Cloud Solutions',
      description: 'Comprehensive security and cloud services to protect your digital assets and ensure business continuity in today\'s threat landscape.',
      capabilities: [
        'Cloud Security & Architecture',
        'Threat Detection & Response',
        'Compliance & Governance',
        'Infrastructure Management'
      ],
      conclusion: 'Protecting your business while enabling secure digital transformation and growth.',
      gradient: 'from-emerald-500 to-teal-500',
      border: 'border-emerald-100',
      bg: 'bg-gradient-to-br from-emerald-50 via-emerald-50/80 to-white',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
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
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
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
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm text-gray-600 text-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-2 animate-pulse" />
            Enterprise Technology Solutions
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            End-to-end technology solutions designed to drive innovation, enhance efficiency, and accelerate your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={service.delay}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="group"
            >
              {/* Service Card */}
              <div className={`relative overflow-hidden rounded-2xl border ${service.border} ${service.bg} shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col`}>
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  
                  {/* Icon Badge */}
                  <motion.div
                    className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center text-2xl border border-gray-100"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-3 mb-6">
                    {service.capabilities.map((capability, capIndex) => (
                      <motion.div
                        key={capIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: service.delay + (capIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mr-3" />
                        <span className="text-sm text-gray-700">{capability}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Section */}
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        Learn More
                      </span>
                      <motion.div
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Gradient Border Bottom */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
         

          {/* Main CTA */}
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to transform your business with cutting-edge technology solutions?
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
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
                <span className="text-lg">Explore All Services</span>
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
              to="/contact"
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
              <span>Get Custom Quote</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

         
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview