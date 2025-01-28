
import { motion } from 'framer-motion';
import {Home, Users, Settings, Shield } from 'lucide-react';
import './Content.css';

function Content() {
  return (
    <div className="content">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hero"
      >
        <div className="hero-container">
          <h1 className="hero-title">
            "Find, Rent, Manage – Your Space, Your Way"
          </h1>

          {/* Search Form */}
          <div className="search-form">
            <div className="form-group">
              <label className="form-label">Location</label>
              <input
                type="text"
                placeholder="Enter a state, locality or area"
                className="form-input"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Type</label>
                <select className="form-input">
                  <option>All types</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Bedrooms</label>
                <select className="form-input">
                  <option>Any</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Min price</label>
                <select className="form-input">
                  <option>No Min</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Max price</label>
                <select className="form-input">
                  <option>No Max</option>
                </select>
              </div>
            </div>

            <button className="search-button">
              Search
            </button>
          </div>

          <div className="hero-image">
            <img
              src="src/assets/rb_2148653817 1.png"
              alt="Property Search Illustration"
            />
          </div>
        </div>
      </motion.section>

      {/* Welcome Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="welcome"
      >
        <div className="welcome-container">
          <h2 className="welcome-title">
            Welcome to <span className="text-yellow-500">bodimak.lk</span> – Your Ultimate Room Renting Solution!
          </h2>
          <p className="welcome-description">
            Looking for the perfect room to rent or need an efficient way to manage your rental properties? You've come to the right place!
          </p>

          {/* User Types Grid */}
          <div className="user-types">
            {[
              {
                title: 'Tenants',
                icon: <Home className="icon" />,
                description: 'Find Your Next Room'
              },
              {
                title: 'Property Managers',
                icon: <Users className="icon" />,
                description: 'Manage Your Properties'
              },
              {
                title: 'Admins',
                icon: <Settings className="icon" />,
                description: 'Stay Updated'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="user-type"
              >
                <div className="icon-container">{item.icon}</div>
                <h3 className="user-type-title">{item.title}</h3>
                <p className="user-type-description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2 className="features-title">
            Why Choose <span className="text-yellow-500">bodimak.lk</span>?
          </h2>
          <div className="features-grid">
            {[
              {
                icon: <Users className="feature-icon" />,
                title: 'User-Friendly',
                description: 'Our platform is easy to use and navigate'
              },
              {
                icon: <Settings className="feature-icon" />,
                title: 'Comprehensive Features',
                description: 'Everything you need in one place'
              },
              {
                icon: <Shield className="feature-icon" />,
                title: 'Secure & Reliable',
                description: 'Your data is safe with us'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="feature"
              >
                <div className="feature-icon-container">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;