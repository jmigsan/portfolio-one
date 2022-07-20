import type { NextPage } from 'next';
import Head from 'next/head';

import { Box, Center, Link, Text, Stack } from '@chakra-ui/react';
import NavBar from '../components/All/NavBar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Juan Miguel Sanchez</title>
        <meta
          name='description'
          content="Juan Miguel Sanchez's Portfolio Home Page"
        />
      </Head>

      <NavBar />

      <Box>
        <Box pl={20} pt={18}>
          <Stack>
            <Link>Portfolio</Link>
            <Link>About</Link>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
