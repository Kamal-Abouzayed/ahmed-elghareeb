import { projectsData } from '@/utils/data/projects-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import GlowCard from '../../components/helper/glow-card';
import Image from 'next/image';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const project = projectsData.find(p => p.id.toString() === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} - Projects - Ahmed Elghareeb`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData.find(p => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen transition-colors duration-400">
      <div className="container mx-auto py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-flutterBlue dark:text-[#16f2b3] hover:text-flutterBlueDark dark:hover:text-[#14d9a3] transition-colors duration-300 font-medium"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-laravelGray-900 dark:text-white mb-4 transition-colors duration-400">
            {project.name}
          </h1>
          <p className="text-lg text-laravelGray-600 dark:text-laravelGray-300 max-w-3xl mx-auto transition-colors duration-400">
            {project.description}
          </p>
        </div>

        {/* Project Details */}
        <div className="max-w-4xl mx-auto">
          <GlowCard identifier="project-details">
            <div className="p-8">

              
              {/* Project Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Role */}
                <div>
                  <h3 className="text-xl font-semibold text-flutterBlue dark:text-[#16f2b3] mb-3 transition-colors duration-400">
                    My Role
                  </h3>
                  <p className="text-laravelGray-900 dark:text-white text-lg transition-colors duration-400">
                    {project.role}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-semibold text-flutterBlue dark:text-[#16f2b3] mb-3 transition-colors duration-400">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-flutterBlue/10 dark:bg-[#16f2b3]/20 text-flutterBlue dark:text-[#16f2b3] rounded-full text-sm font-medium transition-colors duration-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-flutterBlue dark:text-[#16f2b3] mb-3 transition-colors duration-400">
                  Project Description
                </h3>
                <p className="text-laravelGray-700 dark:text-laravelGray-300 leading-relaxed transition-colors duration-400">
                  {project.description}
                </p>
              </div>

              {/* Links */}
              {(project.demo || project.code) && (
                <div className="border-t border-laravelGray-200 dark:border-laravelGray-700 pt-8">
                  <h3 className="text-xl font-semibold text-flutterBlue dark:text-[#16f2b3] mb-4 transition-colors duration-400">
                    Project Links
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-flutterBlue hover:bg-flutterBlueDark text-white rounded-lg transition-colors duration-300 font-medium"
                      >
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                        View Live Demo
                      </Link>
                    )}
                    {project.code && (
                      <Link
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-flutterBlue text-flutterBlue hover:bg-flutterBlue hover:text-white dark:border-[#16f2b3] dark:text-[#16f2b3] dark:hover:bg-[#16f2b3] dark:hover:text-laravelGray-900 rounded-lg transition-colors duration-300 font-medium"
                      >
                        <svg 
                          className="w-5 h-5" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Source Code
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </GlowCard>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-laravelGray-900 dark:text-white mb-8 text-center transition-colors duration-400">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`}>
                  <GlowCard identifier={`related-${relatedProject.id}`}>
                    <div className="p-4 cursor-pointer group">
                      <h3 className="text-lg font-semibold text-flutterBlue dark:text-[#16f2b3] mb-2 transition-colors duration-400 group-hover:text-flutterBlueDark dark:group-hover:text-[#14d9a3]">
                        {relatedProject.name}
                      </h3>
                      <p className="text-sm text-laravelGray-600 dark:text-laravelGray-300 mb-3 transition-colors duration-400 line-clamp-2">
                        {relatedProject.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {relatedProject.tools.slice(0, 2).map((tool, index) => (
                          <span 
                            key={index}
                            className="text-xs px-2 py-1 bg-flutterBlue/10 dark:bg-[#16f2b3]/20 text-flutterBlue dark:text-[#16f2b3] rounded-full transition-colors duration-400"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
