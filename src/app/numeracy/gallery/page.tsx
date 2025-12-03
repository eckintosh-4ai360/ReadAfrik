'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon as ArrowLeft,
  MagnifyingGlassIcon as Search,
  UsersIcon as Users,
  StarIcon as Star,
  PlayIcon as Play
} from '@heroicons/react/24/outline';

const GalleryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const categories = ['All', 'Fractions', 'Geometry', 'Number Sense', 'Algebra', 'Statistics', 'Probability', 'Measurement'];
  const difficulties = ['All', 'Elementary', 'Middle School', 'High School'];

  const galleryItems = [
    {
      id: 1,
      title: 'Fraction Visualization',
      description: 'Interactive pie charts and bar models for understanding fractions. Explore equivalent fractions, operations, and conversions.',
      category: 'Fractions',
      difficulty: 'Elementary',
      image: '🥧',
      views: 2500,
      rating: 4.9,
      duration: '15 min'
    },
    {
      id: 2,
      title: 'Geometric Shapes Explorer',
      description: '3D models and interactive geometry tools to understand shapes, angles, and spatial relationships.',
      category: 'Geometry',
      difficulty: 'Middle School',
      image: '📐',
      views: 1800,
      rating: 4.8,
      duration: '20 min'
    },
    {
      id: 3,
      title: 'Number Line Adventures',
      description: 'Dynamic number lines for addition, subtraction, and understanding integers with visual representations.',
      category: 'Number Sense',
      difficulty: 'Elementary',
      image: '📏',
      views: 3200,
      rating: 5.0,
      duration: '10 min'
    },
    {
      id: 4,
      title: 'Algebra Tile Manipulatives',
      description: 'Virtual algebra tiles for equation solving, factoring, and understanding algebraic expressions.',
      category: 'Algebra',
      difficulty: 'High School',
      image: '🧩',
      views: 1500,
      rating: 4.7,
      duration: '25 min'
    },
    {
      id: 5,
      title: 'Data Visualization Tools',
      description: 'Create and analyze charts, graphs, and statistical representations with real-world data sets.',
      category: 'Statistics',
      difficulty: 'Middle School',
      image: '📊',
      views: 2100,
      rating: 4.9,
      duration: '18 min'
    },
    {
      id: 6,
      title: 'Probability Simulators',
      description: 'Interactive probability experiments and simulations to understand chance, outcomes, and predictions.',
      category: 'Probability',
      difficulty: 'High School',
      image: '🎲',
      views: 1700,
      rating: 4.8,
      duration: '22 min'
    },
    {
      id: 7,
      title: 'Decimal Place Value Explorer',
      description: 'Visual tools for understanding decimal place value, rounding, and decimal operations.',
      category: 'Number Sense',
      difficulty: 'Elementary',
      image: '🔢',
      views: 2800,
      rating: 4.9,
      duration: '12 min'
    },
    {
      id: 8,
      title: 'Area and Perimeter Calculator',
      description: 'Interactive shapes to calculate and visualize area, perimeter, and surface area concepts.',
      category: 'Geometry',
      difficulty: 'Middle School',
      image: '📏',
      views: 2200,
      rating: 4.7,
      duration: '15 min'
    },
    {
      id: 9,
      title: 'Function Graphing Tool',
      description: 'Plot and analyze mathematical functions with interactive graphing capabilities.',
      category: 'Algebra',
      difficulty: 'High School',
      image: '📈',
      views: 1900,
      rating: 4.8,
      duration: '30 min'
    },
    {
      id: 10,
      title: 'Measurement Conversion Station',
      description: 'Practice converting between different units of measurement with visual aids.',
      category: 'Measurement',
      difficulty: 'Elementary',
      image: '⚖️',
      views: 2600,
      rating: 4.9,
      duration: '10 min'
    },
    {
      id: 11,
      title: 'Symmetry and Transformations',
      description: 'Explore reflections, rotations, and translations with interactive geometric shapes.',
      category: 'Geometry',
      difficulty: 'Middle School',
      image: '🔄',
      views: 1600,
      rating: 4.8,
      duration: '20 min'
    },
    {
      id: 12,
      title: 'Prime Number Finder',
      description: 'Visualize prime numbers, factors, and multiples with interactive number grids.',
      category: 'Number Sense',
      difficulty: 'Middle School',
      image: '🔍',
      views: 1400,
      rating: 4.7,
      duration: '15 min'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || item.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const difficultyColors: { [key: string]: string } = {
    'Elementary': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Middle School': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'High School': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
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
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Visual Gallery
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Interactive visual representations of mathematical concepts to enhance learning
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search gallery items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="mb-8 space-y-4">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">Category</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-green-600 text-white shadow-lg'
                          : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 hover:border-green-400 dark:hover:border-green-500'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">Difficulty Level</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedDifficulty === difficulty
                          ? 'bg-green-600 text-white shadow-lg'
                          : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 hover:border-green-400 dark:hover:border-green-500'
                      }`}
                    >
                      {difficulty}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {filteredItems.length} of {galleryItems.length} items
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{item.image}</div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${difficultyColors[item.difficulty]}`}>
                        {item.difficulty}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Category Badge */}
                    <span className="inline-block bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full mb-4">
                      {item.category}
                    </span>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-semibold text-gray-900 dark:text-white">{item.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{item.views}</span>
                        </div>
                      </div>
                      <span>{item.duration}</span>
                    </div>

                    {/* Action Button */}
                    <Link href={`/numeracy/gallery/${item.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center space-x-2 bg-green-600 dark:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200"
                      >
                        <Play className="h-4 w-4" />
                        <span>Launch Interactive</span>
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No items found</h3>
                <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;

