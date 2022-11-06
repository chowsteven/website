import { ProjectCard } from './ProjectCard';
import { Project } from '../interfaces/Project';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiFirebase,
  SiElectron,
} from 'react-icons/si';

export const Projects = () => {
  const projects: Project[] = [
    {
      name: 'Freshmints',
      description: 'Desktop application for NFT minting',
      github: 'https://github.com/chowsteven/freshmints',
      image: '/images/freshmints.png',
      technologies: [
        <SiTypescript key={1} size={24} />,
        <SiReact key={2} size={24} />,
        <SiElectron key={3} size={24} />,
        <SiTailwindcss key={4} size={24} />,
      ],
    },
    {
      name: 'Refreshmints',
      description: 'A website that shows the latest NFT activity',
      link: 'https://refreshmints.vercel.app',
      github: 'https://github.com/chowsteven/refreshmints',
      image: '/images/refreshmints.png',
      technologies: [
        <SiTypescript key={1} size={24} />,
        <SiReact key={2} size={24} />,
        <SiNextdotjs key={3} size={24} />,
        <SiTailwindcss key={4} size={24} />,
      ],
    },
    {
      name: 'Roverify',
      description: 'Full stack website for uploading and streaming audio',
      link: 'https://roverify.onrender.com',
      github: 'https://github.com/chowsteven/roverify',
      image: '/images/roverify.png',
      technologies: [
        <SiReact key={1} size={24} />,
        <SiExpress key={2} size={24} />,
        <SiMongodb key={3} size={24} />,
        <SiNodedotjs key={4} size={24} />,
        <SiTailwindcss key={5} size={24} />,
      ],
    },
    {
      name: 'Character Finder',
      description: "A game similar to Where's Waldo",
      link: 'https://character-finder-5d84d.web.app',
      github: 'https://github.com/chowsteven/character-finder',
      image: '/images/character-finder.png',
      technologies: [
        <SiReact key={1} size={24} />,
        <SiFirebase key={2} size={24} />,
      ],
    },
    {
      name: 'Portfolio Website',
      description: 'This website!',
      link: 'https://google.com',
      github: 'https://google.com',
      image: '/images/portfolio.png',
      technologies: [
        <SiTypescript key={1} size={24} />,
        <SiReact key={2} size={24} />,
        <SiNextdotjs key={3} size={24} />,
        <SiTailwindcss key={4} size={24} />,
      ],
    },

    {
      name: 'Shopping Cart',
      description: 'Fake e-commerce store for highly in-demand sneakers',
      github: 'https://github.com/chowsteven/shopping-cart',
      image: '/images/shopping-cart.png',
      technologies: [<SiReact key={1} size={24} />],
    },
  ];

  return (
    <div className='p-12'>
      <p className='text-gray-200 text-2xl font-semibold mb-6'>Projects</p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};
