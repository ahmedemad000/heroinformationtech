import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We deliver exceptional quality in every project, exceeding client expectations through meticulous attention to detail and unwavering commitment to standards.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to drive progress, constantly pushing boundaries to deliver transformative results.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, transparency, and mutual success, treating every client as a strategic partner.'
    },
    {
      icon: '🌍',
      title: 'Global Mindset',
      description: 'We leverage diverse perspectives and global best practices to deliver optimal solutions that transcend geographical boundaries.'
    }
  ];

  const team = [
    {
      name: 'Ahmed Al-Mansour',
      role: 'CEO & Founder',
      description: '15+ years in digital transformation and enterprise technology. Former technology director at Fortune 500 companies.',
      expertise: ['Digital Transformation', 'Enterprise Architecture', 'Strategic Planning']
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      description: 'Expert in cloud architecture and scalable system design. Led engineering teams at top tech firms.',
      expertise: ['Cloud Architecture', 'System Design', 'AI/ML']
    },
    {
      name: 'Michael Chen',
      role: 'Head of Delivery',
      description: 'Specialized in global project management and team leadership with 12+ years of delivery excellence.',
      expertise: ['Project Management', 'Team Leadership', 'Agile Methodologies']
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', suffix: '' },
    { number: '200', label: 'Projects Delivered', suffix: '+' },
    { number: '50', label: 'Expert Team', suffix: '+' },
    { number: '99', label: 'Client Satisfaction', suffix: '%' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Pioneering <span className="text-blue-600">Digital Transformation</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              We are a premier technology consulting firm dedicated to driving digital innovation 
              and delivering cutting-edge solutions that empower businesses to thrive in the digital age.
            </motion.p>
          </motion.div>

         
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl border border-blue-100"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                🎯
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                enhance efficiency, and create sustainable competitive advantages in an ever-evolving digital landscape.
                We believe in transforming challenges into opportunities through strategic thinking and technical excellence.
              </p>
            </motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-purple-100"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="absolute top-6 right-6 w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                🔭
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most trusted technology partner for businesses worldwide, 
                recognized for our excellence in delivery, innovation, and client success.
                We envision a future where technology seamlessly enables human potential and business growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our decisions, shape our culture, and drive our success.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of satisfied clients who have achieved remarkable results with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;