'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon as BookOpen, 
  CalculatorIcon as Calculator, 
  BriefcaseIcon as Briefcase, 
  ShoppingCartIcon as ShoppingCart, 
  ArrowRightIcon as ArrowRight, 
  UsersIcon as Users, 
  StarIcon as Star, 
  ArrowTrendingUpIcon as TrendingUp 
} from '@heroicons/react/24/outline';

const FeaturedSections = () => {
  const sections = [
    {
      id: 'literacy',
      title: 'Literacy',
      description: 'Comprehensive reading and writing resources to enhance language skills',
      icon: BookOpen,
      color: 'blue',
      features: ['Interactive Blog', 'Reading Guides', 'Writing Tools', 'Assessment Resources'],
      stats: { users: '25K+', rating: 4.8, growth: '+15%' },
      href: '/literacy',
      image: '📖'
    },
    {
      id: 'numeracy',
      title: 'Numeracy',
      description: 'Visual galleries, articles, and books to master mathematical concepts',
      icon: Calculator,
      color: 'green',
      features: ['Visual Gallery', 'Expert Articles', 'Digital Books', 'Practice Problems'],
      stats: { users: '18K+', rating: 4.7, growth: '+22%' },
      href: '/numeracy',
      image: '🔢'
    },
    {
      id: 'career',
      title: 'Career Development',
      description: 'Professional growth resources and career guidance for educators',
      icon: Briefcase,
      color: 'purple',
      features: ['Career Paths', 'Skill Building', 'Success Stories', 'Mentorship'],
      stats: { users: '12K+', rating: 4.9, growth: '+28%' },
      href: '/career',
      image: '🚀'
    },
    {
      id: 'store',
      title: 'Store',
      description: 'Premium teaching materials, books, and free downloadable resources',
      icon: ShoppingCart,
      color: 'orange',
      features: ['Digital Books', 'Teaching Materials', 'Free Downloads', 'Secure Payment'],
      stats: { users: '30K+', rating: 4.8, growth: '+35%' },
      href: '/store',
      image: '🛒'
    }
  ];

  const colorClasses: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
    blue: {
      bg: 'from-blue-500 to-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:border-blue-300'
    },
    green: {
      bg: 'from-green-500 to-green-600',
      text: 'text-green-600',
      border: 'border-green-200',
      hover: 'hover:border-green-300'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      text: 'text-purple-600',
      border: 'border-purple-200',
      hover: 'hover:border-purple-300'
    },
    orange: {
      bg: 'from-orange-500 to-orange-600',
      text: 'text-orange-600',
      border: 'border-orange-200',
      hover: 'hover:border-orange-300'
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our Learning Sections
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover comprehensive resources designed to enhance your educational journey 
            across literacy, numeracy, career development, and premium materials.
          </p>
        </motion.div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-white dark:bg-slate-700 rounded-2xl shadow-lg border-2 ${(colorClasses as any)[section.color].border} ${(colorClasses as any)[section.color].hover} transition-all duration-300 hover:shadow-xl overflow-hidden group`}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${(colorClasses as any)[section.color].bg} p-6 text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <section.icon className="h-8 w-8" />
                    <div className="text-4xl">{section.image}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                  <p className="text-white/90">{section.description}</p>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {section.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${(colorClasses as any)[section.color].bg}`} />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-slate-600 rounded-lg transition-colors duration-300">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                    </div>
                    <div className="font-bold text-gray-900 dark:text-white">{section.stats.users}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="h-4 w-4 text-yellow-500 dark:text-yellow-400 mr-1" />
                    </div>
                    <div className="font-bold text-gray-900 dark:text-white">{section.stats.rating}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-4 w-4 text-green-500 dark:text-green-400 mr-1" />
                    </div>
                    <div className="font-bold text-gray-900 dark:text-white">{section.stats.growth}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Growth</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={section.href}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-center space-x-2 ${(colorClasses as any)[section.color].text} border-2 ${(colorClasses as any)[section.color].border} px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 group-hover:shadow-md`}
                  >
                    <span>Explore {section.title}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-slate-600 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of educators and learners who are already transforming their 
              educational experience with our comprehensive resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/store">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                >
                  Browse Store
                </motion.button>
              </Link>
              <Link href="/store/free">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors duration-200"
                >
                  Get Free Resources
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSections;

