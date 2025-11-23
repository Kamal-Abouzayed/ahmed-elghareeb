'use client';

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import { useState } from "react";
import GlowCard from "../helper/glow-card";

const EnhancedSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories list
  const categories = ['All', 'Backend', 'Frontend', 'Database', 'Tools', 'Other'];

  // Categorize skill by name
  const getSkillCategory = (skill) => {
    const backendSkills = ['PHP', 'Laravel', 'Node JS', 'Express JS', 'Livewire'];
    const frontendSkills = ['HTML', 'CSS', 'Javascript', 'TypeScript', 'React', 'Next JS', 'Vue', 'Nuxt JS', 'Tailwind', 'Bootstrap', 'Jquery', 'Alpine.js'];
    const databaseSkills = ['MySQL', 'MySql', 'PostgreSQL', 'MongoDB'];
    const toolSkills = ['Git', 'Docker', 'AWS', 'Linux', 'Nginx'];

    if (backendSkills.includes(skill)) return 'Backend';
    if (frontendSkills.includes(skill)) return 'Frontend';
    if (databaseSkills.includes(skill)) return 'Database';
    if (toolSkills.includes(skill)) return 'Tools';
    return 'Other';
  };

  // Filter skills by selected category
  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => getSkillCategory(skill) === selectedCategory);

  return (
    <div className="relative z-50 my-12 lg:my-24">
      {/* Header Section */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-flutterBlue dark:bg-[#1a1443] transition-colors duration-400"></span>
          <span className="bg-flutterBlue dark:bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md transition-colors duration-400">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-flutterBlue dark:bg-[#1a1443] transition-colors duration-400"></span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-3 p-4 bg-white border rounded-lg shadow-md dark:bg-laravelGray-800 dark:shadow-none border-laravelGray-200 dark:border-laravelGray-700">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-flutterBlue dark:bg-[#1a1443] text-white shadow-lg scale-105'
                  : 'bg-laravelGray-100 dark:bg-laravelGray-700 text-laravelGray-700 dark:text-laravelGray-300 hover:bg-flutterBlue dark:hover:bg-[#1a1443] hover:text-white hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="py-4">
        {filteredSkills.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="mb-4 text-flutterBlue dark:text-red-400">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-laravelGray-900 dark:text-white">
              No Skills Found
            </h3>
            <p className="max-w-md text-center text-laravelGray-600 dark:text-laravelGray-300">
              No skills found in the &ldquo;{selectedCategory}&rdquo; category. Try selecting a different category or &ldquo;All&rdquo; to see all skills.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {filteredSkills.map((skill, id) => (
              <GlowCard key={id} identifier={`skill-${id}`} className="w-40 h-40">
                <div className="relative flex flex-col items-center justify-center h-full p-4">
                  <div className="flex justify-center mb-2">
                    <p className="text-xs text-flutterBlue dark:text-[#16f2b3] transition-colors duration-400 font-medium">
                      {getSkillCategory(skill)}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex-shrink-0 transition-all duration-300 text-flutterBlue dark:text-violet-500 hover:scale-110">
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={32}
                        height={32}
                        className="object-contain w-8 h-8 rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold leading-tight uppercase transition-colors text-laravelGray-900 dark:text-white duration-400">
                        {skill}
                      </p>
                      <div className="mt-1 text-xs leading-relaxed transition-colors text-laravelGray-600 dark:text-laravelGray-300 duration-400">
                        Technology
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedSkills;
