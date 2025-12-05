'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCartIcon as CartIcon, 
  XMarkIcon as X, 
  PlusIcon as Plus, 
  MinusIcon as Minus, 
  TrashIcon as Trash2 
} from '@heroicons/react/24/outline';
import PaymentModal from './PaymentModal';
import { useCart } from '@/contexts/CartContext';

const ShoppingCart: React.FC = () => {
  const {
    cartItems,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalPrice,
    getTotalItems,
    isCartOpen,
    closeCart,
  } = useCart();

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number;
    title: string;
    price: number;
    image: string;
  } | null>(null);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // For demo purposes, we'll checkout with the first item
    // In a real app, you'd handle multiple items differently
    const firstItem = cartItems[0];
    setSelectedProduct({
      id: firstItem.id,
      title: firstItem.title,
      price: getTotalPrice(),
      image: firstItem.image,
    });
    setIsPaymentModalOpen(true);
  };

  if (!isCartOpen) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-40"
          onClick={closeCart}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="bg-white h-full w-full max-w-md shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CartIcon className="h-6 w-6 text-gray-700" />
                  <h2 className="text-xl font-bold text-gray-900">
                    Shopping Cart ({getTotalItems()})
                  </h2>
                </div>
                <button
                  onClick={closeCart}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Cart Content */}
            <div className="flex-1 p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <CartIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500">Add some products to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{item.image}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-500 mb-2">{item.type}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
                              >
                                <Minus className="h-4 w-4 text-gray-600" />
                              </button>
                              <span className="w-8 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
                              >
                                <Plus className="h-4 w-4 text-gray-600" />
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-1 hover:bg-red-100 rounded transition-colors duration-200 ml-2"
                              >
                                <Trash2 className="h-4 w-4 text-red-600" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 p-6 bg-white">
                <div className="space-y-4">
                  {/* Total */}
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCheckout}
                      className="w-full bg-orange-600 dark:bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 dark:hover:bg-blue-700 transition-colors duration-200"
                    >
                      Proceed to Checkout
                    </motion.button>
                    <button
                      onClick={clearCart}
                      className="w-full text-gray-600 border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Payment Modal */}
      {selectedProduct && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => {
            setIsPaymentModalOpen(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
        />
      )}
    </>
  );
};

export default ShoppingCart;
