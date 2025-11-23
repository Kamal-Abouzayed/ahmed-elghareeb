import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { personalData } from "@/utils/data/personal-data";

const code = `const coder = {
  name: 'Ahmed Elghareeb',
  skills: ['Dart', 'Flutter', 'Firebase', 'REST APIs', 'Git'],
  hardWorker: true,
  activeLearning: true,
};`;

export default function Hero() {
  return (
    <section className="relative px-6 pt-24 pb-12 overflow-hidden isolate sm:pt-32 lg:px-8">
      {/* Background Blur */}
      <div
        className="absolute inset-x-0 top-0 -z-10 transform-gpu blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-flutterBlue to-flutterSky opacity-30 dark:opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 70.5% 0.1%, 45.9% 22.5%, 27.6% 27.6%, 0.1% 56.3%, 5.9% 100%, 52.6% 100%, 61.5% 70.6%, 81.2% 68.5%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-[minmax(0,500px)_minmax(0,800px)]">
          {/* Intro */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
              Hello, This is{" "}
              <span className="text-flutterBlue dark:text-pink-500">Ahmed Elghareeb</span>, {"I'm a "}
              Junior{" "}
              <span className="text-flutterBlue dark:text-pink-500">
                Flutter Developer
              </span>.
            </h1>

            {/* Social Icons */}
            <div className="flex items-center gap-5 my-12">
              <Link
                href={personalData.github}
                target="_blank"
                aria-label="GitHub Profile"
                className="transition-transform duration-300 text-flutterBlue dark:text-pink-500 hover:scale-125"
              >
                <BsGithub size={30} />
              </Link>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                aria-label="LinkedIn Profile"
                className="transition-transform duration-300 text-flutterBlue dark:text-pink-500 hover:scale-125"
              >
                <BsLinkedin size={30} />
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link href="#contact" scroll={false}>
                <button className="flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-all rounded-full bg-gradient-to-r from-flutterBlue to-flutterSky hover:gap-3">
                  <span>Contact Me</span>
                  <RiContactsFill size={18} />
                </button>
              </Link>
            </div>
          </div>

          {/* Code Card */}
          <div className="rounded-xl shadow-lg overflow-hidden bg-laravelGray-50 dark:bg-laravelGray-900 min-h-[280px]">
            <div className="flex items-center gap-2 px-4 py-3 bg-laravelGray-100 dark:bg-laravelGray-900">
              <span className="w-3 h-3 bg-red-400 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-400 rounded-full" />
            </div>

            <Highlight code={code} language="javascript" theme={themes.github}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={`${className} p-6 whitespace-pre-wrap text-sm sm:text-base font-mono`}
                  style={{ margin: 0, ...style }}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </div>
      </div>
    </section>
  );
}
