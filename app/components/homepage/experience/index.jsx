// @flow strict

import { experiences } from "@/utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';

function Experience() {
  return (
    <div id="experience" className="relative z-50 my-12 border-t lg:my-24 duration-400">

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-flutterBlue to-transparent w-full" />
        </div>
      </div>
      
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-flutterBlue dark:bg-[#1a1443] transition-colors duration-400"></span>
          <span className="bg-flutterBlue dark:bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md transition-colors duration-400">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-flutterBlue dark:bg-[#1a1443] transition-colors duration-400"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-start justify-center">
            <div className="w-full h-full max-w-lg">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-6">
              {
                experiences.map(experienceItem => (
                  <GlowCard key={experienceItem.id} identifier={`experience-${experienceItem.id}`}>
                    <div className="relative p-4">

                      <div className="flex justify-center mb-3">
                        <p className="text-xs sm:text-sm text-flutterBlue dark:text-[#16f2b3] transition-colors duration-400 font-medium">
                          {experienceItem.duration}
                        </p>
                      </div>
                      <div className="flex items-center px-2 gap-x-6">
                        <div className="text-flutterBlue dark:text-[#16f2b3] transition-all duration-300 hover:scale-110 flex-shrink-0">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div className="flex-1">
                          <p className="mb-2 text-base font-semibold leading-tight uppercase transition-colors sm:text-xl text-laravelGray-900 dark:text-white duration-400">
                            {experienceItem.title}
                          </p>
                          <p className="text-sm leading-relaxed transition-colors sm:text-base text-laravelGray-600 dark:text-laravelGray-300 duration-400">
                            {experienceItem.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;