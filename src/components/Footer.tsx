'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon as BookOpen, 
  EnvelopeIcon as Mail, 
  PhoneIcon as Phone, 
  MapPinIcon as MapPin 
} from '@heroicons/react/24/outline';
import { 
  FaFacebook as Facebook, 
  FaTwitter as Twitter, 
  FaInstagram as Instagram, 
  FaYoutube as Youtube 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ]
    },
    {
      title: 'Learning Resources',
      links: [
        { name: 'Literacy Blog', href: '/literacy/blog' },
        { name: 'Numeracy Gallery', href: '/numeracy/gallery' },
        { name: 'Career Guidance', href: '/career' },
        { name: 'Free Materials', href: '/store/free' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'FAQs', href: '/faq' },
        { name: 'Community', href: '/community' },
        { name: 'Feedback', href: '/feedback' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-[var(--header-bg)] dark:bg-slate-950 text-[var(--foreground)] dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-[var(--primary)]" />
              <span className="text-2xl font-bold">ReadAfrik</span>
            </Link>
            <p className="text-[var(--muted)] dark:text-gray-400 mb-6">
              Empowering learners with quality educational resources, teaching materials, and career development tools.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-[var(--muted)] dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@ReadAfrik.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Education St, Learning City</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[var(--muted)] dark:text-gray-400 hover:text-[var(--primary)] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links and Newsletter */}
        <div className="border-t border-[var(--border)] dark:border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-[var(--muted)] dark:text-gray-500 hover:text-[var(--primary)] transition-colors duration-200"
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-[var(--card-bg)] dark:bg-slate-900 text-[var(--foreground)] dark:text-white rounded-md border border-[var(--border)] dark:border-slate-700 focus:outline-none focus:border-[var(--primary)] transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-[var(--primary)] dark:bg-blue-700 text-white rounded-md hover:bg-[var(--secondary)] dark:hover:bg-blue-600 transition-colors duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--border)] dark:border-slate-800 mt-8 pt-8 text-center text-[var(--muted)] dark:text-gray-500">
          <p>&copy; {currentYear} ReadAfrik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

