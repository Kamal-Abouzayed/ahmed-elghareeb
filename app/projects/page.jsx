import Projects from "../components/homepage/projects";

export const metadata = {
  title: 'Projects - Ahmed Elghareeb',
  description: 'Explore my portfolio of cross-platform projects built with Flutter, Firebase, and RESTful APIs. See my work in mobile development, cloud integration, and feature-rich applications.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="container mx-auto py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my mobile app projects, featuring Flutter development, 
            real-time features, and enterprise-grade applications built with modern technologies.
          </p>
        </div>
        <Projects />
      </div>
    </div>
  );
}
