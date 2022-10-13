import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../interfaces/Project';
import { FiExternalLink } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

interface ProjectProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className='rounded-md border border-gray-600 p-4'>
      <>
        {/* header */}
        <div className='mb-3 border-b border-b-gray-600'>
          {/* if there is a live link, use it in the project name */}
          {/* do not link to current (portfolio) site */}
          {project.link && project.name !== 'Portfolio Website' ? (
            <div className='flex justify-between items-center'>
              <Link href={project.link}>
                <a className='flex items-center gap-1 w-fit text-blue-500 text-xl font-medium underline hover:text-blue-600'>
                  {project.name}
                  <FiExternalLink size={16} />
                </a>
              </Link>
              <Link href={project.github}>
                <a className='hover:scale-110'>
                  <BsGithub size={24} />
                </a>
              </Link>
            </div>
          ) : (
            // if no live link, just show the title
            <div className='flex justify-between items-center'>
              <p className='text-xl font-semibold'>{project.name}</p>
              <Link href={project.github}>
                <a className='hover:scale-110'>
                  <BsGithub size={24} />
                </a>
              </Link>
            </div>
          )}

          <p className='pb-2 text-gray-300'>{project.description}</p>
        </div>

        {/* technologies */}
        <div className='flex gap-2 pb-3'>
          {project.technologies.map((technology, i) => (
            <div key={i}>{technology}</div>
          ))}
        </div>

        {/* image */}
        <div>
          {project.image && (
            <Image
              src={project.image}
              width={770}
              height={400}
              alt='Project image'
            />
          )}
        </div>
      </>
    </div>
  );
};
