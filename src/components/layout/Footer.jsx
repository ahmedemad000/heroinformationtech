import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-xl font-bold text-gradient dark:text-gradient-purple">
                  HERO InfoTech
                </span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                Transforming businesses through innovative technology solutions, 
                professional services, and global delivery excellence.
              </p>
              
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-gradient dark:hover:text-gradient-purple transition-colors">
                  Services
                </Link>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gradient dark:hover:text-gradient-purple transition-colors">
                  About Us
                </Link>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gradient dark:hover:text-gradient-purple transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
              <div className="flex flex-col space-y-2 text-gray-600 dark:text-gray-400">
                <p>Amman, Jordan</p>
                <p>Khaled@heroinformationtech.com</p>
                <p>+90 552 6220200</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2024 HERO Information Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-500 dark:text-gray-400 text-sm hover:text-gradient dark:hover:text-gradient-purple cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm hover:text-gradient dark:hover:text-gradient-purple cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer