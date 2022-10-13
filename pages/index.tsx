import type { NextPage } from 'next';
import Head from 'next/head';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Intro } from '../components/Intro';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Steven Chow</title>
        <meta name='description' content='' />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>

      <Intro />

      {/* <section className='text-white bg-neutral-900 h-screen overflow-hidden'> */}
      <main className='text-white bg-neutral-900'>
        <div className='max-w-screen mx-auto'>
          <About />
          <Projects />
          <div className='flex flex-col gap-12 pb-12 xl:flex-row xl:gap-[438px]'>
            <Technologies />
            <Contact />
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
