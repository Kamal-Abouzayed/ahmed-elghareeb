// @flow strict
'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { handleNavClick } from "@/utils/navigation";


function Navbar() {
  const router = useRouter();
  const logo = '>_'

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center flex-shrink-0">
          <Link
            href="/"
            className="text-flutterBlue dark:text-[#16f2b3] text-3xl font-bold transition-colors duration-300">
            <span>{ logo }</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ul className="flex flex-col items-start w-full h-screen mt-4 text-sm opacity-0 max-h-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
            <li>
              <button
                onClick={(e) => handleNavClick(e, 'about', router)}
                className="block px-4 py-2 no-underline bg-transparent border-none outline-none cursor-pointer hover:no-underline"
              >
                <div className="text-sm transition-colors text-laravelGray-700 dark:text-white duration-400 hover:text-flutterBlue">ABOUT</div>
              </button>
            </li>
            <li>
              <Link href="/experience" className="block px-4 py-2 no-underline outline-none hover:no-underline">
                <div className="text-sm transition-colors text-laravelGray-700 dark:text-white duration-400 hover:text-flutterBlue">EXPERIENCE</div>
              </Link>
            </li>
            <li>
              <Link href="/skills" className="block px-4 py-2 no-underline outline-none hover:no-underline">
                <div className="text-sm transition-colors text-laravelGray-700 dark:text-white duration-400 hover:text-flutterBlue">SKILLS</div>
              </Link>
            </li>
            {/* <li>
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#education">
                <div className="text-sm text-gray-700 transition-colors duration-300 dark:text-white hover:text-pink-600">EDUCATION</div>
              </a>
            </li> */}
            {/* <li>
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#blogs">
                <div className="text-sm text-gray-700 transition-colors duration-300 dark:text-white hover:text-pink-600">BLOGS</div>
              </a>
            </li> */}
            <li>
              <Link href="/projects" className="block px-4 py-2 no-underline outline-none hover:no-underline">
                <div className="text-sm transition-colors text-laravelGray-700 dark:text-white duration-400 hover:text-flutterBlue">PROJECTS</div>
              </Link>
            </li>
          </ul>

          {/* Theme Toggle */}
          {/* <ThemeToggle className="ml-4" /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;