'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowDownTrayIcon as Download, 
  StarIcon as Star, 
  MagnifyingGlassIcon as Search, 
  GiftIcon as Gift 
} from '@heroicons/react/24/outline';

const FreeResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const freeResources = [
    {
      id: 3,
      title: 'Math Manipulatives Collection',
      description: 'Virtual manipulatives and hands-on activities for teaching mathematical concepts.',
      price: 0,
      originalPrice: null,
      category: 'free',
      type: 'Free Resource',
      rating: 4.7,
      reviews: 156,
      downloads: 5200,
      image: '🧮',
      features: ['Virtual Tools', 'Lesson Plans', 'Activity Guides', 'Grade K-8']
    },
    {
      id: 5,
      title: 'Sight Words Flash Cards',
      description: 'Printable flash cards for the most common sight words, organized by difficulty level.',
      price: 0,
      originalPrice: null,
      category: 'free',
      type: 'Free Resource',
      rating: 4.6,
      reviews: 203,
      downloads: 8900,
      image: '🃏',
      features: ['Printable PDF', 'Color & B&W', 'Multiple Levels', 'Progress Tracker']
    },
    {
      id: 7,
      title: 'Reading Comprehension Worksheets',
      description: 'Engaging reading passages with comprehension questions for grades 1-6.',
      price: 0,
      originalPrice: null,
      category: 'free',
      type: 'Free Resource',
      rating: 4.8,
      reviews: 342,
      downloads: 12500,
      image: '📖',
      features: ['Multiple Grade Levels', 'Answer Keys', 'Printable', 'Fiction & Non-Fiction']
    },
    {
      id: 8,
      title: 'Phonics Activities Pack',
      description: 'Fun and interactive phonics activities to build early reading skills.',
      price: 0,
      originalPrice: null,
      category: 'free',
      type: 'Free Resource',
      rating: 4.9,
      reviews: 287,
      downloads: 9800,
      image: '🎯',
      features: ['Interactive Games', 'Printable Worksheets', 'Audio Support', 'Progress Tracking']
    },
    {
      id: 9,
      title: 'Number Sense Activities',
      description: 'Hands-on activities to develop strong number sense and mathematical thinking.',
      price: 0,
      originalPrice: null,
      category: 'free',
      type: 'Free Resource',
      rating: 4.7,
      reviews: 198,
      downloads: 7300,
      image: '🔢',
      features: ['Interactive', 'Differentiated', 'Assessment Tools', 'Grade K-5']
    },
    {
      id: 10,
      title: 'Writing Prompts Collection',
      description: 'Creative writing prompts to inspire student writers across all grade levels.',
      price: 0,
      originalPrice: null,
      category: 'free',
      type: 'Free Resource',
      rating: 4.8,
      reviews: 421,
      downloads: 15200,
      image: '✏️',
      features: ['200+ Prompts', 'All Grades', 'Multiple Genres', 'Rubrics Included']
    },
    {
      id: 11,
      title: 'Alphabet Learning Cards',
      description: 'Colorful alphabet cards with images and tracing guides for early learners.',
      price: 0,
      originalPrice: null,
      category: 'free',
      type: 'Free Resource',
      rating: 4.9,
      reviews: 512,
      downloads: 18900,
      image: '🔤',
      features: ['Uppercase & Lowercase', 'Picture Associations', 'Tracing Guides', 'Printable']
    },
    {
      id: 12,
      title: 'Fractions Visual Guide',
      description: 'Visual representations and activities for teaching fractions effectively.',
      price: 0,
      originalPrice: null,
      category: 'free',
      type: 'Free Resource',
      rating: 4.6,
      reviews: 167,
      downloads: 6400,
      image: '🥧',
      features: ['Visual Models', 'Practice Problems', 'Games', 'Grade 3-6']
    }
  ];

  const filteredResources = freeResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleDownload = (resource: { id: number; title: string }) => {
    alert(`Downloading: ${resource.title}\n\nYour free resource will be downloaded shortly!`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
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
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full transition-colors duration-300">
                <Gift className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Free Educational Resources
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access our curated collection of free teaching materials, worksheets, and activities. 
              No payment required – just download and start using them in your classroom today!
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 transition-colors duration-300"
              >
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {freeResources.length}+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Free Resources</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 transition-colors duration-300"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {freeResources.reduce((sum, r) => sum + r.downloads, 0).toLocaleString()}+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Total Downloads</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 transition-colors duration-300"
              >
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-300">Free Forever</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 p-4 transition-colors duration-300">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search free resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-slate-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors duration-200"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free Resources Grid */}
      <section className="py-12 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Available Free Resources
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {filteredResources.length} resources found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white dark:bg-slate-700 rounded-xl shadow-lg border border-green-100 dark:border-slate-600 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Resource Header */}
                <div className="p-5 border-b border-gray-100 dark:border-slate-600">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-3 py-1 rounded-full">
                      FREE
                    </span>
                    <div className="text-3xl">{resource.image}</div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                    {resource.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-1 mb-3">
                    {resource.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Rating and Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{resource.rating}</span>
                      <span className="text-xs">({resource.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span className="text-xs">{resource.downloads.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Download Action */}
                <div className="p-5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDownload(resource)}
                    className="w-full flex items-center justify-center space-x-2 bg-green-600 dark:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Free</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Want More Premium Resources?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Check out our premium collection of comprehensive teaching materials, 
              curriculum guides, and advanced learning resources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/store">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Browse Premium Store
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FreeResourcesPage;
