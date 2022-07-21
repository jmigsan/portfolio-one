import type { NextPage } from 'next';
import Head from 'next/head';

import { Box, Link, Stack, Heading } from '@chakra-ui/react';
import { trpc } from '@/utils/trpc';

const HomeLink: React.FC<{ text: string }> = ({ text }) => (
  <Link
    fontSize={{ base: '5xl', md: '5xl' }}
    pl={{ base: 28, md: 52 }}
    py={{ base: 3, md: 5 }}
  >
    {text}
  </Link>
);

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['hello', { text: 'yo' }]);

  return (
    <>
      <Head>
        <title>Juan Miguel Sanchez</title>
        <meta
          name='description'
          content="Juan Miguel Sanchez's Portfolio Home Page"
        />
      </Head>
      <Box>
        <Heading fontSize={'6xl'} p={10}>
          Juan Miguel Sanchez
        </Heading>

        <Box pt={{ base: 0, md: 10 }}>
          <Stack>
            <HomeLink text='Portfolio'></HomeLink>
            <HomeLink text='About'></HomeLink>
            <HomeLink text='GitHub'></HomeLink>
            <HomeLink text='YouTube'></HomeLink>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
