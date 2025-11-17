import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ContactPreview = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80")'
        }}
      />
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-neutral-gray mb-8">
            Let's discuss how our expertise in professional services, data analytics, 
            and global delivery can drive your success.
          </p>
          
          {/* Contact Info Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: '📧',
                title: 'Email Us',
                detail: 'info@heroinformationtech.com',
                bgImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                icon: '📞',
                title: 'Call Us',
                detail: '+1 (555) 123-4567',
                bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                icon: '📍',
                title: 'Visit Us',
                detail: 'Amman, Jordan',
                bgImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              }
            ].map((contact, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-soft group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div 
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${contact.bgImage})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center p-4">
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">{contact.icon}</div>
                    <h3 className="font-semibold mb-1">{contact.title}</h3>
                    <p className="text-sm opacity-90">{contact.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Contact Us Today
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactPreview