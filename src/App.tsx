import React from 'react';
import { motion } from 'framer-motion';
import { Search, Home, Users, Settings, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-yellow-500"
        >
          bodimak.lk
        </motion.div>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-slate-700 hover:text-slate-900">Sign in</button>
          <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800">
            Sign up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="bg-yellow-400 rounded-b-[50px] px-6 py-12"
>
  <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-slate-800 mb-8">
      "Find, Rent, Manage – Your Space, Your Way"
    </h1>

    {/* Search Form */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl"> {/* Increased gap from 4 to 8 */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Location</label>
          <input
            type="text"
            placeholder="Enter a state, locality or area"
            className="w-full p-3 bg-gray-100 rounded-lg"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Type</label>
            <select className="w-full p-3 bg-gray-100 rounded-lg">
              <option>All types</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Bedrooms</label>
            <select className="w-full p-3 bg-gray-100 rounded-lg">
              <option>Any</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Min price</label>
            <select className="w-full p-3 bg-gray-100 rounded-lg">
              <option>No Min</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Max price</label>
            <select className="w-full p-3 bg-gray-100 rounded-lg">
              <option>No Max</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-900 transition-colors">
          Search
        </button>
      </div>

      <div className="relative hidden md:block pl-12"> {/* Added padding-left */}
        <img
          src="src/assets/rb_2148653817 1.png"
          alt="Property Search Illustration"
          className="absolute right-0 top-0"
        />
      </div>
    </div>
  </div>
</motion.section>



      {/* Welcome Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="py-16 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to <span className="text-yellow-500">bodimak.lk</span> – Your Ultimate Room Renting Solution!
          </h2>
          <p className="text-gray-600 mb-12">
            Looking for the perfect room to rent or need an efficient way to manage your rental properties? You've come to the right place!
          </p>

          {/* User Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tenants',
                icon: <Home className="w-12 h-12 text-yellow-500" />,
                description: 'Find Your Next Room'
              },
              {
                title: 'Property Managers',
                icon: <Users className="w-12 h-12 text-yellow-500" />,
                description: 'Manage Your Properties'
              },
              {
                title: 'Admins',
                icon: <Settings className="w-12 h-12 text-yellow-500" />,
                description: 'Stay Updated'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-yellow-500">bodimak.lk</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: 'User-Friendly',
                description: 'Our platform is easy to use and navigate'
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: 'Comprehensive Features',
                description: 'Everything you need in one place'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Secure & Reliable',
                description: 'Your data is safe with us'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-yellow-500 mb-4 md:mb-0">
              bodimak.lk
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-yellow-500">About Us</a>
              <a href="#" className="hover:text-yellow-500">Contact</a>
              <a href="#" className="hover:text-yellow-500">Terms of Use</a>
              <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            © 2024 bodimak.lk. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;