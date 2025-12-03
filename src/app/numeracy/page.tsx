'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CalculatorIcon as Calculator, 
  DocumentTextIcon as FileText, 
  BookOpenIcon as BookOpen, 
  ArrowRightIcon as ArrowRight, 
  UsersIcon as Users, 
  PhotoIcon as Image, 
  ArrowDownTrayIcon as Download,
  MagnifyingGlassIcon as Search 
} from '@heroicons/react/24/outline';

const NumeracyPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const features = [
    {
      icon: Image,
      title: 'Visual Gallery',
      description: 'Interactive visual representations of mathematical concepts',
      href: '/numeracy/gallery',
      stats: { visuals: '300+', views: '100K+' }
    },
    {
      icon: FileText,
      title: 'Expert Articles',
      description: 'Research-based articles on numeracy education',
      href: '/numeracy/articles',
      stats: { articles: '120+', readers: '35K+' }
    },
    {
      icon: BookOpen,
      title: 'Digital Books',
      description: 'Comprehensive numeracy textbooks and workbooks',
      href: '/numeracy/books',
      stats: { books: '50+', downloads: '25K+' }
    }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Fraction Visualization',
      description: 'Interactive pie charts and bar models for understanding fractions',
      category: 'Fractions',
      difficulty: 'Elementary',
      image: '🥧',
      views: 2500
    },
    {
      id: 2,
      title: 'Geometric Shapes Explorer',
      description: '3D models and interactive geometry tools',
      category: 'Geometry',
      difficulty: 'Middle School',
      image: '📐',
      views: 1800
    },
    {
      id: 3,
      title: 'Number Line Adventures',
      description: 'Dynamic number lines for addition and subtraction',
      category: 'Number Sense',
      difficulty: 'Elementary',
      image: '📏',
      views: 3200
    },
    {
      id: 4,
      title: 'Algebra Tile Manipulatives',
      description: 'Virtual algebra tiles for equation solving',
      category: 'Algebra',
      difficulty: 'High School',
      image: '🧩',
      views: 1500
    },
    {
      id: 5,
      title: 'Data Visualization Tools',
      description: 'Charts, graphs, and statistical representations',
      category: 'Statistics',
      difficulty: 'Middle School',
      image: '📊',
      views: 2100
    },
    {
      id: 6,
      title: 'Probability Simulators',
      description: 'Interactive probability experiments and simulations',
      category: 'Probability',
      difficulty: 'High School',
      image: '🎲',
      views: 1700
    }
  ];

  const difficultyColors: { [key: string]: string } = {
    'Elementary': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Middle School': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'High School': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  const filteredGalleryItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
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
                <Calculator className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Numeracy Mastery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore mathematical concepts through visual galleries, expert articles, 
              and comprehensive digital books designed to make numeracy engaging and accessible.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 p-4 transition-colors duration-300">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search gallery items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-slate-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors duration-200"
                />
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-green-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg transition-colors duration-300">
                    {Object.entries(feature.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-gray-900 dark:text-white">{value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={feature.href}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center space-x-2 bg-green-600 dark:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200"
                    >
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Gallery Items
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our most popular visual learning tools and interactive 
              mathematical representations. {filteredGalleryItems.length} items found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredGalleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-700 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Item Header */}
                <div className="p-6 border-b border-gray-100 dark:border-slate-600">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${difficultyColors[item.difficulty]}`}>
                      {item.difficulty}
                    </span>
                    <div className="text-4xl">{item.image}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="bg-gray-100 dark:bg-slate-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>

                {/* Item Actions */}
                <div className="p-6">
                  <Link href={`/numeracy/gallery/${item.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center space-x-2 bg-green-600 dark:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200"
                    >
                      <span>View Interactive</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Gallery CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/numeracy/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 dark:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200 shadow-lg"
              >
                Explore Full Gallery
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              Numeracy Learning Impact
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See how our numeracy resources are making a difference in mathematical education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Image, label: 'Visual Tools', value: '300+' },
              { icon: FileText, label: 'Articles', value: '120+' },
              { icon: BookOpen, label: 'Digital Books', value: '50+' },
              { icon: Download, label: 'Downloads', value: '160K+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    <stat.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/numeracy/articles">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Read Articles
                </motion.button>
              </Link>
              <Link href="/numeracy/books">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
                >
                  Browse Books
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NumeracyPage;
