// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-flutterBlue dark:bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md transition-colors duration-400">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-flutterBlue dark:bg-[#1a1443] transition-colors duration-400"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-flutterBlue dark:text-[#16f2b3] text-xl uppercase transition-colors duration-400">
            Who I am?
          </p>
          <p className="text-laravelGray-700 dark:text-gray-200 text-sm lg:text-lg transition-colors duration-400">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Abu Said"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;