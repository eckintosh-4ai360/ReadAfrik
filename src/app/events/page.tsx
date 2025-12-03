'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarIcon as Calendar, 
  ClockIcon as Clock, 
  MapPinIcon as MapPin, 
  UsersIcon as Users, 
  ArrowRightIcon as ArrowRight, 
  VideoCameraIcon as Video, 
  BookOpenIcon as BookOpen, 
  TrophyIcon as Award, 
  FunnelIcon as Filter, 
  MagnifyingGlassIcon as Search, 
  XMarkIcon as X, 
  EnvelopeIcon as Mail, 
  UserIcon as User, 
  PhoneIcon as Phone 
} from '@heroicons/react/24/outline';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [registrationData, setRegistrationData] = useState({ name: '', email: '', phone: '' });

  const categories = [
    { id: 'all', name: 'All Events', color: 'bg-gray-100 text-gray-800 dark:bg-slate-700 dark:text-gray-200' },
    { id: 'literacy', name: 'Literacy', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    { id: 'numeracy', name: 'Numeracy', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
    { id: 'career', name: 'Career Development', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
    { id: 'technology', name: 'Technology', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' }
  ];

  const events = [
    {
      id: 1,
      title: 'Digital Literacy Workshop',
      description: 'Learn modern digital literacy techniques and tools for effective teaching.',
      longDescription: 'Join us for an immersive workshop on digital literacy teaching methods. Learn how to integrate technology effectively in your classroom, use digital assessment tools, and engage students with interactive learning platforms.',
      date: '2025-07-25',
      time: '10:00 AM - 2:00 PM',
      location: 'Online',
      type: 'Workshop',
      attendees: 45,
      maxAttendees: 50,
      price: 'Free',
      category: 'literacy',
      icon: BookOpen,
      image: '💻',
      featured: true
    },
    {
      id: 2,
      title: 'Numeracy Teaching Strategies',
      description: 'Innovative approaches to teaching mathematics and problem-solving skills.',
      longDescription: 'Discover cutting-edge strategies for teaching numeracy skills. This seminar covers differentiated instruction, hands-on activities, and assessment techniques that make math engaging and accessible for all learners.',
      date: '2025-08-02',
      time: '2:00 PM - 5:00 PM',
      location: 'Learning Center, Room 101',
      type: 'Seminar',
      attendees: 28,
      maxAttendees: 40,
      price: '$25',
      category: 'numeracy',
      icon: Award,
      image: '🧮',
      featured: false
    },
    {
      id: 3,
      title: 'Career Development Masterclass',
      description: 'Build your professional portfolio and advance your educational career.',
      longDescription: 'Take your educational career to the next level. Learn how to create an impressive teaching portfolio, network effectively, and position yourself for leadership opportunities in education.',
      date: '2025-08-10',
      time: '9:00 AM - 4:00 PM',
      location: 'Online',
      type: 'Masterclass',
      attendees: 67,
      maxAttendees: 100,
      price: '$50',
      category: 'career',
      icon: Award,
      image: '🎯',
      featured: true
    },
    {
      id: 4,
      title: 'Educational Technology Expo',
      description: 'Explore the latest educational tools and technologies for modern classrooms.',
      longDescription: 'Experience the future of education technology. Visit interactive booths, attend product demonstrations, and network with EdTech innovators. See the latest in learning management systems, classroom tools, and student engagement platforms.',
      date: '2025-08-18',
      time: '10:00 AM - 6:00 PM',
      location: 'Convention Center',
      type: 'Expo',
      attendees: 156,
      maxAttendees: 200,
      price: '$35',
      category: 'technology',
      icon: Video,
      image: '🚀',
      featured: true
    },
    {
      id: 5,
      title: 'Reading Comprehension Techniques',
      description: 'Advanced strategies for developing reading comprehension skills in students.',
      longDescription: 'Master proven techniques for improving reading comprehension across all grade levels. Learn how to teach critical thinking, inference skills, and text analysis effectively.',
      date: '2025-08-22',
      time: '1:00 PM - 4:00 PM',
      location: 'Online',
      type: 'Workshop',
      attendees: 34,
      maxAttendees: 50,
      price: 'Free',
      category: 'literacy',
      icon: BookOpen,
      image: '📚',
      featured: false
    },
    {
      id: 6,
      title: 'Math Games and Activities Fair',
      description: 'Hands-on math games and activities to make learning fun and engaging.',
      longDescription: 'Discover hundreds of fun, educational math games and activities. Take home ready-to-use resources that will transform your math instruction and increase student engagement.',
      date: '2025-08-28',
      time: '10:00 AM - 3:00 PM',
      location: 'Community Center',
      type: 'Fair',
      attendees: 89,
      maxAttendees: 150,
      price: '$15',
      category: 'numeracy',
      icon: Award,
      image: '🎲',
      featured: false
    }
  ];

  const categoryColors: { [key: string]: string } = {
    literacy: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    numeracy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    career: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    technology: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
  };

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredEvents = events.filter(e => e.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleRegister = (eventId: number) => {
    setSelectedEvent(eventId);
  };

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const event = events.find(e => e.id === selectedEvent);
    
    if (!event) return;
    
    try {
      const response = await fetch('/api/register-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: registrationData.name,
          email: registrationData.email,
          phone: registrationData.phone,
          eventId: event.id,
          eventTitle: event.title,
          eventDate: event.date,
          eventTime: event.time,
          eventLocation: event.location,
          eventPrice: event.price,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert(`✅ Registration Successful!\n\nYou've been registered for "${event.title}".\n\nA confirmation email has been sent to: ${registrationData.email}\n\nPlease check your inbox (and spam folder) for event details.`);
        setSelectedEvent(null);
        setRegistrationData({ name: '', email: '', phone: '' });
      } else {
        alert(`❌ Registration Failed\n\n${data.error || 'Please try again later.'}`);
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('❌ Network Error\n\nUnable to complete registration. Please check your internet connection and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full transition-colors duration-300">
                <Calendar className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Educational Events
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover workshops, seminars, and conferences designed to enhance your teaching 
              skills and professional development. Join our community of educators committed to excellence.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 p-6 transition-colors duration-300">
              <div className="flex flex-col gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-slate-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors duration-200"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      {selectedCategory === 'all' && (
        <section className="py-12 bg-white dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Events
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Don't miss these popular upcoming events
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl shadow-lg border border-blue-100 dark:border-slate-600 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Featured
                      </span>
                      <div className="text-3xl">{event.image}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{event.price}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{event.attendees}/{event.maxAttendees} seats</span>
                    </div>

                    <button
                      onClick={() => handleRegister(event.id)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedCategory === 'all' ? 'All Events' : `${categories.find(c => c.id === selectedCategory)?.name} Events`}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {filteredEvents.length} events found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Event Header */}
                <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-800 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{event.image}</div>
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColors[event.category]}`}>
                          {event.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{event.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Event Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">
                        {event.attendees}/{event.maxAttendees} registered
                      </span>
                    </div>
                    
                    <div className="flex-1 ml-4">
                      <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                        <div 
                          className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleRegister(event.id)}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 group-hover:shadow-md"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <AnimatePresence>
        {selectedEvent !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Event Registration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {events.find(e => e.id === selectedEvent)?.title}
                </p>
              </div>

              <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="text"
                      required
                      value={registrationData.name}
                      onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-slate-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="email"
                      required
                      value={registrationData.email}
                      onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-slate-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="tel"
                      value={registrationData.phone}
                      onChange={(e) => setRegistrationData({ ...registrationData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-slate-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors duration-200"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                  >
                    Register
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsPage;
