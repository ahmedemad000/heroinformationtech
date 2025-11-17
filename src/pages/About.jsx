import React from 'react'

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We deliver exceptional quality in every project, exceeding client expectations.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to drive progress.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, transparency, and mutual success.'
    },
    {
      icon: '🌍',
      title: 'Global Mindset',
      description: 'We leverage diverse perspectives and global best practices for optimal results.'
    }
  ]

  const team = [
    {
      name: 'Ahmed Al-Mansour',
      role: 'CEO & Founder',
      description: '15+ years in digital transformation and enterprise technology.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in cloud architecture and scalable system design.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Delivery',
      description: 'Specialized in global project management and team leadership.'
    }
  ]

  return (
    <div className="pt-32 section-padding">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            About HERO InfoTech
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a premier technology consulting firm dedicated to driving digital transformation 
            and delivering innovative solutions that empower businesses to thrive in the digital age.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="card slide-in-left">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              To empower businesses with innovative technology solutions that drive growth, 
              enhance efficiency, and create sustainable competitive advantages in an ever-evolving digital landscape.
            </p>
          </div>
          <div className="card slide-in-right">
            <div className="text-4xl mb-4">🔭</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg">
              To be the most trusted technology partner for businesses worldwide, 
              recognized for our excellence in delivery, innovation, and client success.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center card">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Preview */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-20 h-20 bg-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gradient font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About