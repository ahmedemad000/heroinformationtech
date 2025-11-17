import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      detail: 'info@heroinformationtech.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      description: 'Mon to Fri, 9am to 6pm'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      detail: 'Amman, Jordan',
      description: 'Headquarters location'
    }
  ]

  return (
    <div className="pt-32 section-padding">
      <div className="container">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your digital transformation journey? Get in touch with our team and 
            let's discuss how we can help your business achieve its goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card slide-in-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gradient focus:ring-2 focus:ring-purple-100 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gradient focus:ring-2 focus:ring-purple-100 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gradient focus:ring-2 focus:ring-purple-100 transition-all"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Service Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gradient focus:ring-2 focus:ring-purple-100 transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="professional">Professional Services</option>
                  <option value="analytics">Analytics & Data Engineering</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gradient focus:ring-2 focus:ring-purple-100 transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="slide-in-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-soft border border-gray-100">
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-gradient font-semibold mb-1">{info.detail}</p>
                    <p className="text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Why Choose HERO?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  15+ Years Industry Experience
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Global Delivery Capabilities
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  100% Client Satisfaction Rate
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Agile & Waterfall Methodologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact