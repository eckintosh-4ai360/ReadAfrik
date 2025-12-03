'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon as ArrowLeft,
  MagnifyingGlassIcon as Search,
  TrophyIcon as Award,
  ClockIcon as Clock,
  UsersIcon as Users,
  CheckCircleIcon as CheckCircle,
  PlayIcon as Play
} from '@heroicons/react/24/outline';

const SkillsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Leadership', 'Technology', 'Communication', 'Assessment', 'Pedagogy', 'Research'];

  const courses = [
    {
      id: 1,
      title: 'Educational Leadership Fundamentals',
      description: 'Develop essential leadership skills for managing teams, driving change, and inspiring excellence in educational settings.',
      category: 'Leadership',
      level: 'Intermediate',
      duration: '6 weeks',
      lessons: 24,
      enrolled: 1200,
      rating: 4.9,
      icon: '👑',
      skills: ['Team Management', 'Strategic Planning', 'Decision Making'],
      price: 'Free'
    },
    {
      id: 2,
      title: 'Digital Tools for Educators',
      description: 'Master the latest educational technology tools and platforms to enhance teaching and learning.',
      category: 'Technology',
      level: 'Beginner',
      duration: '4 weeks',
      lessons: 16,
      enrolled: 2500,
      rating: 4.8,
      icon: '💻',
      skills: ['EdTech Tools', 'Digital Literacy', 'Online Learning'],
      price: 'Free'
    },
    {
      id: 3,
      title: 'Effective Communication for Educators',
      description: 'Enhance your ability to communicate with students, parents, and colleagues effectively.',
      category: 'Communication',
      level: 'Beginner',
      duration: '3 weeks',
      lessons: 12,
      enrolled: 1800,
      rating: 4.9,
      icon: '💬',
      skills: ['Public Speaking', 'Active Listening', 'Conflict Resolution'],
      price: 'Free'
    },
    {
      id: 4,
      title: 'Data-Driven Assessment Design',
      description: 'Learn to create and analyze assessments that provide meaningful insights into student learning.',
      category: 'Assessment',
      level: 'Advanced',
      duration: '8 weeks',
      lessons: 32,
      enrolled: 950,
      rating: 4.7,
      icon: '📊',
      skills: ['Assessment Design', 'Data Analysis', 'Rubric Development'],
      price: '$49'
    },
    {
      id: 5,
      title: 'Differentiated Instruction Strategies',
      description: 'Master techniques to meet diverse learner needs in your classroom.',
      category: 'Pedagogy',
      level: 'Intermediate',
      duration: '5 weeks',
      lessons: 20,
      enrolled: 1650,
      rating: 4.9,
      icon: '🎯',
      skills: ['Differentiation', 'UDL Principles', 'Adaptive Teaching'],
      price: 'Free'
    },
    {
      id: 6,
      title: 'Action Research in Education',
      description: 'Conduct meaningful research in your own educational context to improve practice.',
      category: 'Research',
      level: 'Advanced',
      duration: '10 weeks',
      lessons: 40,
      enrolled: 720,
      rating: 4.8,
      icon: '🔬',
      skills: ['Research Methods', 'Data Collection', 'Analysis'],
      price: '$79'
    },
    {
      id: 7,
      title: 'Curriculum Development Essentials',
      description: 'Design coherent, standards-aligned curricula that engage learners and promote achievement.',
      category: 'Pedagogy',
      level: 'Intermediate',
      duration: '6 weeks',
      lessons: 24,
      enrolled: 1400,
      rating: 4.8,
      icon: '📋',
      skills: ['Curriculum Design', 'Standards Alignment', 'Unit Planning'],
      price: '$39'
    },
    {
      id: 8,
      title: 'Building Professional Learning Communities',
      description: 'Create and sustain collaborative professional learning communities in your school.',
      category: 'Leadership',
      level: 'Intermediate',
      duration: '4 weeks',
      lessons: 16,
      enrolled: 890,
      rating: 4.7,
      icon: '👥',
      skills: ['Collaboration', 'Facilitation', 'Continuous Improvement'],
      price: 'Free'
    },
    {
      id: 9,
      title: 'Learning Management Systems Mastery',
      description: 'Become proficient in popular LMS platforms and maximize their potential.',
      category: 'Technology',
      level: 'Beginner',
      duration: '3 weeks',
      lessons: 12,
      enrolled: 2100,
      rating: 4.9,
      icon: '🖥️',
      skills: ['LMS Administration', 'Course Design', 'Student Engagement'],
      price: 'Free'
    },
    {
      id: 10,
      title: 'Grant Writing for Education',
      description: 'Learn to write compelling grant proposals to secure funding for educational initiatives.',
      category: 'Leadership',
      level: 'Advanced',
      duration: '5 weeks',
      lessons: 20,
      enrolled: 650,
      rating: 4.8,
      icon: '💰',
      skills: ['Grant Writing', 'Proposal Development', 'Budget Planning'],
      price: '$59'
    },
    {
      id: 11,
      title: 'Student-Centered Pedagogy',
      description: 'Transform your teaching with student-centered approaches that promote active learning.',
      category: 'Pedagogy',
      level: 'Beginner',
      duration: '4 weeks',
      lessons: 16,
      enrolled: 1950,
      rating: 4.9,
      icon: '🎓',
      skills: ['Active Learning', 'Student Voice', 'Inquiry-Based Learning'],
      price: 'Free'
    },
    {
      id: 12,
      title: 'Educational Policy and Advocacy',
      description: 'Understand education policy and develop skills to advocate for meaningful change.',
      category: 'Leadership',
      level: 'Advanced',
      duration: '7 weeks',
      lessons: 28,
      enrolled: 580,
      rating: 4.7,
      icon: '🏛️',
      skills: ['Policy Analysis', 'Advocacy', 'Systems Thinking'],
      price: '$49'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const levelColors: { [key: string]: string } = {
    'Beginner': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Advanced': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link href="/career" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8 transition-colors duration-200">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Career</span>
            </Link>

            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full">
                  <Award className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Skills Development
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Build essential skills for educational leadership and excellence
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Play className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">40+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Courses</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">15K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">2000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Completions</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Award className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
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
                  placeholder="Search courses and skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
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
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{course.icon}</div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${levelColors[course.level]}`}>
                        {course.level}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {course.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Skills You'll Learn:</div>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill) => (
                          <span key={skill} className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <span>•</span>
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold text-gray-900 dark:text-white">{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{course.enrolled.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{course.price}</div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-purple-600 dark:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200"
                      >
                        Enroll Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No courses found</h3>
                <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CheckCircle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Start Building Your Skills Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of educators advancing their careers through professional development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/career/paths">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Explore Career Paths
                </button>
              </Link>
              <Link href="/events">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
                  View Events
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;

