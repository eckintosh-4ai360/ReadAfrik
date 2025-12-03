'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCartIcon as ShoppingCart, 
  ArrowDownTrayIcon as Download, 
  StarIcon as Star, 
  MagnifyingGlassIcon as Search, 
  CheckIcon as Check 
} from '@heroicons/react/24/outline';
import { useCart } from '@/contexts/CartContext';
import Toast from '@/components/Toast';
import ProductDetailsModal from '@/components/ProductDetailsModal';

const StorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [addedToCartId, setAddedToCartId] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const { addToCart, openCart } = useCart();

  const categories = [
    { id: 'all', name: 'All Products', count: 156 },
    { id: 'books', name: 'Digital Books', count: 45 },
    { id: 'materials', name: 'Teaching Materials', count: 67 },
    { id: 'free', name: 'Free Resources', count: 44 }
  ];

  const products = [
    {
      id: 1,
      title: 'Complete Literacy Assessment Toolkit',
      description: 'Comprehensive assessment tools for evaluating reading and writing skills across all grade levels.',
      price: 49.99,
      originalPrice: 69.99,
      category: 'materials',
      type: 'Premium',
      rating: 4.8,
      reviews: 124,
      downloads: 2500,
      image: '📊',
      features: ['Grade K-12', 'Digital & Print', 'Progress Tracking', 'Detailed Reports']
    },
    {
      id: 2,
      title: 'Interactive Phonics Workbook Series',
      description: 'Engaging phonics activities and exercises designed to build strong reading foundations.',
      price: 29.99,
      originalPrice: null,
      category: 'books',
      type: 'Digital Book',
      rating: 4.9,
      reviews: 89,
      downloads: 1800,
      image: '📚',
      features: ['Interactive Elements', 'Audio Support', 'Progress Tracking', 'Printable Pages']
    },
    {
      id: 3,
      title: 'Math Manipulatives Collection',
      description: 'Virtual manipulatives and hands-on activities for teaching mathematical concepts.',
      price: 0,
      originalPrice: null,
      category: 'free',
      type: 'Free Resource',
      rating: 4.7,
      reviews: 156,
      downloads: 5200,
      image: '🧮',
      features: ['Virtual Tools', 'Lesson Plans', 'Activity Guides', 'Grade K-8']
    },
    {
      id: 4,
      title: 'Writing Workshop Curriculum',
      description: 'Complete curriculum for implementing effective writing workshops in your classroom.',
      price: 79.99,
      originalPrice: 99.99,
      category: 'materials',
      type: 'Curriculum',
      rating: 4.8,
      reviews: 67,
      downloads: 890,
      image: '✍️',
      features: ['12-Week Program', 'Lesson Plans', 'Student Materials', 'Assessment Rubrics']
    },
    {
      id: 5,
      title: 'Sight Words Flash Cards',
      description: 'Printable flash cards for the most common sight words, organized by difficulty level.',
      price: 0,
      originalPrice: null,
      category: 'free',
      type: 'Free Resource',
      rating: 4.6,
      reviews: 203,
      downloads: 8900,
      image: '🃏',
      features: ['Printable PDF', 'Color & B&W', 'Multiple Levels', 'Progress Tracker']
    },
    {
      id: 6,
      title: 'Advanced Numeracy Strategies Guide',
      description: 'Research-based strategies for teaching advanced mathematical concepts effectively.',
      price: 39.99,
      originalPrice: null,
      category: 'books',
      type: 'Digital Book',
      rating: 4.9,
      reviews: 45,
      downloads: 670,
      image: '📐',
      features: ['150+ Pages', 'Video Examples', 'Case Studies', 'Implementation Guide']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.filter(p => p.rating >= 4.8).slice(0, 3);

  const handleAddToCart = (product: {
    id: number;
    title: string;
    price: number;
    image: string;
    type: string;
  }) => {
    if (product.price === 0) {
      // Handle free download
      setToastMessage('Free download started!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }
    
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      type: product.type
    });

    // Show success feedback
    setAddedToCartId(product.id);
    setToastMessage(`${product.title} added to cart!`);
    setShowToast(true);
    
    setTimeout(() => {
      setAddedToCartId(null);
    }, 2000);
    
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleViewDetails = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        type="success"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
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
              <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-full transition-colors duration-300">
                <ShoppingCart className="h-12 w-12 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Educational Store
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover premium teaching materials, digital books, and free resources 
              designed to enhance your educational practice and student outcomes.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 p-6 transition-colors duration-300">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-slate-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors duration-200"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our most popular and highly-rated educational resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-700 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-600 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Product Header */}
                <div className="p-6 border-b border-gray-100 dark:border-slate-600">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <div className="text-4xl">{product.image}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  {/* Rating and Reviews */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    {product.price === 0 ? (
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">FREE</span>
                    ) : (
                      <>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 dark:text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Product Actions */}
                <div className="p-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAddToCart(product)}
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 mb-3 ${
                      addedToCartId === product.id
                        ? 'bg-green-600 text-white'
                        : 'bg-orange-600 dark:bg-orange-700 text-white hover:bg-orange-700 dark:hover:bg-orange-600'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {addedToCartId === product.id ? (
                        <motion.div
                          key="success"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="flex items-center space-x-2"
                        >
                          <Check className="h-4 w-4" />
                          <span>Added to Cart!</span>
                        </motion.div>
                      ) : product.price === 0 ? (
                        <motion.div
                          key="free"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center space-x-2"
                        >
                          <Download className="h-4 w-4" />
                          <span>Download Free</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="add"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center space-x-2"
                        >
                          <ShoppingCart className="h-4 w-4" />
                          <span>Add to Cart</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                  
                  <button 
                    onClick={() => handleViewDetails(product)}
                    className="w-full text-orange-600 dark:text-orange-400 border border-orange-600 dark:border-orange-400 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 dark:hover:bg-slate-600 transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {filteredProducts.length} products found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Product Header */}
                <div className="p-6 border-b border-gray-100 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      product.type === 'Free Resource' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : product.type === 'Premium'
                        ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                        : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    }`}>
                      {product.type}
                    </span>
                    <div className="text-3xl">{product.image}</div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-orange-600 dark:bg-orange-400 rounded-full" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Rating and Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{product.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{product.downloads}</span>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    {product.price === 0 ? (
                      <span className="text-xl font-bold text-green-600 dark:text-green-400">FREE</span>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Actions */}
                <div className="p-6 space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAddToCart(product)}
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      addedToCartId === product.id
                        ? 'bg-green-600 text-white'
                        : 'bg-orange-600 dark:bg-orange-700 text-white hover:bg-orange-700 dark:hover:bg-orange-600'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {addedToCartId === product.id ? (
                        <motion.div
                          key="success"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="flex items-center space-x-2"
                        >
                          <Check className="h-4 w-4" />
                          <span>Added!</span>
                        </motion.div>
                      ) : product.price === 0 ? (
                        <motion.div
                          key="free"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center space-x-2"
                        >
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="add"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center space-x-2"
                        >
                          <ShoppingCart className="h-4 w-4" />
                          <span>Add to Cart</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                  <button 
                    onClick={() => handleViewDetails(product)}
                    className="w-full text-orange-600 dark:text-orange-400 border border-orange-600 dark:border-orange-400 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Secure & Convenient Payment Options
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              We support multiple payment methods including mobile money (MoMo) 
              and traditional payment options for your convenience.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {[
                { name: 'Mobile Money', icon: '📱' },
                { name: 'Credit Cards', icon: '💳' },
                { name: 'PayPal', icon: '🅿️' },
                { name: 'Bank Transfer', icon: '🏦' }
              ].map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{method.icon}</div>
                  <div className="text-white/80">{method.name}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/store/free">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Browse Free Resources
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openCart}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
              >
                View Cart
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Details Modal */}
      <ProductDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => {
          setIsDetailsModalOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
        isAddedToCart={selectedProduct ? addedToCartId === selectedProduct.id : false}
      />
    </div>
  );
};

export default StorePage;
