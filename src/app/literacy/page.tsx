'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon as BookOpen, 
  DocumentTextIcon as FileText, 
  PencilIcon as PenTool, 
  ArrowRightIcon as ArrowRight, 
  ClockIcon as Clock, 
  EyeIcon as Eye 
} from '@heroicons/react/24/outline';

const LiteracyPage = () => {
  const features = [
    {
      icon: FileText,
      title: 'Interactive Blog',
      description: 'Expert insights, teaching strategies, and literacy research',
      href: '/literacy/blog',
      stats: { posts: '150+', readers: '25K+' }
    },
    {
      icon: BookOpen,
      title: 'Reading Resources',
      description: 'Comprehensive guides for all reading levels',
      href: '/literacy/reading',
      stats: { resources: '200+', downloads: '50K+' }
    },
    {
      icon: PenTool,
      title: 'Writing Tools',
      description: 'Templates, prompts, and assessment tools',
      href: '/literacy/writing',
      stats: { tools: '75+', users: '15K+' }
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Effective Reading Strategies for Elementary Students',
      excerpt: 'Discover proven techniques to help young learners develop strong reading foundations...',
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
      excerpt: 'How to integrate technology effectively while maintaining focus on core literacy skills...',
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
      excerpt: 'Practical methods to help students expand their vocabulary naturally...',
      author: 'Lisa Rodriguez',
      date: '2025-07-05',
      readTime: '4 min read',
      views: 1450,
      category: 'Vocabulary',
      image: '🔤',
      slug: 'building-vocabulary-context-clues'
    }
  ];

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
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full transition-colors duration-300">
                <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Literacy Excellence
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive resources, expert insights, and proven strategies to enhance 
              reading and writing skills for learners of all ages.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-blue-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
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
                      className="w-full flex items-center justify-center space-x-2 bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
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

      {/* Blog Section */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest research, strategies, and insights 
              from literacy education experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-700 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Post Header */}
                <div className="p-6 border-b border-gray-100 dark:border-slate-600">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="text-4xl">{post.image}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
                      <div className="font-medium text-gray-900 dark:text-white">{post.author}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{post.date}</div>
                    </div>
                    
                    <Link href={`/literacy/blog/${post.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                      >
                        Read More →
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Blog Posts CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/literacy/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-lg"
              >
                View All Blog Posts
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Enhance Your Literacy Teaching?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Access our comprehensive collection of literacy resources, tools, and materials 
              designed to support effective teaching and learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/store">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Browse Store
                </motion.button>
              </Link>
              <Link href="/store/free">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Free Resources
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LiteracyPage;
