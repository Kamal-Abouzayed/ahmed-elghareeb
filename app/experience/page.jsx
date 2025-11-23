import Experience from "../components/homepage/experience";

export const metadata = {
  title: 'Experience - Ahmed Elghareeb',
  description: 'Explore my professional experience in Flutter mobile development, cross-platform applications, and native iOS/Android app development. Discover my career journey, technical expertise, and portfolio of successful Flutter projects.',
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen transition-colors duration-400">
      <div className="container mx-auto py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-laravelGray-900 dark:text-white mb-4 transition-colors duration-400">
            My Experience
          </h1>
          <p className="text-lg text-laravelGray-600 dark:text-laravelGray-300 max-w-2xl mx-auto transition-colors duration-400">
            A journey through my professional career in application development, 
            specializing in Flutter framework and delivering enterprise-grade mobile solutions.
          </p>
        </div>
        <Experience />
      </div>
    </div>
  );
}
