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
      cardClass: 'card-professional',
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
      cardClass: 'card-analytics',
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
      cardClass: 'card-cybersecurity',
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
    <div className="pt-32 section-padding bg-section-light dark:bg-gray-900">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gradient dark:text-gradient-purple mb-6">
            Our Services
          </h1>
          <p className="text-xl text-neutral-gray dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward with enterprise-grade expertise.
          </p>
        </motion.div>

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
              className={`card ${service.cardClass} hover-lift dark:bg-gray-800 dark:border-gray-700`}
            >
              {/* Service Header with Image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-center">
                <div className="text-center lg:text-left">
                  <motion.div
                    className="text-6xl mb-4 inline-block"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient dark:text-gradient-purple mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-neutral-gray dark:text-gray-300">
                    {service.description}
                  </p>
                </div>

                {/* Service Main Image */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-soft h-64 lg:h-80"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.mainImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </div>

              {/* Capabilities Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-neutral-dark dark:text-white mb-6 text-center">Our Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.capabilities.map((capability, capIndex) => (
                    <motion.div
                      key={capIndex}
                      className="group text-center p-6 rounded-xl shadow-soft hover-lift bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {/* Capability Icon */}
                      <motion.div
                        className="text-4xl mb-4 inline-block"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {capability.icon}
                      </motion.div>

                      {/* Content */}
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-dark dark:text-white mb-3">
                          {capability.title}
                        </h4>
                        <p className="text-neutral-gray dark:text-gray-300 text-sm leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Service Conclusion */}
              <motion.div
                className="bg-gradient dark:bg-gradient-purple rounded-2xl p-6 text-white text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-lg font-semibold">
                  {service.conclusion}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Delivery Models Detail */}
        <motion.div
          className="card mt-16 hover-lift dark:bg-gray-800 dark:border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-neutral-dark dark:text-white mb-8 text-center">Global Delivery Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                model: 'Onsite',
                description: 'Dedicated teams working at your location',
                benefits: ['Direct collaboration', 'Cultural alignment', 'Immediate response'],
                color: 'border-primary-blue',
                icon: '🏢'
              },
              {
                model: 'Offshore',
                description: 'Cost-effective teams in global delivery centers',
                benefits: ['Cost efficiency', '24/7 operations', 'Scalable resources'],
                color: 'border-accent-teal',
                icon: '🌐'
              },
              {
                model: 'Near-shore',
                description: 'Regional teams with overlapping timezones',
                benefits: ['Time zone alignment', 'Cultural proximity', 'Cost optimization'],
                color: 'border-accent-purple',
                icon: '📍'
              },
              {
                model: 'Dual-shore',
                description: 'Hybrid model combining onsite and offshore benefits',
                benefits: ['Best of both worlds', 'Flexible scaling', 'Risk mitigation'],
                color: 'border-accent-orange',
                icon: '🔄'
              }
            ].map((delivery, index) => (
              <motion.div
                key={index}
                className={`group text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-soft border-t-4 ${delivery.color} border border-gray-100 dark:border-gray-600 hover-lift`}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Delivery Model Icon */}
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {delivery.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-3">{delivery.model}</h3>
                <p className="text-neutral-gray dark:text-gray-300 mb-4 text-sm">{delivery.description}</p>
                <ul className="space-y-2 text-sm text-neutral-gray dark:text-gray-300">
                  {delivery.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>• {benefit}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-gradient dark:bg-gradient-purple rounded-3xl p-12 text-white hover-glow relative overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
              }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 opacity-90">Let's discuss how our expertise can drive your success.</p>
              <a
                href="/contact"
                className="
    inline-flex items-center justify-center 
    px-8 py-4 
    bg-white 
    text-transparent bg-clip-text 
    bg-gradient-to-r from-primary-blue to-accent-teal 
    dark:from-purple-400 dark:to-pink-400 
    font-bold text-lg 
    rounded-full 
    shadow-lg 
    hover:scale-105 
    hover:shadow-xl 
    transition-all 
    duration-300
    border-2 border-transparent
    hover:border-primary-blue/20
  "
              >
                Start Your Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services