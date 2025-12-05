'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon as ArrowRight, 
  BookOpenIcon as BookOpen, 
  UsersIcon as Users, 
  TrophyIcon as Award, 
  ArrowDownTrayIcon as Download 
} from '@heroicons/react/24/outline';

const Hero = () => {
  const stats = [
    { icon: BookOpen, label: 'Learning Resources', value: '1000+' },
    { icon: Users, label: 'Active Learners', value: '50K+' },
    { icon: Award, label: 'Success Stories', value: '500+' },
    { icon: Download, label: 'Free Downloads', value: '10K+' },
  ];

  return (
    <section className="relative bg-[var(--background)] dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-[var(--foreground)] dark:text-white leading-tight"
              >
                Empower Your
                <span className="title"> Learning</span>
                <br />
                Journey
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-[var(--muted)] dark:text-gray-300 leading-relaxed"
              >
                Discover comprehensive literacy and numeracy resources, advance your career, 
                and access premium teaching materials. Join thousands of learners transforming 
                their educational experience.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/store">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 bg-[var(--primary)] dark:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--secondary)] dark:hover:bg-blue-600 transition-colors duration-200 shadow-lg"
                >
                  <span>Explore Store</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              
              <Link href="/store/free">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 border-2 border-[var(--primary)] dark:border-blue-400 text-[var(--primary)] dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-[var(--hover-bg)] dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <Download className="h-5 w-5" />
                  <span>Free Resources</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-[var(--primary)] dark:text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-[var(--foreground)] dark:text-white">{stat.value}</div>
                  <div className="text-sm text-[var(--muted)] dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] dark:from-blue-400 dark:to-purple-600 rounded-3xl p-8 shadow-2xl transition-colors duration-300">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 bg-[var(--card-bg)] dark:bg-slate-700 rounded-full p-3 shadow-lg transition-colors duration-300"
              >
                <BookOpen className="h-6 w-6 text-[var(--primary)] dark:text-blue-400" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 left-4 bg-[var(--card-bg)] dark:bg-slate-700 rounded-full p-3 shadow-lg transition-colors duration-300"
              >
                <Award className="h-6 w-6 text-[var(--secondary)] dark:text-purple-400" />
              </motion.div>

              {/* Main Illustration */}
              <div className="bg-[var(--card-bg)] dark:bg-slate-700 rounded-2xl p-8 text-center transition-colors duration-300">
                <div className="space-y-4">
                  <div className="text-6xl">📚</div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)] dark:text-white">Start Learning Today</h3>
                  <p className="text-[var(--muted)] dark:text-gray-300">Join our community of learners and educators</p>
                  
                  {/* Progress Indicators */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-[var(--muted)] dark:text-gray-400">
                      <span>Literacy Skills</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-[var(--track-bg)] dark:bg-slate-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 2, delay: 1.5 }}
                        className="bg-[var(--primary)] dark:bg-blue-500 h-2 rounded-full"
                      />
                    </div>
                    
                    <div className="flex justify-between text-sm text-[var(--muted)] dark:text-gray-400">
                      <span>Numeracy Skills</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-[var(--track-bg)] dark:bg-slate-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '78%' }}
                        transition={{ duration: 2, delay: 1.7 }}
                        className="bg-[var(--secondary)] dark:bg-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-20 h-20 bg-[var(--soft-secondary)] dark:bg-blue-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-[var(--soft-accent)] dark:bg-purple-200 rounded-full opacity-20"
        />
      </div>
    </section>
  );
};

export default Hero;

