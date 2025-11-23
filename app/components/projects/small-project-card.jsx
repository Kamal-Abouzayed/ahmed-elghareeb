'use client';

import Link from "next/link";
import GlowCard from "../helper/glow-card";

function SmallProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <GlowCard identifier={`project-${project.id}`}>
        <div className="relative p-4 cursor-pointer group h-40 flex flex-col justify-between">

          
          {/* Project Name */}
          <div className="flex justify-center">
            <h3 className="text-sm font-semibold text-flutterBlue dark:text-[#16f2b3] transition-colors duration-400 text-center line-clamp-2">
              {project.name}
            </h3>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-flutterBlue dark:text-[#16f2b3] transition-all duration-300 group-hover:scale-110 flex-shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>

            <div className="text-center">
              <p className="text-xs font-medium text-laravelGray-900 dark:text-white transition-colors duration-400 leading-tight mb-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1 justify-center">
                {project.tools.slice(0, 3).map((tool, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-flutterBlue/10 dark:bg-[#16f2b3]/20 text-flutterBlue dark:text-[#16f2b3] rounded-full transition-colors duration-400"
                  >
                    {tool}
                  </span>
                ))}
                {project.tools.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-laravelGray-200 dark:bg-laravelGray-700 text-laravelGray-600 dark:text-laravelGray-300 rounded-full transition-colors duration-400">
                    +{project.tools.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {/* Hover indicator */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg 
              className="w-4 h-4 text-flutterBlue dark:text-[#16f2b3]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </div>
        </div>
      </GlowCard>
    </Link>
  );
}

export default SmallProjectCard;
