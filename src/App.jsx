import React, { useState, useEffect } from 'react';
import { Music, Calendar, Users, Award, Mail, Phone, MapPin } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import './App.css';

const IndianClassicalMusicClub = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const slides = [
    {
      image: './slide1.jpg',
      title: 'Discover the Soul of Indian Classical Music',
      subtitle: 'Join our vibrant community of music enthusiasts'
    },
    {
      image: './slide2.jpg',
      title: 'Discover the Soul of Indian Classical Music',
      subtitle: 'Join our vibrant community of music enthusiasts'
    },
    {
      image: './slide3.jpg',
      title: 'Discover the Soul of Indian Classical Music',
      subtitle: 'Join our vibrant community of music enthusiasts'
    }
  ];

  const events = [
    {
      date: '10 Sep 2025',
      title: 'Lorem Ipsum',
      time: '5:00 PM - 6:00 PM',
      venue: 'SAC 310'
    },
    {
      date: '10 Sep 2025',
      title: 'Lorem Ipsum',
      time: '5:00 PM - 6:00 PM',
      venue: 'SAC 310'
    },
    {
      date: '10 Sep 2025',
      title: 'Lorem Ipsum',
      time: '5:00 PM - 6:00 PM',
      venue: 'SAC 310'
    }
  ];

  const eboard = [
    {
      name: 'Nandini Goswami',
      role: 'President',
      year: 'Sophomore',
      major: 'Applied Math and Statistics',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c667c8cb?w=300&h=300&fit=crop'
    },
    {
      name: 'Shelly Lazbin',
      role: 'Vice President and PR Head',
      year: 'Sophomore',
      major: 'Economics and Political Science',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
    },
    {
      name: 'Sumit Kumar',
      role: 'Treasurer',
      year: 'Sophomore',
      major: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container" style={{ width: '100vw', margin: 0, padding: 0, overflowX: 'hidden' }}>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <Music size={24} />
            <span>SBU Indian Classical Music Club</span>
          </div>
          
          {/* Hamburger Button */}
          <button className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Navigation Links */}
          <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Events', id: 'events' },
                { name: 'E-Board', id: 'eboard' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    className="nav-link"
                    style={{
                      color: activeSection === item.id ? '#FF6B35' : 'white'
                    }}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    onMouseOver={(e) => e.target.style.color = '#FF6B35'}
                    onMouseOut={(e) => e.target.style.color = activeSection === item.id ? '#FF6B35' : 'white'}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
  
      {/* Hero Section */}
      <section id="home" className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: currentSlide === index ? 1 : 0
            }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </section>
  
      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Our Club</h2>
        <div className="about-grid">
          <div>
            <p className="about-text">
              Welcome to the Indian Classical Music Club at Stony Brook University. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
            </p>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
            </p>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
            </p>
          </div>
          <div>
            <img
              src="./logo.png"
              alt="Club Logo"
              className="about-image"
            />
          </div>
        </div>
      </section>
  
      {/* Events Section */}
      <section id="events" className="section" style={{background: '#f8f9fa'}}>
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <div
              key={index}
              className="event-card"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              }}
            >
              <div className="event-date">{event.date}</div>
              <h3 className="event-title">{event.title}</h3>
              <p style={{color: '#666', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                <Calendar size={16} />
                {event.time}
              </p>
              <p style={{color: '#666', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <MapPin size={16} />
                {event.venue}
              </p>
            </div>
          ))}
        </div>
      </section>
  
      {/* E-Board Section */}
      <section id="eboard" className="section">
        <h2 className="section-title">Current Executive Board</h2>
        <div className="eboard-grid">
          {eboard.map((member, index) => (
            <div
              key={index}
              className="eboard-card"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="eboard-image"
              />
              <h3 className="eboard-name">{member.name}</h3>
              <p className="eboard-role">{member.role}</p>
              <p style={{color: '#666', marginBottom: '0.3rem'}}>{member.year}</p>
              <p style={{color: '#666', fontSize: '0.9rem'}}>{member.major}</p>
            </div>
          ))}
        </div>
      </section>
  
      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-item">
              <Mail size={16} />
              <span>sbu.icm@stonybrook.edu</span>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <p>Instagram: @sbu-icm</p>
          </div>
        </div>
        <div style={{borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1rem', marginTop: '2rem'}}>
          <p>&copy; 2025 Indian Classical Music Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default IndianClassicalMusicClub;