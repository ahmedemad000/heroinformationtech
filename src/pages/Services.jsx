import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: '👥',
      title: 'Professional Services & Program Delivery',
      description: 'We provide experienced project and program managers who drive complex initiatives from planning to execution. Our teams ensure transparency, governance, and on-time delivery for enterprise-scale programs.',
      capabilities: [
        {
          title: 'Enterprise Program & Project Management',
          description: 'Skilled leaders who manage scope, schedule, resources, and stakeholder alignment.',
          icon: '🎯'
        },
        {
          title: 'Flexible Staff Augmentation',
          description: 'Contract, contract-to-hire, and fully managed service teams tailored to your needs.',
          icon: '👨‍💼'
        },
        {
          title: 'Global Delivery Models',
          description: 'Support across Onsite, Offshore, Near-shore, and Dual-shore models for scalable, 24/7 operations.',
          icon: '🌍'
        }
      ],
      conclusion: 'We act as an extension of your team—providing the talent, structure, and oversight needed to deliver results at scale.',
      gradient: 'from-blue-50 via-blue-50/80 to-white',
      borderColor: 'border-blue-100',
      iconColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      mainImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      icon: '📊',
      title: 'Analytics, Data Engineering & ML Operations',
      description: 'We transform complex data into actionable intelligence. Our teams build scalable data pipelines, predictive models, and real-time insights that power smarter decisions and automated operations across enterprise environments.',
      capabilities: [
        {
          title: 'Data Extraction & Engineering',
          description: 'Clean, organize, and structure data from large-scale, distributed systems.',
          icon: '⚡'
        },
        {
          title: 'Predictive Analytics & ML Modeling',
          description: 'Build AI/ML models that forecast device and datacenter failures, optimize resources, and reduce downtime.',
          icon: '🤖'
        },
        {
          title: 'Dashboards, Reporting & Insights',
          description: 'Deliver intuitive dashboards, automated reporting, and analytics workflows that reveal trends and drive action.',
          icon: '📈'
        },
        {
          title: 'Incident Intelligence & Automation',
          description: 'Real-time monitoring, anomaly detection, automated routing, and root-cause analysis for faster resolution.',
          icon: '🚨'
        },
        {
          title: 'ML Ops & Production Deployment',
          description: 'Deploy, monitor, and optimize machine learning pipelines across cloud and hybrid environments.',
          icon: '🔧'
        }
      ],
      conclusion: 'We turn your data into a competitive advantage—fast, intelligent, and scalable.',
      gradient: 'from-purple-50 via-purple-50/80 to-white',
      borderColor: 'border-purple-100',
      iconColor: 'bg-gradient-to-br from-purple-500 to-purple-600',
      mainImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity & Cloud Solutions',
      description: 'Comprehensive security and cloud services to protect your digital assets and ensure business continuity in today\'s threat landscape.',
      capabilities: [
        {
          title: 'Cloud Security & Architecture',
          description: 'Secure cloud infrastructure design and implementation across multi-cloud environments.',
          icon: '☁️'
        },
        {
          title: 'Threat Detection & Response',
          description: 'Proactive security monitoring and incident response to protect against cyber threats.',
          icon: '🛡️'
        },
        {
          title: 'Compliance & Governance',
          description: 'Ensure regulatory compliance and implement robust security governance frameworks.',
          icon: '📋'
        }
      ],
      conclusion: 'Protecting your business while enabling secure digital transformation and growth.',
      gradient: 'from-emerald-50 via-emerald-50/80 to-white',
      borderColor: 'border-emerald-100',
      iconColor: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      mainImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm text-gray-600 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-2 animate-pulse" />
            Comprehensive Technology Solutions
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Enterprise <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Drive business growth with our comprehensive suite of technology services, designed to deliver measurable results and competitive advantage.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-3xl border ${service.borderColor} bg-gradient-to-br ${service.gradient} shadow-lg hover:shadow-2xl transition-all duration-500`}
              whileHover={{ y: -5 }}
            >
              {/* Service Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Text Content */}
                <div className="flex flex-col">
                  <motion.div 
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${service.iconColor} text-white text-3xl mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-gray-700">15+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-gray-700">Enterprise Grade</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden h-64 lg:h-80"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.mainImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </motion.div>
              </div>

              {/* Capabilities Section */}
              <div className="bg-white/50 border-t border-gray-100 p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Our Capabilities
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.capabilities.map((capability, capIndex) => (
                    <motion.div
                      key={capIndex}
                      className="group bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div 
                        className={`w-14 h-14 rounded-lg ${service.iconColor} text-white text-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        {capability.icon}
                      </motion.div>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {capability.title}
                      </h4>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Conclusion Section */}
              <motion.div 
                className={`p-8 text-center ${service.iconColor.replace('bg-gradient-to-br', 'bg-gradient-to-r')} text-white`}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-lg font-semibold max-w-3xl mx-auto">
                  {service.conclusion}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Delivery Models */}
        <motion.div
          className="mt-20 bg-white rounded-3xl border border-gray-200 shadow-lg p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{ y: -3 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global Delivery Models
            </h2>
            <p className="text-lg text-gray-600">
              Flexible engagement models to match your operational needs and strategic objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                model: 'Onsite',
                description: 'Dedicated teams working at your location',
                benefits: ['Direct collaboration', 'Cultural alignment', 'Immediate response'],
                icon: '🏢',
                color: 'bg-gradient-to-br from-blue-500 to-blue-600',
                border: 'border-blue-100'
              },
              {
                model: 'Offshore',
                description: 'Cost-effective teams in global delivery centers',
                benefits: ['Cost efficiency', '24/7 operations', 'Scalable resources'],
                icon: '🌐',
                color: 'bg-gradient-to-br from-purple-500 to-purple-600',
                border: 'border-purple-100'
              },
              {
                model: 'Near-shore',
                description: 'Regional teams with overlapping timezones',
                benefits: ['Time zone alignment', 'Cultural proximity', 'Cost optimization'],
                icon: '📍',
                color: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
                border: 'border-emerald-100'
              },
              {
                model: 'Dual-shore',
                description: 'Hybrid model combining onsite and offshore benefits',
                benefits: ['Best of both worlds', 'Flexible scaling', 'Risk mitigation'],
                icon: '🔄',
                color: 'bg-gradient-to-br from-orange-500 to-orange-600',
                border: 'border-orange-100'
              }
            ].map((delivery, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl border ${delivery.border} p-6 shadow-sm hover:shadow-xl transition-all duration-300`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`w-16 h-16 ${delivery.color} rounded-xl flex items-center justify-center text-white text-2xl mb-6 mx-auto`}>
                  {delivery.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{delivery.model}</h3>
                
                <p className="text-gray-600 text-sm text-center mb-4">{delivery.description}</p>
                
                <div className="space-y-2">
                  {delivery.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 p-12 text-white shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-32 translate-y-32" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how our expertise can drive your success and deliver measurable results.
              </p>
              
              <motion.a
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  px-10 py-4
                  bg-white
                  text-gray-900
                  font-bold text-lg
                  rounded-full
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-105
                  transition-all
                  duration-300
                  group
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Your Project</span>
                <motion.svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.a>
              
              <p className="mt-6 text-sm opacity-80">
                Schedule a consultation with our experts • Response within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services