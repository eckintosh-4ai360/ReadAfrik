'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon as Briefcase, 
  ArrowTrendingUpIcon as TrendingUp, 
  TrophyIcon as Award, 
  UsersIcon as Users, 
  ArrowRightIcon as ArrowRight, 
  MapPinIcon as MapPin, 
  ClockIcon as Clock,
  MagnifyingGlassIcon as Search 
} from '@heroicons/react/24/outline';

const CareerPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const features = [
    {
      icon: TrendingUp,
      title: 'Career Paths',
      description: 'Explore diverse opportunities in education and literacy',
      href: '/career/paths',
      stats: { paths: '25+', professionals: '500+' }
    },
    {
      icon: Award,
      title: 'Skills Development',
      description: 'Build essential skills for educational leadership',
      href: '/career/skills',
      stats: { courses: '40+', completions: '2K+' }
    },
    {
      icon: Users,
      title: 'Success Stories',
      description: 'Learn from inspiring career journeys',
      href: '/career/stories',
      stats: { stories: '100+', inspiration: '10K+' }
    }
  ];

  const careerPaths = [
    {
      id: 1,
      title: 'Literacy Specialist',
      description: 'Support struggling readers and implement literacy programs',
      requirements: ['Master\'s in Reading Education', '3+ years teaching experience', 'Literacy certification'],
      salary: '$55,000 - $75,000',
      growth: '+8% annually',
      locations: ['Schools', 'Learning Centers', 'Libraries'],
      icon: '📚'
    },
    {
      id: 2,
      title: 'Curriculum Developer',
      description: 'Design and develop educational materials and programs',
      requirements: ['Education degree', 'Curriculum design experience', 'Technology skills'],
      salary: '$60,000 - $85,000',
      growth: '+12% annually',
      locations: ['Publishing', 'EdTech', 'School Districts'],
      icon: '📝'
    },
    {
      id: 3,
      title: 'Educational Consultant',
      description: 'Provide expertise to schools and educational organizations',
      requirements: ['Advanced degree', '5+ years experience', 'Consulting skills'],
      salary: '$70,000 - $120,000',
      growth: '+15% annually',
      locations: ['Independent', 'Consulting Firms', 'Government'],
      icon: '💼'
    },
    {
      id: 4,
      title: 'Instructional Designer',
      description: 'Create engaging learning experiences and training materials',
      requirements: ['Instructional design degree', 'Technology proficiency', 'Creative skills'],
      salary: '$65,000 - $95,000',
      growth: '+10% annually',
      locations: ['Corporate', 'Online Education', 'Training Companies'],
      icon: '🎨'
    }
  ];

  const successStories = [
    {
      id: 1,
      name: 'Sarah Martinez',
      role: 'Reading Specialist → Curriculum Director',
      company: 'Metro School District',
      story: 'Started as a reading specialist and now leads curriculum development for 50+ schools',
      achievement: 'Improved district reading scores by 25%',
      image: '👩‍🏫',
      years: '8 years'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Teacher → EdTech Entrepreneur',
      company: 'LearningTech Solutions',
      story: 'Founded a successful educational technology company after 10 years in the classroom',
      achievement: 'Reached 100K+ students globally',
      image: '👨‍💻',
      years: '12 years'
    },
    {
      id: 3,
      name: 'Dr. Amanda Johnson',
      role: 'Literacy Coach → University Professor',
      company: 'State University',
      story: 'Transitioned from K-12 literacy coaching to training future educators',
      achievement: 'Published 15+ research papers',
      image: '👩‍🎓',
      years: '15 years'
    }
  ];

  const filteredCareerPaths = careerPaths.filter(path => {
    const matchesSearch = path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         path.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const filteredSuccessStories = successStories.filter(story => {
    const matchesSearch = story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.story.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
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
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full transition-colors duration-300">
                <Briefcase className="h-12 w-12 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Career Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advance your educational career with comprehensive guidance, skill development 
              resources, and inspiring success stories from industry professionals.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 p-4 transition-colors duration-300">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search careers and success stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-slate-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors duration-200"
                />
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-purple-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-6 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
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
                      className="w-full flex items-center justify-center space-x-2 bg-purple-600 dark:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200"
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

      {/* Career Paths Section */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Career Paths
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover exciting opportunities in education and literacy fields 
              with detailed information about requirements and growth potential. {filteredCareerPaths.length} paths found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredCareerPaths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-700 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Path Header */}
                <div className="p-6 border-b border-gray-100 dark:border-slate-600">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{path.icon}</div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Growth</div>
                      <div className="font-bold text-green-600 dark:text-green-400">{path.growth}</div>
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
                          <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full" />
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
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/career/paths">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 dark:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200 shadow-lg"
              >
                Explore All Career Paths
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get inspired by professionals who have built successful careers 
              in education and literacy fields. {filteredSuccessStories.length} stories found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {filteredSuccessStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Story Header */}
                <div className="p-6 border-b border-gray-100 dark:border-slate-700">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{story.image}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{story.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{story.company}</p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm px-3 py-1 rounded-full inline-block mb-4">
                    {story.role}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {story.story}
                  </p>
                </div>

                {/* Story Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Key Achievement</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{story.years}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{story.achievement}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    Read Full Story
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/career/stories">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 dark:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200 shadow-lg"
              >
                View All Success Stories
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Take the next step in your educational career with our comprehensive 
              resources, expert guidance, and supportive community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/career/skills">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Start Skill Building
                </motion.button>
              </Link>
              <Link href="/career/paths">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
                >
                  Explore Career Paths
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
