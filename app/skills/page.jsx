import EnhancedSkills from "../components/skills/enhanced-skills";

export const metadata = {
  title: 'Skills - Ahmed Elghareeb',
  description: 'Explore my technical skills and expertise in cross-platform development, Flutter/Dart, Firebase, state management, Git, and cutting-edge mobile technologies. See my proficiency in various programming languages and tools.',
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen transition-colors duration-400">
      <div className="container mx-auto py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-laravelGray-900 dark:text-white mb-4 transition-colors duration-400">
            My Skills
          </h1>
          <p className="text-lg text-laravelGray-600 dark:text-laravelGray-300 max-w-2xl mx-auto transition-colors duration-400">
            Explore my technical skills and expertise in cross-platform development, Flutter/Dart, Firebase, state management, Git, and cutting-edge mobile technologies. 
            See my proficiency in various programming languages and tools.
          </p>
        </div>
        <EnhancedSkills />
      </div>
    </div>
  );
}
