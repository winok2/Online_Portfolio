"use client";
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'EHR Data Analysis',
      description: 'Analyzed electronic health records to identify trends in patient outcomes.',
      image: '/images/project1.jpg',
      link: '#',
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Developed a dashboard for real-time monitoring of hospital performance metrics.',
      image: '/images/project2.jpg',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
