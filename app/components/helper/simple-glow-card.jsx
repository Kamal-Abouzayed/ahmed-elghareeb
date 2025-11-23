"use client"

// Simple Glow Card that only shows glow on hover at the sides
export const SimpleGlowCard = ({ children, identifier, className = "" }) => {
  return (
    <div className={`simple-glow-container ${className}`}>
      <article className={`simple-glow-card simple-glow-card-${identifier} h-fit cursor-pointer border border-laravelGray-200 dark:border-laravelGray-700 transition-all duration-300 relative bg-white dark:bg-laravelGray-800 text-laravelGray-900 dark:text-gray-200 rounded-lg hover:border-transparent w-full shadow-md dark:shadow-none hover:shadow-lg group`}>
        {/* Left side glow */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-flutterBlue via-flutterSky to-flutterBlue dark:from-purple-500 dark:via-pink-500 dark:to-purple-500 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Right side glow */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-flutterBlue via-flutterSky to-flutterBlue dark:from-purple-500 dark:via-pink-500 dark:to-purple-500 rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Top side glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-flutterBlue via-flutterSky to-flutterBlue dark:from-purple-500 dark:via-pink-500 dark:to-purple-500 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Bottom side glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-flutterBlue via-flutterSky to-flutterBlue dark:from-purple-500 dark:via-pink-500 dark:to-purple-500 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {children}
      </article>
    </div>
  );
};

export default SimpleGlowCard;
