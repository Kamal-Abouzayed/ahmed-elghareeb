import { projectsData } from '@/utils/data/projects-data';
import SmallProjectCard from '../../projects/small-project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-flutterBlue/20 dark:bg-flutterBlue/10 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30 transition-colors duration-400"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-flutterBlue dark:bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md transition-colors duration-400">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-flutterBlue dark:bg-[#1a1443] transition-colors duration-400"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <SmallProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
