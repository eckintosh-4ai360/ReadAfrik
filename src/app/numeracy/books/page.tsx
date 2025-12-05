'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon as ArrowLeft,
  MagnifyingGlassIcon as Search,
  ArrowDownTrayIcon as Download,
  StarIcon as Star,
  DocumentTextIcon as Document,
  BookOpenIcon as BookOpen
} from '@heroicons/react/24/outline';

const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const levels = ['All', 'Elementary', 'Middle School', 'High School', 'College', 'Professional'];

  const books = [
    {
      id: 1,
      title: 'Foundations of Number Sense',
      description: 'A comprehensive guide to developing strong number sense in young learners through hands-on activities and visual representations.',
      author: 'Dr. Maria Garcia',
      level: 'Elementary',
      pages: 245,
      downloads: 8200,
      rating: 4.9,
      icon: '🔢',
      topics: ['Place Value', 'Basic Operations', 'Number Patterns'],
      year: '2024'
    },
    {
      id: 2,
      title: 'Algebraic Thinking for Middle Grades',
      description: 'Bridge the gap between arithmetic and algebra with progressive lessons and practice problems.',
      author: 'Prof. James Wilson',
      level: 'Middle School',
      pages: 312,
      downloads: 6500,
      rating: 4.8,
      icon: '🧮',
      topics: ['Variables', 'Equations', 'Functions'],
      year: '2024'
    },
    {
      id: 3,
      title: 'Geometry in Our World',
      description: 'Explore geometric concepts through real-world applications and interactive digital tools.',
      author: 'Dr. Sarah Chen',
      level: 'Middle School',
      pages: 198,
      downloads: 7100,
      rating: 4.9,
      icon: '📐',
      topics: ['Shapes', 'Angles', 'Spatial Reasoning'],
      year: '2024'
    },
    {
      id: 4,
      title: 'Advanced Calculus Workbook',
      description: 'Comprehensive exercises and solutions for mastering calculus concepts at the college level.',
      author: 'Prof. Michael Brown',
      level: 'College',
      pages: 456,
      downloads: 4200,
      rating: 4.7,
      icon: '📊',
      topics: ['Limits', 'Derivatives', 'Integrals'],
      year: '2023'
    },
    {
      id: 5,
      title: 'Statistics Made Simple',
      description: 'Learn data analysis and statistical thinking with practical examples and digital tools.',
      author: 'Dr. Lisa Thompson',
      level: 'High School',
      pages: 278,
      downloads: 9300,
      rating: 5.0,
      icon: '📈',
      topics: ['Data Analysis', 'Probability', 'Inference'],
      year: '2024'
    },
    {
      id: 6,
      title: 'Mathematical Problem Solving',
      description: 'Develop critical thinking skills with challenging problems and multiple solution strategies.',
      author: 'Dr. David Lee',
      level: 'High School',
      pages: 334,
      downloads: 5800,
      rating: 4.8,
      icon: '🧩',
      topics: ['Logic', 'Strategies', 'Applications'],
      year: '2024'
    },
    {
      id: 7,
      title: 'Teaching Math Effectively',
      description: 'Research-based instructional strategies for mathematics educators at all levels.',
      author: 'Dr. Emily Rodriguez',
      level: 'Professional',
      pages: 412,
      downloads: 3600,
      rating: 4.9,
      icon: '👩‍🏫',
      topics: ['Pedagogy', 'Assessment', 'Differentiation'],
      year: '2024'
    },
    {
      id: 8,
      title: 'Fractions, Decimals & Percentages',
      description: 'Master the connections between different number representations with visual models.',
      author: 'Dr. Maria Garcia',
      level: 'Elementary',
      pages: 189,
      downloads: 8900,
      rating: 4.9,
      icon: '🥧',
      topics: ['Fractions', 'Decimals', 'Conversions'],
      year: '2024'
    },
    {
      id: 9,
      title: 'Linear Algebra Essentials',
      description: 'Core concepts of linear algebra with applications in computer science and engineering.',
      author: 'Prof. James Wilson',
      level: 'College',
      pages: 398,
      downloads: 4800,
      rating: 4.7,
      icon: '🔷',
      topics: ['Matrices', 'Vectors', 'Transformations'],
      year: '2023'
    },
    {
      id: 10,
      title: 'Math Games and Activities',
      description: 'Engaging games and hands-on activities to make mathematics fun and accessible.',
      author: 'Sarah Martinez',
      level: 'Elementary',
      pages: 156,
      downloads: 10200,
      rating: 5.0,
      icon: '🎲',
      topics: ['Games', 'Activities', 'Engagement'],
      year: '2024'
    },
    {
      id: 11,
      title: 'Trigonometry Demystified',
      description: 'Clear explanations and practical applications of trigonometric concepts.',
      author: 'Dr. Michael Brown',
      level: 'High School',
      pages: 267,
      downloads: 6200,
      rating: 4.8,
      icon: '📐',
      topics: ['Angles', 'Functions', 'Applications'],
      year: '2024'
    },
    {
      id: 12,
      title: 'Mathematical Curriculum Design',
      description: 'Creating coherent and rigorous mathematics curricula aligned with standards.',
      author: 'Dr. Emily Rodriguez',
      level: 'Professional',
      pages: 345,
      downloads: 2900,
      rating: 4.8,
      icon: '📋',
      topics: ['Curriculum', 'Standards', 'Planning'],
      year: '2023'
    }
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLevel = selectedLevel === 'All' || book.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link href="/numeracy" className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-8 transition-colors duration-200">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Numeracy</span>
            </Link>

            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
                  <BookOpen className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Digital Books
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive numeracy textbooks and workbooks for all learning levels
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Books</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Download className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">78K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Downloads</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Document className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">3500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Pages</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">4.8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
                />
              </div>
            </div>

            {/* Level Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedLevel === level
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 hover:border-green-400 dark:hover:border-green-500'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{book.icon}</div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                        {book.level}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                      {book.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {book.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {book.topics.map((topic) => (
                        <span key={topic} className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">
                      <div className="flex items-center space-x-3">
                        <span>{book.pages} pages</span>
                        <span>•</span>
                        <span>{book.year}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold text-gray-900 dark:text-white">{book.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Download className="h-4 w-4" />
                        <span>{book.downloads.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Author */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      by {book.author}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center space-x-2 bg-green-600 dark:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-3 rounded-lg border-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-400 font-semibold hover:bg-green-50 dark:hover:bg-slate-700 transition-colors duration-200"
                      >
                        Preview
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredBooks.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No books found</h3>
                <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Build Your Math Library
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Access our complete collection of numeracy books and resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/store">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Browse Store
                </button>
              </Link>
              <Link href="/store/free">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200">
                  Free Resources
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BooksPage;

