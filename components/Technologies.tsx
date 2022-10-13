import { Technology } from './Technology';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJest,
  SiPython,
  SiC,
  SiVercel,
  SiHeroku,
  SiFirebase,
  SiWebpack,
  SiGit,
} from 'react-icons/si';

export const Technologies = () => {
  return (
    <div className='pl-12 lg:w-96'>
      <p className='text-2xl font-semibold mb-3'>Technologies</p>
      <ul className='grid grid-flow-col grid-rows-9 gap-2 md:grid-rows-6 xl:gap-x-4'>
        <Technology name='HTML' icon={<SiHtml5 />} />
        <Technology name='CSS' icon={<SiCss3 />} />
        <Technology name='JavaScript' icon={<SiJavascript />} />
        <Technology name='TypeScript' icon={<SiTypescript />} />
        <Technology name='React' icon={<SiReact />} />
        <Technology name='NextJS' icon={<SiNextdotjs />} />
        <Technology name='TailwindCSS' icon={<SiTailwindcss />} />
        <Technology name='NodeJS' icon={<SiNodedotjs />} />
        <Technology name='Express' icon={<SiExpress />} />
        <Technology name='MongoDB' icon={<SiMongodb />} />
        <Technology name='Jest' icon={<SiJest />} />
        <Technology name='Python' icon={<SiPython />} />
        <Technology name='C' icon={<SiC />} />
        <Technology name='Vercel' icon={<SiVercel />} />
        <Technology name='Heroku' icon={<SiHeroku />} />
        <Technology name='Firebase' icon={<SiFirebase />} />
        <Technology name='Webpack' icon={<SiWebpack />} />
        <Technology name='Git' icon={<SiGit />} />
      </ul>
    </div>
  );
};