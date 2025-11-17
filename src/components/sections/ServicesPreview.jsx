import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServicesPreview = () => {
  const services = [
    {
      icon: '👥',
      title: 'Professional Services',
      description: 'Enterprise program management and global delivery models with experienced project leaders.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: '📊',
      title: 'Analytics & Data Engineering',
      description: 'Transform complex data into actionable intelligence with scalable AI/ML solutions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity & Cloud',
      description: 'Comprehensive security and cloud solutions to protect your digital assets.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Our Services
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
            Enterprise-grade technology solutions for modern business challenges
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl shadow-soft hover-lift bg-white border border-gray-100"
              whileHover={{ y: -5 }}
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <motion.div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              
              {/* Content Overlay */}
              <div className="p-6">
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-3">{service.title}</h3>
                <p className="text-neutral-gray mb-4">{service.description}</p>
                
                {/* Hover Learn More */}
                <motion.div 
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -20 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-primary-blue font-semibold flex items-center">
                    Learn More 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/services" className="btn btn-primary">
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview