import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const AboutPreview = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              About HERO InfoTech
            </h2>
            <p className="text-lg text-neutral-gray mb-6">
              We are a premier technology consulting firm with over 15 years of experience 
              in driving digital transformation for businesses worldwide.
            </p>
            <p className="text-lg text-neutral-gray mb-8">
              Our team of experts combines deep industry knowledge with cutting-edge 
              technology to deliver solutions that drive growth and innovation.
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main About Image */}
            <motion.div 
              className="w-full h-96 bg-cover bg-center rounded-3xl shadow-soft border border-gray-200 overflow-hidden"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            {/* Floating Stats Card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                <div className="text-neutral-gray text-sm">Years Experience</div>
              </div>
            </motion.div>
            
            {/* Floating Team Card */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-gradient rounded-2xl shadow-lg p-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-white/90 text-sm">Expert Team</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview