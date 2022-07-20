import type { NextPage } from 'next';
import Head from 'next/head';

import { Box, Center, Text } from '@chakra-ui/react';
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
        <Center>
          <Text>yo</Text>
        </Center>
      </Box>
    </>
  );
};

export default Home;
