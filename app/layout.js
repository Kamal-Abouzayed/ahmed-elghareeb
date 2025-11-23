import { Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import './css/card.scss';
import './css/globals.scss';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

export const metadata = {
  title: 'Ahmed Elghareeb',
  description: "Greetings, I'm Ahmed Elghareeb, a Flutter Developer specializing in cross-platform mobile applications. With a passion for crafting exceptional user experiences, I specialize in Flutter, where I transform concepts into beautiful, performant apps for iOS and Android with precision and efficiency. My track record speaks for itself – delivering high-quality solutions with seamless animations, responsive designs, and clean architecture that exceed expectations. Explore my portfolio and let's discuss how I can elevate your projects with my expertise in Flutter development.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"         // Enables 'dark' class toggling
          defaultTheme="light"     // Force default theme to light
          enableSystem={false}     // Don't use system preference
        >
          <ToastContainer />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-flutterGray-900 dark:text-white transition-all duration-400 cubic-bezier(0.4, 0, 0.2, 1)">
            <Navbar />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
};
