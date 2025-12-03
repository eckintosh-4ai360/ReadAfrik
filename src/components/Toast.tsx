'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckIcon as Check, 
  XMarkIcon as X, 
  ShoppingCartIcon as ShoppingCart 
} from '@heroicons/react/24/outline';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type = 'success', isVisible, onClose }) => {
  const icons = {
    success: Check,
    error: X,
    info: ShoppingCart,
  };

  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
  };

  const Icon = icons[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -50, x: '-50%' }}
          className="fixed top-4 left-1/2 z-50 max-w-md"
        >
          <div className={`${colors[type]} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3`}>
            <div className="bg-white/20 rounded-full p-2">
              <Icon className="h-5 w-5" />
            </div>
            <p className="font-medium">{message}</p>
            <button
              onClick={onClose}
              className="ml-4 p-1 hover:bg-white/20 rounded transition-colors duration-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;

