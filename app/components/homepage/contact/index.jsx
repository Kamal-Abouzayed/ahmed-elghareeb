// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="relative my-12 mt-24 text-laravelGray-900 dark:text-white lg:my-16 transition-colors duration-400">
      <div className="absolute flex-col items-center hidden lg:flex top-24 -right-8">
        <span className="bg-flutterBlue dark:bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md transition-colors duration-400">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-flutterBlue dark:bg-[#1a1443] transition-colors duration-400"></span>
      </div>
      <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <ContactForm />

        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="flex items-center gap-3 text-sm md:text-xl">
              <MdAlternateEmail
                className="bg-laravelGray-400 dark:bg-[#8b98a5] p-2 rounded-full hover:bg-flutterBlue dark:hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-white dark:text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="flex items-center gap-3 text-sm md:text-xl">
              <IoMdCall
                className="bg-laravelGray-400 dark:bg-[#8b98a5] p-2 rounded-full hover:bg-flutterBlue dark:hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-white dark:text-gray-800 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.phone}
              </span>
            </p>
            <p className="flex items-center gap-3 text-sm md:text-xl">
              <CiLocationOn
                className="bg-laravelGray-400 dark:bg-[#8b98a5] p-2 rounded-full hover:bg-flutterBlue dark:hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-white dark:text-gray-800 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-5 mt-8 lg:mt-16 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-laravelGray-400 dark:bg-[#8b98a5] p-3 rounded-full hover:bg-flutterBlue dark:hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-white dark:text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-laravelGray-400 dark:bg-[#8b98a5] p-3 rounded-full hover:bg-flutterBlue dark:hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-white dark:text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            {/* <Link target="_blank" href={personalData.twitter}>
              <FaXTwitter
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.stackOverflow}>
              <FaStackOverflow
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.facebook}>
              <FaFacebook
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;