import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ParticleBackground from '../animations/ParticleBackground'

const Hero = () => {
  const stats = [
    { number: '50+', label: 'Projects', color: 'text-primary-blue' },
    { number: '15+', label: 'Years Experience', color: 'text-accent-teal' },
    { number: '100%', label: 'Satisfaction', color: 'text-accent-purple' }
  ]

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      <ParticleBackground />

      {/* Background Cover Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")'
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Digital</span>
              <br />
              <span className="text-white">Transformation</span>
              <br />
              <span className="text-white">Partners</span>
            </h1>

            <motion.p
              className="text-xl text-white mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              We help businesses achieve remarkable results through innovative
              technology solutions, professional services, and global delivery excellence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link to="/services" className="btn btn-primary group">
                <span>Explore Services</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Started
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Professional Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Main Image Container */}
              <motion.div
                className="w-full h-96 bg-cover bg-center rounded-3xl shadow-soft overflow-hidden border border-gray-200"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              {/* Overlay Content */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl flex items-end p-8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Enterprise Solutions</h3>
                  <p className="text-gray-200">Driving innovation across industries</p>
                </div>
              </motion.div>

              {/* Floating Tech Badges */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-2xl">💻</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient rounded-xl shadow-lg p-4 text-white"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-2xl">🚀</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero