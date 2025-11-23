'use client';

import { useTheme } from '@/app/contexts/ThemeContext';

/**
 * Example component demonstrating various dark mode styling patterns
 * This component showcases how to use Tailwind's dark: variants effectively
 */
const ThemeExamples = () => {
  const { theme, isDark, isLight } = useTheme();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Theme Examples
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Current theme: <span className="font-semibold capitalize">{theme}</span>
        </p>
      </div>

      {/* Card Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Basic Card
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This card demonstrates basic light/dark mode styling with proper contrast and transitions.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
            Action Button
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-3">
            Gradient Card
          </h3>
          <p className="text-purple-100 dark:text-purple-50 mb-4">
            Gradients can be adjusted for different themes to maintain visual appeal.
          </p>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-md transition-all duration-200">
            Glass Button
          </button>
        </div>
      </div>

      {/* Laravel-themed Section */}
      <div className="bg-flutterBlue/10 dark:bg-flutterBlue/20 border border-flutterBlue/20 dark:border-flutterBlue/30 rounded-lg p-6 transition-all duration-400">
        <h3 className="text-xl font-semibold text-flutterBlue dark:text-flutterBlueLight mb-3 transition-colors duration-400">
          Laravel Brand Colors
        </h3>
        <p className="text-laravelGray-700 dark:text-laravelGray-300 mb-4 transition-colors duration-400">
          Official Laravel brand colors with proper contrast ratios for both light and dark themes.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-flutterBlue hover:bg-flutterBlueDark text-white px-3 py-1 rounded-full text-sm transition-colors duration-300 cursor-pointer">
            Laravel Red
          </span>
          <span className="bg-flutterBlueLight hover:bg-flutterBlue text-white px-3 py-1 rounded-full text-sm transition-colors duration-300 cursor-pointer">
            Red Light
          </span>
          <span className="bg-flutterSky hover:bg-orange-600 text-white px-3 py-1 rounded-full text-sm transition-colors duration-300 cursor-pointer">
            Orange
          </span>
          <span className="bg-flutterNavy hover:bg-yellow-500 text-laravelGray-900 px-3 py-1 rounded-full text-sm transition-colors duration-300 cursor-pointer">
            Yellow
          </span>
        </div>
      </div>

      {/* Form Example */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Form Elements
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              placeholder="Your message..."
            />
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Status Indicators
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Online</span>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Away</span>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Busy</span>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto mb-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Offline</span>
          </div>
        </div>
      </div>

      {/* Theme State Display */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Theme State
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">Current Theme:</span>
            <span className="ml-2 text-gray-900 dark:text-white capitalize">{theme}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">Is Dark:</span>
            <span className="ml-2 text-gray-900 dark:text-white">{isDark ? 'Yes' : 'No'}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">Is Light:</span>
            <span className="ml-2 text-gray-900 dark:text-white">{isLight ? 'Yes' : 'No'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeExamples;
