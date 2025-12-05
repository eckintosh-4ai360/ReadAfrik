'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon as BookOpen,
  ArrowLeftIcon as ArrowLeft,
  ArrowDownTrayIcon as Download,
  StarIcon as Star,
  AcademicCapIcon as AcademicCap,
  UserGroupIcon as Users,
  DocumentTextIcon as Document
} from '@heroicons/react/24/outline';

const ReadingPage = () => {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const levels = ['All', 'Kindergarten', 'Elementary', 'Middle School', 'High School', 'Adult'];

  const handleDownload = (resourceTitle: string) => {
    setToastMessage(`Downloading "${resourceTitle}"... This feature will be available soon!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handlePreview = (resourceTitle: string) => {
    setToastMessage(`Opening preview for "${resourceTitle}"... This feature will be available soon!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const resources = [
    {
      id: 1,
      title: 'Phonics Fundamentals Workbook',
      description: 'Complete phonics instruction with interactive exercises and assessments. Perfect for early readers.',
      level: 'Kindergarten',
      type: 'Workbook',
      pages: 45,
      downloads: 5200,
      rating: 4.9,
      icon: '📖',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Comprehension Strategies Guide',
      description: 'Research-based strategies to improve reading comprehension across all subjects.',
      level: 'Elementary',
      type: 'Guide',
      pages: 32,
      downloads: 3800,
      rating: 4.8,
      icon: '🧠',
      color: 'green'
    },
    {
      id: 3,
      title: 'Vocabulary Building Activities',
      description: 'Engaging activities to expand vocabulary through context and application.',
      level: 'Middle School',
      type: 'Activity Pack',
      pages: 28,
      downloads: 4100,
      rating: 4.7,
      icon: '📚',
      color: 'purple'
    },
    {
      id: 4,
      title: 'Critical Reading Skills Workbook',
      description: 'Advanced reading analysis techniques for complex texts and literature.',
      level: 'High School',
      type: 'Workbook',
      pages: 52,
      downloads: 2900,
      rating: 4.9,
      icon: '🎓',
      color: 'red'
    },
    {
      id: 5,
      title: 'Fluency Practice Passages',
      description: 'Leveled passages with tracking tools to build reading fluency and expression.',
      level: 'Elementary',
      type: 'Practice Materials',
      pages: 40,
      downloads: 6700,
      rating: 4.8,
      icon: '⚡',
      color: 'yellow'
    },
    {
      id: 6,
      title: 'Reading Assessment Toolkit',
      description: 'Comprehensive assessment tools to measure reading progress and identify areas for growth.',
      level: 'All',
      type: 'Assessment',
      pages: 38,
      downloads: 4500,
      rating: 4.9,
      icon: '📊',
      color: 'indigo'
    },
    {
      id: 7,
      title: 'Adult Literacy Foundation',
      description: 'Respectful, age-appropriate materials for adult learners developing reading skills.',
      level: 'Adult',
      type: 'Curriculum',
      pages: 65,
      downloads: 2200,
      rating: 4.8,
      icon: '👨‍🎓',
      color: 'gray'
    },
    {
      id: 8,
      title: 'Sight Words Mastery Program',
      description: 'Complete sight word curriculum with games, flashcards, and tracking tools.',
      level: 'Kindergarten',
      type: 'Program',
      pages: 50,
      downloads: 8100,
      rating: 5.0,
      icon: '👀',
      color: 'pink'
    },
    {
      id: 9,
      title: 'Literary Analysis Framework',
      description: 'Structured approach to analyzing literature with templates and examples.',
      level: 'High School',
      type: 'Framework',
      pages: 44,
      downloads: 3300,
      rating: 4.7,
      icon: '📝',
      color: 'teal'
    }
  ];

  const filteredResources = selectedLevel === 'All' 
    ? resources 
    : resources.filter(resource => resource.level === selectedLevel || resource.level === 'All');

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
    green: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
    red: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
    yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
    indigo: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300',
    gray: 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300',
    pink: 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300',
    teal: 'bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300',
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
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
                  <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Reading Resources
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive reading materials and guides for all learning levels
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Document className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Resources</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Download className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Downloads</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Users className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">15K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">4.8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</div>
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
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{resource.icon}</div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${colorClasses[resource.color as keyof typeof colorClasses]}`}>
                        {resource.level}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {resource.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">
                      <div className="flex items-center space-x-4">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{resource.pages} pages</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold text-gray-900 dark:text-white">{resource.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Download className="h-4 w-4" />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleDownload(resource.title)}
                        className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 dark:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handlePreview(resource.title)}
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
            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No resources found</h3>
                <p className="text-gray-600 dark:text-gray-300">Try selecting a different level</p>
              </div>
            )}
          </motion.div>
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
            <AcademicCap className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Need Custom Resources?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We can create tailored reading materials specifically for your classroom needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/store">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Browse Premium Resources
                </button>
              </Link>
              <Link href="/store/free">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                  Get Free Materials
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

export default ReadingPage;

