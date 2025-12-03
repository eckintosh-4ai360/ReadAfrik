'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon as ArrowLeft,
  MagnifyingGlassIcon as Search,
  ClockIcon as Clock,
  EyeIcon as Eye,
  TagIcon as Tag
} from '@heroicons/react/24/outline';

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Teaching Methods', 'Research', 'Technology', 'Assessment', 'Curriculum', 'Student Engagement'];

  const articles = [
    {
      id: 1,
      title: 'Making Math Visual: The Power of Concrete Representations',
      excerpt: 'Explore research-backed strategies for using visual aids and manipulatives to enhance mathematical understanding across all grade levels.',
      author: 'Dr. Emily Chen',
      date: '2025-07-12',
      readTime: '8 min read',
      views: 3200,
      category: 'Teaching Methods',
      image: '🎨',
      slug: 'making-math-visual'
    },
    {
      id: 2,
      title: 'The Science of Number Sense Development',
      excerpt: 'Understanding how children develop number sense and practical strategies to support this critical foundation.',
      author: 'Prof. James Wilson',
      date: '2025-07-10',
      readTime: '10 min read',
      views: 2800,
      category: 'Research',
      image: '🔬',
      slug: 'science-of-number-sense'
    },
    {
      id: 3,
      title: 'Gamification in Mathematics Education',
      excerpt: 'How game-based learning approaches can increase student engagement and mathematical achievement.',
      author: 'Sarah Martinez',
      date: '2025-07-08',
      readTime: '6 min read',
      views: 4100,
      category: 'Technology',
      image: '🎮',
      slug: 'gamification-in-math'
    },
    {
      id: 4,
      title: 'Formative Assessment Strategies for Math',
      excerpt: 'Effective techniques for assessing mathematical understanding in real-time and adjusting instruction accordingly.',
      author: 'Dr. Michael Brown',
      date: '2025-07-05',
      readTime: '7 min read',
      views: 2500,
      category: 'Assessment',
      image: '📊',
      slug: 'formative-assessment-math'
    },
    {
      id: 5,
      title: 'Building Mathematical Resilience in Students',
      excerpt: 'Developing growth mindset and perseverance in mathematics through targeted instructional practices.',
      author: 'Lisa Thompson',
      date: '2025-07-03',
      readTime: '9 min read',
      views: 3600,
      category: 'Student Engagement',
      image: '💪',
      slug: 'building-math-resilience'
    },
    {
      id: 6,
      title: 'Differentiation in the Math Classroom',
      excerpt: 'Practical strategies for meeting diverse learner needs while maintaining rigorous mathematical standards.',
      author: 'Dr. Emily Chen',
      date: '2025-07-01',
      readTime: '8 min read',
      views: 2900,
      category: 'Teaching Methods',
      image: '🎯',
      slug: 'differentiation-in-math'
    },
    {
      id: 7,
      title: 'The Role of Talk in Mathematics Learning',
      excerpt: 'How mathematical discourse and collaborative problem-solving enhance conceptual understanding.',
      author: 'Prof. David Lee',
      date: '2025-06-28',
      readTime: '7 min read',
      views: 2200,
      category: 'Research',
      image: '💬',
      slug: 'math-talk-learning'
    },
    {
      id: 8,
      title: 'Integrating Real-World Math Applications',
      excerpt: 'Connecting mathematical concepts to authentic contexts that resonate with students\' lives.',
      author: 'Sarah Martinez',
      date: '2025-06-25',
      readTime: '6 min read',
      views: 3400,
      category: 'Curriculum',
      image: '🌍',
      slug: 'real-world-math-applications'
    },
    {
      id: 9,
      title: 'Digital Tools for Mathematical Thinking',
      excerpt: 'Leveraging technology to deepen mathematical reasoning and visualization skills.',
      author: 'Dr. Michael Brown',
      date: '2025-06-22',
      readTime: '9 min read',
      views: 3800,
      category: 'Technology',
      image: '💻',
      slug: 'digital-tools-math-thinking'
    },
    {
      id: 10,
      title: 'Teaching Problem-Solving Strategies',
      excerpt: 'Explicit instruction in mathematical problem-solving processes and heuristics.',
      author: 'Lisa Thompson',
      date: '2025-06-20',
      readTime: '8 min read',
      views: 2700,
      category: 'Teaching Methods',
      image: '🧩',
      slug: 'teaching-problem-solving'
    },
    {
      id: 11,
      title: 'Math Anxiety: Understanding and Intervention',
      excerpt: 'Research-based approaches to identifying and addressing mathematics anxiety in learners.',
      author: 'Prof. James Wilson',
      date: '2025-06-18',
      readTime: '10 min read',
      views: 4200,
      category: 'Research',
      image: '🧠',
      slug: 'math-anxiety-intervention'
    },
    {
      id: 12,
      title: 'Error Analysis as a Learning Tool',
      excerpt: 'Using student mistakes as opportunities for deeper mathematical understanding.',
      author: 'Dr. Emily Chen',
      date: '2025-06-15',
      readTime: '7 min read',
      views: 2600,
      category: 'Assessment',
      image: '🔍',
      slug: 'error-analysis-learning'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                Expert Articles
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Research-based articles on numeracy education and mathematical teaching strategies
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
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

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Article Header */}
                  <div className="p-6 border-b border-gray-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-3 py-1 rounded-full flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {article.category}
                      </span>
                      <div className="text-4xl">{article.image}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Article Meta */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{article.views}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white text-sm">{article.author}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{article.date}</div>
                      </div>
                      
                      <Link href={`/numeracy/articles/${article.slug}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm"
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
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No articles found</h3>
                <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Stay Updated on Math Education
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest research and teaching strategies delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;

