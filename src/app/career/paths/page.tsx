'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon as ArrowLeft,
  MagnifyingGlassIcon as Search,
  ArrowTrendingUpIcon as TrendingUp,
  MapPinIcon as MapPin,
  BriefcaseIcon as Briefcase,
  AcademicCapIcon as AcademicCap
} from '@heroicons/react/24/outline';

const CareerPathsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');

  const sectors = ['All', 'K-12 Education', 'Higher Education', 'Corporate', 'Publishing', 'EdTech', 'Consulting'];

  const careerPaths = [
    {
      id: 1,
      title: 'Literacy Specialist',
      description: 'Support struggling readers and implement comprehensive literacy programs across schools.',
      requirements: ['Master\'s in Reading Education', '3+ years teaching experience', 'State literacy certification'],
      salary: '$55,000 - $75,000',
      growth: '+8% annually',
      locations: ['Schools', 'Learning Centers', 'Libraries'],
      icon: '📚',
      sector: 'K-12 Education',
      demand: 'High'
    },
    {
      id: 2,
      title: 'Curriculum Developer',
      description: 'Design and develop educational materials, programs, and comprehensive curricula.',
      requirements: ['Education degree', 'Curriculum design experience', 'Technology proficiency'],
      salary: '$60,000 - $85,000',
      growth: '+12% annually',
      locations: ['Publishing', 'EdTech', 'School Districts'],
      icon: '📝',
      sector: 'Publishing',
      demand: 'Very High'
    },
    {
      id: 3,
      title: 'Educational Consultant',
      description: 'Provide expert guidance to schools and educational organizations on best practices.',
      requirements: ['Advanced degree', '5+ years experience', 'Strong consulting skills'],
      salary: '$70,000 - $120,000',
      growth: '+15% annually',
      locations: ['Independent', 'Consulting Firms', 'Government'],
      icon: '💼',
      sector: 'Consulting',
      demand: 'High'
    },
    {
      id: 4,
      title: 'Instructional Designer',
      description: 'Create engaging learning experiences and training materials using technology.',
      requirements: ['Instructional design degree', 'Technology proficiency', 'Creative skills'],
      salary: '$65,000 - $95,000',
      growth: '+10% annually',
      locations: ['Corporate', 'Online Education', 'Training Companies'],
      icon: '🎨',
      sector: 'Corporate',
      demand: 'Very High'
    },
    {
      id: 5,
      title: 'Reading Coach',
      description: 'Work one-on-one with teachers to improve reading instruction and student outcomes.',
      requirements: ['Teaching certification', 'Literacy expertise', 'Coaching training'],
      salary: '$50,000 - $70,000',
      growth: '+7% annually',
      locations: ['Schools', 'Districts', 'Education Services'],
      icon: '🎓',
      sector: 'K-12 Education',
      demand: 'High'
    },
    {
      id: 6,
      title: 'EdTech Product Manager',
      description: 'Lead development of educational technology products and learning platforms.',
      requirements: ['Education background', 'Product management experience', 'Tech savvy'],
      salary: '$85,000 - $130,000',
      growth: '+18% annually',
      locations: ['EdTech Companies', 'Startups', 'Tech Giants'],
      icon: '💻',
      sector: 'EdTech',
      demand: 'Extreme'
    },
    {
      id: 7,
      title: 'Assessment Specialist',
      description: 'Develop and analyze educational assessments to measure learning outcomes.',
      requirements: ['Advanced degree', 'Statistics knowledge', 'Assessment experience'],
      salary: '$65,000 - $95,000',
      growth: '+9% annually',
      locations: ['Testing Companies', 'Districts', 'Research Institutions'],
      icon: '📊',
      sector: 'K-12 Education',
      demand: 'Medium'
    },
    {
      id: 8,
      title: 'University Professor',
      description: 'Teach future educators and conduct research in literacy and education.',
      requirements: ['Doctoral degree', 'Research experience', 'Teaching experience'],
      salary: '$75,000 - $120,000',
      growth: '+6% annually',
      locations: ['Universities', 'Colleges', 'Research Centers'],
      icon: '👨‍🏫',
      sector: 'Higher Education',
      demand: 'Medium'
    },
    {
      id: 9,
      title: 'Content Writer (Education)',
      description: 'Create educational content, lesson plans, and teaching resources.',
      requirements: ['Education degree', 'Strong writing skills', 'Subject expertise'],
      salary: '$45,000 - $70,000',
      growth: '+11% annually',
      locations: ['Publishing', 'EdTech', 'Freelance'],
      icon: '✍️',
      sector: 'Publishing',
      demand: 'High'
    },
    {
      id: 10,
      title: 'Learning Experience Designer',
      description: 'Design holistic learning experiences across multiple platforms and modalities.',
      requirements: ['Design background', 'Education knowledge', 'UX expertise'],
      salary: '$70,000 - $105,000',
      growth: '+16% annually',
      locations: ['EdTech', 'Corporate', 'Agencies'],
      icon: '🎯',
      sector: 'EdTech',
      demand: 'Very High'
    },
    {
      id: 11,
      title: 'Professional Development Coordinator',
      description: 'Plan and deliver training programs for educators to enhance their practice.',
      requirements: ['Teaching experience', 'Training skills', 'Leadership abilities'],
      salary: '$55,000 - $80,000',
      growth: '+8% annually',
      locations: ['Districts', 'Education Organizations', 'Non-profits'],
      icon: '📋',
      sector: 'K-12 Education',
      demand: 'High'
    },
    {
      id: 12,
      title: 'Education Policy Analyst',
      description: 'Research and analyze education policies to inform decision-making.',
      requirements: ['Advanced degree', 'Policy experience', 'Research skills'],
      salary: '$65,000 - $100,000',
      growth: '+7% annually',
      locations: ['Government', 'Think Tanks', 'Advocacy Groups'],
      icon: '🏛️',
      sector: 'Consulting',
      demand: 'Medium'
    }
  ];

  const filteredPaths = careerPaths.filter(path => {
    const matchesSearch = path.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          path.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === 'All' || path.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  const demandColors: { [key: string]: string } = {
    'Medium': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
    'High': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Very High': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Extreme': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
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
                  <Briefcase className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Career Paths
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore diverse career opportunities in education and literacy fields
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <Briefcase className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Career Paths</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">+10%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg Growth</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cities</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center border border-gray-200 dark:border-slate-700">
                <AcademicCap className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Professionals</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search career paths..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                />
              </div>
            </div>

            {/* Sector Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {sectors.map((sector) => (
                  <button
                    key={sector}
                    onClick={() => setSelectedSector(sector)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedSector === sector
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500'
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Career Paths Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Path Header */}
                  <div className="p-6 border-b border-gray-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{path.icon}</div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${demandColors[path.demand]}`}>
                          {path.demand} Demand
                        </span>
                        <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
                          {path.growth} growth
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{path.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{path.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{path.salary}</div>
                      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{path.locations.length} sectors</span>
                      </div>
                    </div>
                  </div>

                  {/* Path Details */}
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {path.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Work Locations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.locations.map((location) => (
                          <span key={location} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-3 py-1 rounded-full">
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-purple-600 dark:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200"
                    >
                      Learn More & Apply
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredPaths.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No career paths found</h3>
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
            <AcademicCap className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Build the skills you need for your dream career in education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/career/skills">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Explore Skills Development
                </button>
              </Link>
              <Link href="/events">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
                  Attend Career Events
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerPathsPage;

