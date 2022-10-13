import type { NextPage } from 'next';
import Head from 'next/head';
import { About } from '../components/About';
import { Intro } from '../components/Intro';
import { Projects } from '../components/Projects';

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
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
