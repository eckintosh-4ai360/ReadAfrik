'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon as Search,
  ClockIcon as Clock,
  EyeIcon as Eye,
  ArrowLeftIcon as ArrowLeft,
  TagIcon as Tag
} from '@heroicons/react/24/outline';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Teaching Strategies', 'Technology', 'Vocabulary', 'Research', 'Assessment', 'Classroom Management'];

  const blogPosts = [
    {
      id: 1,
      title: 'Effective Reading Strategies for Elementary Students',
      excerpt: 'Discover proven techniques to help young learners develop strong reading foundations. This comprehensive guide covers phonics, fluency, comprehension, and vocabulary development.',
      author: 'Dr. Sarah Johnson',
      date: '2025-07-10',
      readTime: '5 min read',
      views: 1250,
      category: 'Teaching Strategies',
      image: '📚',
      slug: 'effective-reading-strategies-elementary'
    },
    {
      id: 2,
      title: 'Digital Literacy in the Modern Classroom',
      excerpt: 'How to integrate technology effectively while maintaining focus on core literacy skills. Learn about the best tools and practices for digital learning environments.',
      author: 'Prof. Michael Chen',
      date: '2025-07-08',
      readTime: '7 min read',
      views: 980,
      category: 'Technology',
      image: '💻',
      slug: 'digital-literacy-modern-classroom'
    },
    {
      id: 3,
      title: 'Building Vocabulary Through Context Clues',
      excerpt: 'Practical methods to help students expand their vocabulary naturally through contextual learning and real-world applications.',
      author: 'Lisa Rodriguez',
      date: '2025-07-05',
      readTime: '4 min read',
      views: 1450,
      category: 'Vocabulary',
      image: '🔤',
      slug: 'building-vocabulary-context-clues'
    },
    {
      id: 4,
      title: 'Assessment Techniques That Actually Work',
      excerpt: 'Move beyond traditional testing with innovative assessment strategies that provide meaningful insights into student literacy development.',
      author: 'Dr. James Wilson',
      date: '2025-07-03',
      readTime: '6 min read',
      views: 1100,
      category: 'Assessment',
      image: '📊',
      slug: 'assessment-techniques-that-work'
    },
    {
      id: 5,
      title: 'Phonics vs. Whole Language: Finding Balance',
      excerpt: 'Explore the ongoing debate and discover how to combine the best of both approaches for optimal reading instruction.',
      author: 'Dr. Sarah Johnson',
      date: '2025-07-01',
      readTime: '8 min read',
      views: 1800,
      category: 'Research',
      image: '🔬',
      slug: 'phonics-vs-whole-language'
    },
    {
      id: 6,
      title: 'Creating a Literacy-Rich Classroom Environment',
      excerpt: 'Transform your classroom into a space that naturally promotes reading and writing. Practical tips for every grade level.',
      author: 'Maria Garcia',
      date: '2025-06-28',
      readTime: '5 min read',
      views: 920,
      category: 'Classroom Management',
      image: '🏫',
      slug: 'literacy-rich-classroom'
    },
    {
      id: 7,
      title: 'Supporting English Language Learners in Literacy',
      excerpt: 'Specialized strategies to help ELL students develop literacy skills while building English proficiency.',
      author: 'Prof. Michael Chen',
      date: '2025-06-25',
      readTime: '7 min read',
      views: 1350,
      category: 'Teaching Strategies',
      image: '🌍',
      slug: 'supporting-english-language-learners'
    },
    {
      id: 8,
      title: 'The Science of Reading: What Research Tells Us',
      excerpt: 'A deep dive into the latest research on how children learn to read and what this means for instructional practice.',
      author: 'Dr. James Wilson',
      date: '2025-06-22',
      readTime: '10 min read',
      views: 2100,
      category: 'Research',
      image: '🧠',
      slug: 'science-of-reading'
    },
    {
      id: 9,
      title: 'Gamification in Literacy Learning',
      excerpt: 'Make reading and writing fun with game-based learning approaches that boost engagement and achievement.',
      author: 'Lisa Rodriguez',
      date: '2025-06-20',
      readTime: '6 min read',
      views: 1560,
      category: 'Technology',
      image: '🎮',
      slug: 'gamification-literacy-learning'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link href="/literacy" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-200">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Literacy</span>
            </Link>

            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Literacy Blog
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Expert insights, research-based strategies, and practical tips for literacy educators
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12 space-y-6">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Post Header */}
                  <div className="p-6 border-b border-gray-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </span>
                      <div className="text-4xl">{post.image}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Post Meta */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white text-sm">{post.author}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{post.date}</div>
                      </div>
                      
                      <Link href={`/literacy/blog/${post.slug}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                        >
                          Read More →
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No posts found</h3>
                <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to get the latest literacy insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

