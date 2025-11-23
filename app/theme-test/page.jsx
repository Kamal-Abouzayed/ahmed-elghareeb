import ThemeExamples from '../components/ThemeExamples';

export default function ThemeTestPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto py-8">
        <ThemeExamples />
      </div>
    </div>
  );
}
