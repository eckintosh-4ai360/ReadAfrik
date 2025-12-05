'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon as BookOpen, 
  TrophyIcon as Award, 
  UsersIcon as Users, 
  HeartIcon as Heart,
  AcademicCapIcon as AcademicCap,
  GlobeAltIcon as Globe,
  LightBulbIcon as LightBulb,
  RocketLaunchIcon as Rocket
} from '@heroicons/react/24/outline';

const AboutPage = () => {
  const values = [
    {
      icon: BookOpen,
      title: 'Excellence in Education',
      description: 'We are committed to providing the highest quality educational resources and materials.'
    },
    {
      icon: Heart,
      title: 'Passion for Learning',
      description: 'We believe in fostering a love for learning that lasts a lifetime.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our community of educators and learners is at the heart of everything we do.'
    },
    {
      icon: LightBulb,
      title: 'Innovation',
      description: 'We continuously explore new ways to make education more accessible and engaging.'
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Users', value: '50,000+' },
    { icon: BookOpen, label: 'Resources', value: '1,000+' },
    { icon: Globe, label: 'Countries Reached', value: '25+' },
    { icon: Award, label: 'Success Stories', value: '500+' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Founder & CEO',
      description: 'Former educator with 15+ years of experience in literacy education',
      image: '👩‍🏫'
    },
    {
      name: 'Prof. James Anderson',
      role: 'Head of Curriculum',
      description: 'PhD in Educational Psychology, specializing in numeracy development',
      image: '👨‍🎓'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Community Manager',
      description: 'Passionate about building connections between educators worldwide',
      image: '👩‍💼'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Lead Content Developer',
      description: 'Expert in educational technology and digital learning platforms',
      image: '👨‍💻'
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
              <div className="bg-orange-100 dark:bg-blue-900 p-4 rounded-full transition-colors duration-300">
                <Rocket className="h-12 w-12 text-orange-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About ReadAfrik
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering educators and learners worldwide with comprehensive literacy, 
              numeracy, and career development resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Mission
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 border border-blue-100 dark:border-slate-600 transition-colors duration-300">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At ReadAfrik, we believe that quality education should be accessible to everyone. 
                Our mission is to provide educators and learners with the tools, resources, and 
                support they need to succeed in their educational journey.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We combine cutting-edge educational research with practical, easy-to-use materials 
                to create an ecosystem where learning thrives. Whether you're a teacher looking for 
                classroom resources, a parent supporting your child's education, or a lifelong learner 
                pursuing personal growth, ReadAfrik is here to support you every step of the way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-orange-100 dark:bg-blue-900 p-3 rounded-lg transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-orange-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">Making a difference in education worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    <stat.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Passionate educators and professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-700 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-600 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="text-orange-600 dark:text-blue-400 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-12 text-center border border-gray-200 dark:border-slate-600 transition-colors duration-300"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Become part of a global network of educators and learners committed to educational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/store">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-600 dark:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-lg"
                >
                  Explore Resources
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 dark:border-blue-400 text-orange-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors duration-200"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

