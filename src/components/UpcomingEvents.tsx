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
  XMarkIcon as X, 
  EnvelopeIcon as Mail, 
  UserIcon as User, 
  PhoneIcon as Phone 
} from '@heroicons/react/24/outline';

const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [registrationData, setRegistrationData] = useState({ name: '', email: '', phone: '' });
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const events = [
    {
      id: 1,
      title: 'Digital Literacy Workshop',
      description: 'Learn modern digital literacy techniques and tools for effective teaching.',
      date: '2025-07-25',
      time: '10:00 AM - 2:00 PM',
      location: 'Online',
      type: 'Workshop',
      attendees: 45,
      maxAttendees: 50,
      price: 'Free',
      category: 'literacy',
      icon: BookOpen,
      image: '💻'
    },
    {
      id: 2,
      title: 'Numeracy Teaching Strategies',
      description: 'Innovative approaches to teaching mathematics and problem-solving skills.',
      date: '2025-08-02',
      time: '2:00 PM - 5:00 PM',
      location: 'Learning Center, Room 101',
      type: 'Seminar',
      attendees: 28,
      maxAttendees: 40,
      price: '$25',
      category: 'numeracy',
      icon: Award,
      image: '🧮'
    },
    {
      id: 3,
      title: 'Career Development Masterclass',
      description: 'Build your professional portfolio and advance your educational career.',
      date: '2025-08-10',
      time: '9:00 AM - 4:00 PM',
      location: 'Online',
      type: 'Masterclass',
      attendees: 67,
      maxAttendees: 100,
      price: '$50',
      category: 'career',
      icon: Award,
      image: '🎯'
    },
    {
      id: 4,
      title: 'Educational Technology Expo',
      description: 'Explore the latest educational tools and technologies for modern classrooms.',
      date: '2025-08-18',
      time: '10:00 AM - 6:00 PM',
      location: 'Convention Center',
      type: 'Expo',
      attendees: 156,
      maxAttendees: 200,
      price: '$35',
      category: 'technology',
      icon: Video,
      image: '🚀'
    }
  ];

  const categoryColors: { [key: string]: string } = {
    literacy: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    numeracy: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    career: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
    technology: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: subscribeEmail,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert(`✅ Subscription Successful!\n\nThank you for subscribing!\n\nA welcome email has been sent to: ${subscribeEmail}\n\nYou'll receive event updates and exclusive offers.`);
        setShowSubscribeModal(false);
        setSubscribeEmail('');
      } else {
        alert(`❌ Subscription Failed\n\n${data.error || 'Please try again later.'}`);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('❌ Network Error\n\nUnable to complete subscription. Please check your internet connection and try again.');
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our community events, workshops, and seminars designed to enhance 
            your teaching skills and professional development.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
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
                {/* Date and Time */}
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

                {/* Location */}
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{event.location}</span>
                </div>

                {/* Attendees */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">
                      {event.attendees}/{event.maxAttendees} registered
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="flex-1 ml-4">
                    <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                      <div 
                        className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Register Button */}
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

        {/* View All Events CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-gray-200 dark:border-slate-600 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Don&apos;t Miss Out on Future Events
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Stay updated with our latest workshops, seminars, and educational events. 
              Subscribe to our newsletter to get notified about upcoming opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                >
                  View All Events
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSubscribeModal(true)}
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                Subscribe to Updates
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

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

      {/* Subscribe Modal */}
      <AnimatePresence>
        {showSubscribeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSubscribeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSubscribeModal(false)}
                className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                  <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Subscribe to Event Updates
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get notified about upcoming workshops, seminars, and educational events directly to your inbox.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="email"
                      required
                      value={subscribeEmail}
                      onChange={(e) => setSubscribeEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-slate-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-slate-700 rounded-lg p-4 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <p>✓ Weekly event digest</p>
                  <p>✓ Early registration access</p>
                  <p>✓ Exclusive discounts</p>
                  <p>✓ Unsubscribe anytime</p>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowSubscribeModal(false)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default UpcomingEvents;

