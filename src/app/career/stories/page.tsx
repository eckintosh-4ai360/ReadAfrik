'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon as ArrowLeft,
  MagnifyingGlassIcon as Search,
  TrophyIcon as Award,
  ClockIcon as Clock,
  SparklesIcon as Sparkles,
  HeartIcon as Heart
} from '@heroicons/react/24/outline';

const StoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');

  const roles = ['All', 'Teacher', 'Administrator', 'Curriculum Developer', 'Consultant', 'EdTech', 'Professor'];

  const successStories = [
    {
      id: 1,
      name: 'Sarah Martinez',
      image: '👩‍🏫',
      role: 'Reading Specialist → Curriculum Director',
      company: 'Metro School District',
      transition: 'Started as a reading specialist and now leads curriculum development for 50+ schools',
      achievement: 'Improved district reading scores by 25%',
      timeline: '8 years',
      story: 'After years of working directly with struggling readers, I realized I wanted to make a broader impact. I pursued my doctorate in curriculum design while continuing to teach. The transition to district leadership was challenging but rewarding. Now I get to shape literacy instruction for thousands of students.',
      keyAdvice: 'Never stop learning. Every role builds skills for the next opportunity.',
      category: 'Administrator',
      likes: 342
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: '👨‍💻',
      role: 'Teacher → EdTech Entrepreneur',
      company: 'LearningTech Solutions',
      transition: 'Founded a successful educational technology company after 10 years in the classroom',
      achievement: 'Reached 100K+ students globally with innovative learning platform',
      timeline: '12 years',
      story: 'Teaching showed me the gap between what technology could do and what was actually happening in classrooms. I started building tools on nights and weekends. Eventually, I took the leap to start my own company. It was scary leaving teaching, but my classroom experience became my biggest asset.',
      keyAdvice: 'Your teaching experience is valuable in ways you haven\'t imagined yet.',
      category: 'EdTech',
      likes: 567
    },
    {
      id: 3,
      name: 'Dr. Amanda Johnson',
      image: '👩‍🎓',
      role: 'Literacy Coach → University Professor',
      company: 'State University',
      transition: 'Transitioned from K-12 literacy coaching to training future educators at the university level',
      achievement: 'Published 15+ research papers and trained 500+ new teachers',
      timeline: '15 years',
      story: 'Working as a literacy coach, I discovered my passion for adult learning. I went back to school for my doctorate while continuing to coach. The move to higher education allowed me to combine research with teaching and have a lasting impact on education through the teachers I train.',
      keyAdvice: 'Every challenge you face in the classroom becomes a teaching moment for others.',
      category: 'Professor',
      likes: 298
    },
    {
      id: 4,
      name: 'James Rodriguez',
      image: '👨‍💼',
      role: 'Principal → Education Consultant',
      company: 'Rodriguez Education Consulting',
      transition: 'Left school administration to provide strategic guidance to schools nationwide',
      achievement: 'Consulted with 75+ schools across 12 states',
      timeline: '20 years',
      story: 'After years as a principal, I wanted to share what I\'d learned with a wider audience. Starting my consulting practice was terrifying—no steady paycheck! But my experience solving real problems in real schools made me invaluable to districts seeking change. Now I work with schools across the country.',
      keyAdvice: 'Your failures and successes are equally valuable. Both teach important lessons.',
      category: 'Consultant',
      likes: 421
    },
    {
      id: 5,
      name: 'Emily Zhang',
      image: '👩‍💻',
      role: 'Special Ed Teacher → Instructional Designer',
      company: 'Global Learning Corp',
      transition: 'Transitioned from classroom teaching to designing accessible online learning experiences',
      achievement: 'Created courses serving 50K+ learners with diverse needs',
      timeline: '9 years',
      story: 'Working with students with learning differences taught me to think creatively about accessibility. I taught myself instructional design and UX principles. When a position opened at an EdTech company, my unique perspective on accessible learning made me stand out. I now design learning experiences for a global audience.',
      keyAdvice: 'Your specialized experience is your superpower—lean into it.',
      category: 'EdTech',
      likes: 389
    },
    {
      id: 6,
      name: 'David Thompson',
      image: '👨‍🏫',
      role: 'Math Teacher → Curriculum Writer',
      company: 'Educational Publishers Inc',
      transition: 'Moved from teaching to developing mathematics curriculum used nationwide',
      achievement: 'Authored textbooks used by 200K+ students',
      timeline: '11 years',
      story: 'I loved teaching but wanted to create resources that would help teachers everywhere. I started writing supplementary materials and sharing them online. A publisher noticed my work and offered me a position. Now I combine my teaching expertise with my passion for writing to create quality educational materials.',
      keyAdvice: 'Start creating and sharing now—you never know who\'s watching.',
      category: 'Curriculum Developer',
      likes: 276
    },
    {
      id: 7,
      name: 'Lisa Patel',
      image: '👩‍🏫',
      role: 'Elementary Teacher → Professional Development Leader',
      company: 'Teaching Excellence Institute',
      transition: 'Shifted from classroom teaching to training and supporting other teachers',
      achievement: 'Trained 1000+ teachers in innovative instructional strategies',
      timeline: '13 years',
      story: 'Mentoring new teachers showed me I had a gift for explaining pedagogy. I became a district coach, then moved to a national organization. Now I design and deliver professional development nationwide. Helping teachers grow has become my greatest joy—it\'s like multiplying my classroom impact.',
      keyAdvice: 'If you love helping colleagues, consider a career in professional development.',
      category: 'Administrator',
      likes: 445
    },
    {
      id: 8,
      name: 'Robert Kim',
      image: '👨‍💼',
      role: 'Science Teacher → STEM Coordinator',
      company: 'City School District',
      transition: 'Advanced from classroom teaching to leading district-wide STEM initiatives',
      achievement: 'Established STEM programs in 30 schools',
      timeline: '10 years',
      story: 'I was passionate about making science accessible and exciting. I started an after-school robotics club that grew into a district program. My success caught the attention of district leaders. Now I coordinate STEM education across all our schools, ensuring every student has access to quality science education.',
      keyAdvice: 'Start initiatives in your own school—they can become your pathway to leadership.',
      category: 'Administrator',
      likes: 312
    },
    {
      id: 9,
      name: 'Rachel Foster',
      image: '👩‍💼',
      role: 'Reading Teacher → Literacy Consultant',
      company: 'Foster Literacy Solutions',
      transition: 'Built a thriving independent consulting practice focused on literacy education',
      achievement: 'Improved literacy outcomes in 40+ schools',
      timeline: '14 years',
      story: 'After earning my reading specialist certification, I noticed schools needed help implementing research-based practices. I started consulting part-time, then full-time. Building a business wasn\'t easy, but my classroom credibility and proven results speak for themselves. I now help entire schools transform their literacy instruction.',
      keyAdvice: 'Become an expert in your field, then teach others what you know.',
      category: 'Consultant',
      likes: 358
    }
  ];

  const filteredStories = successStories.filter(story => {
    const matchesSearch = story.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          story.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          story.story.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'All' || story.category === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
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
                  <Sparkles className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real stories from education professionals who transformed their careers
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search success stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                />
              </div>
            </div>

            {/* Role Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedRole === role
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredStories.map((story, index) => (
                <motion.article
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Story Header */}
                  <div className="p-6 border-b border-gray-100 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-5xl">{story.image}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{story.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{story.company}</p>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{story.timeline}</span>
                      </div>
                    </div>
                    
                    <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm px-4 py-2 rounded-lg inline-block mb-4">
                      {story.role}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {story.transition}
                    </p>
                    
                    <div className="flex items-start space-x-2 bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                      <Award className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-green-800 dark:text-green-300 mb-1">Key Achievement</div>
                        <p className="text-sm text-green-700 dark:text-green-300">{story.achievement}</p>
                      </div>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Sparkles className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
                        Their Story
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {story.story}
                      </p>
                    </div>

                    <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border-l-4 border-purple-600 dark:border-purple-400">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2 text-sm">💡 Key Advice</h4>
                      <p className="text-sm text-purple-800 dark:text-purple-300 italic">
                        "{story.keyAdvice}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                        <Heart className="h-5 w-5" />
                        <span className="text-sm">{story.likes} people found this inspiring</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm"
                      >
                        Read Full Story →
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* No Results */}
            {filteredStories.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📖</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No stories found</h3>
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
            <Sparkles className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step toward your dream career in education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/career/paths">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Explore Career Paths
                </button>
              </Link>
              <Link href="/career/skills">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
                  Build Your Skills
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;

