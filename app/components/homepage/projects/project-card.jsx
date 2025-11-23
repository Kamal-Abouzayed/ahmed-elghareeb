// @flow strict

import * as React from 'react';
import Link from "next/link";

function ProjectCard({ project }) {

  return (
    <div className="from-laravelGray-50 to-laravelGray-100 dark:from-[#0d1224] border-laravelGray-200 dark:border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r dark:to-[#0a0d37] w-full transition-all duration-400">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-flutterBlue to-flutterSky dark:via-pink-500 dark:to-violet-600 transition-colors duration-400"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-flutterSky to-transparent dark:from-violet-600 transition-colors duration-400"></div>
      </div>
      <div className="relative px-4 py-3 lg:px-8 lg:py-5">
        <div className="absolute flex flex-row space-x-1 -translate-y-1/2 lg:space-x-2 top-1/2">
          <div className="w-2 h-2 bg-red-400 rounded-full lg:h-3 lg:w-3"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full lg:h-3 lg:w-3"></div>
          <div className="w-2 h-2 bg-green-200 rounded-full lg:h-3 lg:w-3"></div>
        </div>
        <p className="text-center ml-3 text-flutterBlue dark:text-[#16f2b3] text-base lg:text-xl transition-colors duration-400">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-laravelGray-300 dark:border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 transition-colors duration-400">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-flutterBlue dark:text-pink-500 transition-colors duration-400">const</span>
            <span className="mr-2 text-laravelGray-900 dark:text-white transition-colors duration-400">project</span>
            <span className="mr-2 text-flutterBlue dark:text-pink-500 transition-colors duration-400">=</span>
            <span className="text-laravelGray-600 dark:text-gray-400 transition-colors duration-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 mr-2 text-laravelGray-900 dark:text-white lg:ml-8 transition-colors duration-400">name:</span>
            <span className="text-laravelGray-600 dark:text-gray-400 transition-colors duration-400">{`'`}</span>
            <span className="text-flutterSky dark:text-amber-300 transition-colors duration-400">{project.name}</span>
            <span className="text-laravelGray-600 dark:text-gray-400 transition-colors duration-400">{`',`}</span>
          </div>

          <div className="ml-4 mr-2 lg:ml-8">
            <span className="text-laravelGray-900 dark:text-white transition-colors duration-400">tools:</span>
            <span className="text-laravelGray-600 dark:text-gray-400 transition-colors duration-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-flutterSky dark:text-amber-300 transition-colors duration-400">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-laravelGray-600 dark:text-gray-400 transition-colors duration-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-laravelGray-600 dark:text-gray-400 transition-colors duration-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 mr-2 text-laravelGray-900 dark:text-white lg:ml-8 transition-colors duration-400">myRole:</span>
            <span className="text-flutterBlue dark:text-orange-400 transition-colors duration-400">{project.role}</span>
            <span className="text-laravelGray-600 dark:text-gray-400 transition-colors duration-400">,</span>
          </div>
          <div className="ml-4 mr-2 lg:ml-8">
            <span className="text-laravelGray-900 dark:text-white transition-colors duration-400">Description:</span>
            <span className="text-blue-600 dark:text-cyan-400 transition-colors duration-400">{' ' + project.description}</span>
            <span className="text-laravelGray-600 dark:text-gray-400 transition-colors duration-400">,</span>
          </div>
          {project.demo && (
              <div className="ml-4 mr-2 lg:ml-8">
                  <span className="text-laravelGray-900 dark:text-white transition-colors duration-400">Demo:</span>
                  <span className="text-blue-600 dark:text-cyan-400 transition-colors duration-400">
                      <Link target='_blank' href={project.demo}>
                          {' ' + project.demo}
                      </Link>
                  </span>
                  <span className="text-laravelGray-600 dark:text-gray-400 transition-colors duration-400">,</span>
              </div>
          )}
          <div><span className="text-laravelGray-600 dark:text-gray-400 transition-colors duration-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;