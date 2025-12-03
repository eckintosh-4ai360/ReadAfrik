'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { 
  ArrowLeftIcon as ArrowLeft,
  ArrowPathIcon as Reset,
  InformationCircleIcon as Info
} from '@heroicons/react/24/outline';

// Interactive Components
const FractionVisualizer = () => {
  const [numerator, setNumerator] = useState(1);
  const [denominator, setDenominator] = useState(4);

  const percentage = (numerator / denominator) * 100;
  const slices = Array.from({ length: denominator }, (_, i) => i);

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Fraction Builder</h3>
        
        {/* Controls */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Numerator (Top): {numerator}
            </label>
            <input
              type="range"
              min="0"
              max={denominator}
              value={numerator}
              onChange={(e) => setNumerator(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Denominator (Bottom): {denominator}
            </label>
            <input
              type="range"
              min="1"
              max="12"
              value={denominator}
              onChange={(e) => {
                const newDenom = Number(e.target.value);
                setDenominator(newDenom);
                if (numerator > newDenom) setNumerator(newDenom);
              }}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div>

        {/* Fraction Display */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-col items-center">
            <span className="text-6xl font-bold text-blue-600 dark:text-blue-400">{numerator}</span>
            <div className="w-24 h-1 bg-gray-900 dark:bg-white my-2"></div>
            <span className="text-6xl font-bold text-blue-600 dark:text-blue-400">{denominator}</span>
          </div>
          <div className="mt-4 text-2xl text-gray-700 dark:text-gray-300">
            = {percentage.toFixed(1)}%
          </div>
        </div>

        {/* Pie Chart Visualization */}
        <div className="flex justify-center mb-8">
          <svg width="300" height="300" viewBox="0 0 100 100" className="transform -rotate-90">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="20" />
            {slices.map((i) => {
              const startAngle = (i / denominator) * 360;
              const endAngle = ((i + 1) / denominator) * 360;
              const isFilled = i < numerator;
              
              return (
                <motion.circle
                  key={i}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={isFilled ? '#3b82f6' : 'transparent'}
                  strokeWidth="20"
                  strokeDasharray={`${(360 / denominator) * 0.98} ${360 - (360 / denominator) * 0.98}`}
                  strokeDashoffset={-startAngle * (Math.PI * 80) / 360}
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -startAngle * (Math.PI * 80) / 360 }}
                  transition={{ duration: 0.3 }}
                />
              );
            })}
          </svg>
        </div>

        {/* Bar Model */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bar Model:</p>
          <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${denominator}, 1fr)` }}>
            {slices.map((i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`h-16 rounded-lg ${
                  i < numerator
                    ? 'bg-blue-500 dark:bg-blue-600'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NumberLineInteractive = () => {
  const [position, setPosition] = useState(5);
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(10);
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Number Line Explorer</h3>
        
        {/* Settings */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Min: {rangeMin}
            </label>
            <input
              type="number"
              value={rangeMin}
              onChange={(e) => setRangeMin(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Max: {rangeMax}
            </label>
            <input
              type="number"
              value={rangeMax}
              onChange={(e) => setRangeMax(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Step: {step}
            </label>
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Current Value Display */}
        <div className="text-center mb-8">
          <motion.div
            key={position}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block text-6xl font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-8 py-4 rounded-2xl"
          >
            {position}
          </motion.div>
        </div>

        {/* Number Line */}
        <div className="relative py-12 mb-8">
          {/* Line */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-300 dark:bg-gray-600 rounded-full transform -translate-y-1/2" />
          
          {/* Tick Marks */}
          {Array.from({ length: Math.floor((rangeMax - rangeMin) / step) + 1 }, (_, i) => {
            const value = rangeMin + i * step;
            const percentage = ((value - rangeMin) / (rangeMax - rangeMin)) * 100;
            
            return (
              <div
                key={i}
                className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${percentage}%` }}
              >
                <div className="w-1 h-6 bg-gray-600 dark:bg-gray-400 mb-2" />
                <div className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap -ml-2">
                  {value.toFixed(1)}
                </div>
              </div>
            );
          })}

          {/* Position Marker */}
          <motion.div
            className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${((position - rangeMin) / (rangeMax - rangeMin)) * 100}%` }}
            animate={{ left: `${((position - rangeMin) / (rangeMax - rangeMin)) * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="w-6 h-6 bg-green-500 border-4 border-white dark:border-gray-800 rounded-full shadow-lg" />
          </motion.div>
        </div>

        {/* Slider Control */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Drag to move: {position}
          </label>
          <input
            type="range"
            min={rangeMin}
            max={rangeMax}
            step={step}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={() => setPosition(Math.max(rangeMin, position - step))}
            className="flex-1 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            - {step}
          </button>
          <button
            onClick={() => setPosition((rangeMin + rangeMax) / 2)}
            className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Reset
          </button>
          <button
            onClick={() => setPosition(Math.min(rangeMax, position + step))}
            className="flex-1 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            + {step}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProbabilitySimulator = () => {
  const [flips, setFlips] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [currentResult, setCurrentResult] = useState<'heads' | 'tails' | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const result = Math.random() < 0.5 ? 'heads' : 'tails';
      setCurrentResult(result);
      setFlips(flips + 1);
      if (result === 'heads') {
        setHeads(heads + 1);
      } else {
        setTails(tails + 1);
      }
      setIsFlipping(false);
    }, 500);
  };

  const reset = () => {
    setFlips(0);
    setHeads(0);
    setTails(0);
    setCurrentResult(null);
  };

  const headsPercent = flips > 0 ? (heads / flips) * 100 : 50;
  const tailsPercent = flips > 0 ? (tails / flips) * 100 : 50;

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Coin Flip Simulator</h3>
        
        {/* Coin Display */}
        <div className="flex justify-center mb-8">
          <motion.div
            animate={isFlipping ? { rotateY: 360 } : {}}
            transition={{ duration: 0.5 }}
            className={`w-48 h-48 rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl ${
              currentResult === 'heads'
                ? 'bg-yellow-400 text-yellow-900'
                : currentResult === 'tails'
                ? 'bg-gray-400 text-gray-900'
                : 'bg-gradient-to-br from-yellow-400 to-gray-400 text-white'
            }`}
          >
            {currentResult === 'heads' ? '👑' : currentResult === 'tails' ? 'T' : '?'}
          </motion.div>
        </div>

        {/* Result Display */}
        {currentResult && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center mb-6"
          >
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {currentResult === 'heads' ? 'Heads!' : 'Tails!'}
            </span>
          </motion.div>
        )}

        {/* Controls */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={flipCoin}
            disabled={isFlipping}
            className="flex-1 py-4 bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isFlipping ? 'Flipping...' : 'Flip Coin'}
          </button>
          <button
            onClick={reset}
            className="px-6 py-4 bg-gray-600 text-white rounded-lg font-bold hover:bg-gray-700"
          >
            <Reset className="h-6 w-6" />
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{flips}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Flips</div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{heads}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Heads</div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-gray-600 dark:text-gray-400">{tails}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tails</div>
          </div>
        </div>

        {/* Probability Chart */}
        {flips > 0 && (
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Heads</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{headsPercent.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <motion.div
                  className="bg-yellow-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${headsPercent}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tails</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tailsPercent.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <motion.div
                  className="bg-gray-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${tailsPercent}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Page Component
const GalleryItemPage = () => {
  const params = useParams();
  const id = params.id as string;

  const items: { [key: string]: any } = {
    '1': {
      title: 'Fraction Visualization',
      description: 'Interactive pie charts and bar models for understanding fractions',
      component: FractionVisualizer,
      icon: '🥧',
      instructions: 'Adjust the numerator and denominator sliders to see how fractions work. Watch the pie chart and bar model update in real-time!'
    },
    '3': {
      title: 'Number Line Adventures',
      description: 'Dynamic number lines for addition and subtraction',
      component: NumberLineInteractive,
      icon: '📏',
      instructions: 'Drag the slider to move along the number line. Adjust the range and step size to explore different number sequences.'
    },
    '6': {
      title: 'Probability Simulator',
      description: 'Interactive probability experiments and simulations',
      component: ProbabilitySimulator,
      icon: '🎲',
      instructions: 'Flip the coin multiple times and watch the probability converge to 50/50. Try flipping 10, 50, or 100 times to see the law of large numbers in action!'
    }
  };

  const item = items[id] || {
    title: 'Interactive Tool',
    description: 'This interactive tool is being developed',
    component: () => <div className="text-center py-12 text-gray-500">Coming soon!</div>,
    icon: '🔧',
    instructions: 'This interactive visualization is currently under development.'
  };

  const Component = item.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link href="/numeracy/gallery" className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-8 transition-colors duration-200">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Gallery</span>
            </Link>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="text-7xl mb-6">{item.icon}</div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {item.description}
              </p>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
              <div className="flex items-start space-x-3">
                <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">How to Use:</h3>
                  <p className="text-blue-800 dark:text-blue-300">{item.instructions}</p>
                </div>
              </div>
            </div>

            {/* Interactive Component */}
            <Component />

            {/* Educational Notes */}
            <div className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Educational Value</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This interactive tool helps students develop conceptual understanding through:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Visual representation of abstract mathematical concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Hands-on manipulation to discover mathematical relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Immediate feedback to reinforce learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Self-paced exploration suitable for different learning levels</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItemPage;

