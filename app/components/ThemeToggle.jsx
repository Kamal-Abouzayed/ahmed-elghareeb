'use client';

import { useTheme } from '@/app/contexts/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center
        w-12 h-12 rounded-full
        bg-gray-200 dark:bg-laravelGray-700
        hover:bg-gray-300 dark:hover:bg-laravelGray-600
        active:scale-95
        transition-all duration-400 cubic-bezier(0.4, 0, 0.2, 1)
        focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-flutterBlue dark:focus:ring-flutterBlueLight
        focus:ring-offset-white dark:focus:ring-offset-laravelGray-800
        shadow-lg hover:shadow-xl
        group overflow-hidden
        ${className}
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Background glow effect */}
      <div
        className={`
          absolute inset-0 rounded-full
          transition-all duration-400 ease-out
          ${isDark
            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
            : 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20'
          }
          opacity-0 group-hover:opacity-100 group-active:opacity-100
          scale-110 group-hover:scale-125 group-active:scale-110
        `}
      />

      {/* Sun Icon */}
      <BsSun
        className={`
          absolute w-5 h-5 text-yellow-500 dark:text-yellow-400
          transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          ${isDark
            ? 'opacity-0 rotate-180 scale-0 translate-y-2'
            : 'opacity-100 rotate-0 scale-100 translate-y-0'
          }
          group-hover:scale-110
        `}
      />

      {/* Moon Icon */}
      <BsMoon
        className={`
          absolute w-5 h-5 text-blue-400 dark:text-blue-300
          transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          ${isDark
            ? 'opacity-100 rotate-0 scale-100 translate-y-0'
            : 'opacity-0 -rotate-180 scale-0 -translate-y-2'
          }
          group-hover:scale-110
        `}
      />

      {/* Click ripple effect */}
      <span
        className="
          absolute inset-0 rounded-full
          bg-white/30 dark:bg-white/20
          opacity-0 group-active:opacity-100
          scale-0 group-active:scale-150
          transition-all duration-200 ease-out
        "
      />
    </button>
  );
};

export default ThemeToggle;
