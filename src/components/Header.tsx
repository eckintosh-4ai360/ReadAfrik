'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { color, motion } from 'framer-motion';
import { 
  Bars3Icon as Menu, 
  XMarkIcon as X, 
  BookOpenIcon as BookOpen, 
  CalculatorIcon as Calculator, 
  BriefcaseIcon as Briefcase, 
  ShoppingCartIcon as CartIcon, 
  HomeIcon as Home, 
  MoonIcon as Moon, 
  SunIcon as Sun,
  EnvelopeIcon as Mail 
} from '@heroicons/react/24/outline';
import ShoppingCart from './ShoppingCart';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems, openCart } = useCart();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      submenu: []
    },
    {
      name: 'Literacy',
      href: '/literacy',
      icon: BookOpen,
      submenu: [
        { name: 'Blog', href: '/literacy/blog' },
        { name: 'Reading Resources', href: '/literacy/reading' },
        { name: 'Writing Tools', href: '/literacy/writing' },
      ]
    },
    {
      name: 'Numeracy',
      href: '/numeracy',
      icon: Calculator,
      submenu: [
        { name: 'Gallery', href: '/numeracy/gallery' },
        { name: 'Articles', href: '/numeracy/articles' },
        { name: 'Books', href: '/numeracy/books' },
      ]
    },
    {
      name: 'Career Development',
      href: '/career',
      icon: Briefcase,
      submenu: [
        { name: 'Career Paths', href: '/career/paths' },
        { name: 'Skills Development', href: '/career/skills' },
        { name: 'Success Stories', href: '/career/stories' },
      ]
    },
    {
      name: 'Store',
      href: '/store',
      icon: CartIcon,
      submenu: [
        { name: 'Books', href: '/store/books' },
        { name: 'Materials', href: '/store/materials' },
        { name: 'Free Downloads', href: '/store/free' },
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: BookOpen,
      submenu: []
    },
    {
      name: 'Contact Us',
      href: '/contact',
      icon: Mail,
      submenu: []
    }
  ];

  // Check if a menu item is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="bg-white dark:bg-slate-800 shadow-lg sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                
                <span><img src="/logo.png" width={40} height={40} alt="ReadAfrik Logo" /></span>
                <span className="text-2xl font-bold title ">ReadAfrik</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2 " >
              {menuItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <div key={item.name} className="relative group" >
                    <Link href={item.href}>
                      <motion.div
                        whileHover={{ y: -2 }}
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 menus relative ${
                          active
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-700 font-semibold shadow-sm'
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700/50'
                        }`}
                      >
                        <item.icon className={`h-4 w-4 ${active ? 'animate-pulse' : ''}`} />
                        <span>{item.name}</span>
                        
                        {/* Active indicator - animated underline */}
                        {active && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                            initial={false}
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                    
                    {/* Dropdown Menu - Only show if submenu has items */}
                    {item.submenu.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-100 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem, index) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={subItem.href}
                                className={`block px-4 py-2.5 text-sm transition-all duration-200 ${
                                  pathname === subItem.href
                                    ? 'bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 font-medium border-l-2 border-blue-600 dark:border-blue-400'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:pl-5'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Theme Toggle, Cart and Mobile menu button */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="relative p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-6 w-6" />
                ) : (
                  <Moon className="h-6 w-6" />
                )}
              </motion.button>

              {/* Shopping Cart */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openCart}
                className="relative p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200"
              >
                <CartIcon className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-lg"
                  >
                    {getTotalItems()}
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-gray-200 dark:border-slate-700"
            >
              {menuItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <div key={item.name} className="mb-4">
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-2 py-2 px-3 rounded-lg transition-all duration-200 ${
                        active
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-700 font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700/50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className={`h-4 w-4 ${active ? 'animate-pulse' : ''}`} />
                      <span className="font-medium">{item.name}</span>
                      {active && (
                        <span className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                      )}
                    </Link>
                    {item.submenu.length > 0 && (
                      <div className="ml-6 space-y-2 mt-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block text-sm py-1.5 px-3 rounded-md transition-all duration-200 ${
                              pathname === subItem.href
                                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-700 font-medium'
                                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700/50'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>
      </header>

      {/* Shopping Cart Sidebar */}
      <ShoppingCart />
    </>
  );
};

export default Header;

