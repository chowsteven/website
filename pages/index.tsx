import type { NextPage } from 'next';
import Head from 'next/head';
import { Intro } from '../components/Intro';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Steven Chow</title>
        <meta name='description' content='' />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>

      <Intro />

      <footer></footer>
    </>
  );
};

export default Home;
