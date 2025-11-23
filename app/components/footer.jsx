// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-laravelGray-50 dark:bg-[#0d1224] border-laravelGray-200 dark:border-[#353951] text-laravelGray-900 dark:text-white transition-all duration-400">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-flutterBlue dark:via-violet-500 to-transparent transition-colors duration-400"></div>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-laravelGray-700 dark:text-laravelGray-300 transition-colors duration-400">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/kamal-abouzayed/" className="text-flutterBlue dark:text-[#16f2b3] hover:text-flutterBlueDark dark:hover:text-[#14d9a3] transition-colors duration-300 font-medium">Kamal Abouzayed</Link>
          </p>
          {/* <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/Kamal-Abouzayed/developer-portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/Kamal-Abouzayed/developer-portfolio/fork"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div> */}
        </div>
      </div>
    </div >
  );
};

export default Footer;