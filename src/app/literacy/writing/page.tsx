'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  PencilSquareIcon as PenTool,
  ArrowLeftIcon as ArrowLeft,
  ArrowDownTrayIcon as Download,
  StarIcon as Star,
  DocumentCheckIcon as CheckCircle,
  SparklesIcon as Sparkles,
  ClipboardDocumentListIcon as ClipboardList
} from '@heroicons/react/24/outline';

const WritingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const categories = ['All', 'Templates', 'Prompts', 'Assessment', 'Grammar', 'Creative Writing'];

  const handleDownload = (toolTitle: string) => {
    setToastMessage(`Downloading "${toolTitle}"... This feature will be available soon!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handlePreview = (toolTitle: string) => {
    setToastMessage(`Opening preview for "${toolTitle}"... This feature will be available soon!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const tools = [
    {
      id: 1,
      title: 'Essay Writing Framework',
      description: 'Structured templates for argumentative, expository, and narrative essays with examples.',
      category: 'Templates',
      items: 25,
      downloads: 6800,
      rating: 4.9,
      icon: '📄',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Creative Writing Prompts Collection',
      description: '500+ engaging prompts to spark imagination and overcome writer\'s block.',
      category: 'Prompts',
      items: 500,
      downloads: 9200,
      rating: 5.0,
      icon: '✨',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Writing Rubrics Bundle',
      description: 'Comprehensive assessment rubrics for various writing styles and grade levels.',
      category: 'Assessment',
      items: 15,
      downloads: 4100,
      rating: 4.8,
      icon: '📊',
      color: 'green'
    },
    {
      id: 4,
      title: 'Grammar & Mechanics Worksheets',
      description: 'Interactive exercises covering punctuation, syntax, and sentence structure.',
      category: 'Grammar',
      items: 40,
      downloads: 7500,
      rating: 4.7,
      icon: '✍️',
      color: 'red'
    },
    {
      id: 5,
      title: 'Paragraph Structure Templates',
      description: 'Visual guides for organizing ideas with topic sentences, support, and conclusions.',
      category: 'Templates',
      items: 12,
      downloads: 5600,
      rating: 4.9,
      icon: '📝',
      color: 'yellow'
    },
    {
      id: 6,
      title: 'Peer Review Checklist',
      description: 'Structured forms to facilitate constructive peer feedback and revision.',
      category: 'Assessment',
      items: 8,
      downloads: 3800,
      rating: 4.8,
      icon: '🔍',
      color: 'indigo'
    },
    {
      id: 7,
      title: 'Story Starter Cards',
      description: 'Visual and written prompts to launch creative narratives and character development.',
      category: 'Creative Writing',
      items: 100,
      downloads: 8900,
      rating: 5.0,
      icon: '🎨',
      color: 'pink'
    },
    {
      id: 8,
      title: 'Research Paper Guide',
      description: 'Complete toolkit for academic writing including citation guides and organization templates.',
      category: 'Templates',
      items: 20,
      downloads: 4700,
      rating: 4.9,
      icon: '📚',
      color: 'teal'
    },
    {
      id: 9,
      title: 'Poetry Writing Workshop',
      description: 'Forms, techniques, and prompts for exploring various poetic styles and structures.',
      category: 'Creative Writing',
      items: 35,
      downloads: 3200,
      rating: 4.8,
      icon: '🎭',
      color: 'orange'
    },
    {
      id: 10,
      title: 'Editing Checklist Bundle',
      description: 'Self-editing tools focusing on clarity, coherence, and mechanical accuracy.',
      category: 'Assessment',
      items: 10,
      downloads: 5100,
      rating: 4.7,
      icon: '✅',
      color: 'gray'
    },
    {
      id: 11,
      title: 'Descriptive Writing Toolkit',
      description: 'Sensory detail charts, vocabulary lists, and practice exercises for vivid writing.',
      category: 'Templates',
      items: 18,
      downloads: 6300,
      rating: 4.9,
      icon: '🌈',
      color: 'cyan'
    },
    {
      id: 12,
      title: 'Daily Journal Prompts',
      description: 'Year-long collection of reflective and exploratory writing prompts.',
      category: 'Prompts',
      items: 365,
      downloads: 7800,
      rating: 4.8,
      icon: '📓',
      color: 'emerald'
    }
  ];

  const filteredTools = selectedCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
    green: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    red: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
    yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
    indigo: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300',
    pink: 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300',
    teal: 'bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300',
    orange: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300',
    gray: 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300',
    cyan: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300',
    emerald: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300',
  };

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
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
                  <PenTool className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Writing Tools & Resources
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Templates, prompts, and assessment tools to enhance writing instruction
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <ClipboardList className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">75+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Writing Tools</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Sparkles className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">1000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Resources</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Download className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">67K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Downloads</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <CheckCircle className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">4.8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</div>
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
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{tool.icon}</div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${colorClasses[tool.color as keyof typeof colorClasses]}`}>
                        {tool.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {tool.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {tool.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">
                      <span>{tool.items} {tool.items === 1 ? 'item' : 'items'}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold text-gray-900 dark:text-white">{tool.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Download className="h-4 w-4" />
                        <span>{tool.downloads.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleDownload(tool.title)}
                        className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 dark:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handlePreview(tool.title)}
                        className="px-4 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors duration-200"
                      >
                        Preview
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✍️</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No tools found</h3>
                <p className="text-gray-600 dark:text-gray-300">Try selecting a different category</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Writing Workshops
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join our interactive workshops to enhance your writing instruction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Teaching Narrative Writing', date: 'Dec 15, 2025', spots: '12 spots left', color: 'blue' },
              { title: 'Assessment Strategies', date: 'Dec 22, 2025', spots: '8 spots left', color: 'green' },
              { title: 'Creative Writing Workshop', date: 'Jan 5, 2026', spots: '15 spots left', color: 'purple' }
            ].map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl border border-blue-100 dark:border-slate-500"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{workshop.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{workshop.date}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-6">{workshop.spots}</p>
                <Link href="/events">
                  <button className="w-full bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
                    Register Now
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Unlock Premium Writing Resources
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get access to our complete collection of writing tools and resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/store">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Browse Store
                </button>
              </Link>
              <Link href="/store/free">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                  Free Resources
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-2xl z-50 max-w-md"
        >
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            <p className="font-medium">{toastMessage}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WritingPage;

