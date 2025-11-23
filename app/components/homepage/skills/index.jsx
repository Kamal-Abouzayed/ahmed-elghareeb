// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-laravelGray-200 dark:border-[#25213b] transition-colors duration-400"
    >
      <div className="w-[100px] h-[100px] bg-flutterBlue rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 dark:opacity-20 dark:bg-flutterBlue/10"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-flutterBlue to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-flutterBlue dark:bg-[#1a1443] transition-colors duration-400"></span>
          <span className="bg-flutterBlue dark:bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md transition-colors duration-400">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-flutterBlue dark:bg-[#1a1443] transition-colors duration-400"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer dark:hover:scale-[1.15]"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-laravelGray-200 bg-laravelGray-50 shadow-none shadow-laravelGray-50 group-hover:border-flutterBlue dark:border-[#1f223c] dark:bg-[#11152c] transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-flutterBlue to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="w-8 h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={32}
                      height={32}
                      className="w-auto h-full rounded-lg"
                    />
                  </div>
                  <p className="text-sm transition-colors text-flutterBlue dark:text-white sm:text-lg duration-400">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
