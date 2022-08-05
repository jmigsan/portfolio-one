import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Box, Link as ChakraLink, Stack, Heading } from '@chakra-ui/react';
import { useState } from 'react';

const HomeLink: React.FC<{ text: string; link: string }> = ({ text, link }) => (
  <Link href={link}>
    <ChakraLink
      fontSize={{ base: '5xl', md: '5xl' }}
      pl={{ base: 28, md: 52 }}
      py={{ base: 3, md: 5 }}
      href={link}
    >
      {text}
    </ChakraLink>
  </Link>
);

const Home: NextPage = () => {
  const [huber, setHuber] = useState('false');

  const theHuber = () => {
    setHuber('true');
  };

  const unHuber = () => {
    setHuber('false');
  };

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
          <ChakraLink>Juan Miguel Sanchez</ChakraLink>
        </Heading>

        {huber}

        <Box pt={{ base: 0, md: 10 }}>
          <Stack>
            <Box
              onMouseEnter={(e) => theHuber()}
              onMouseLeave={(e) => unHuber()}
            >
              <HomeLink link='/' text='Portfolio' />
            </Box>
            <Box
              onMouseEnter={(e) => theHuber()}
              onMouseLeave={(e) => unHuber()}
            >
              <HomeLink link='about' text='About' />
            </Box>
            <HomeLink link='https://github.com/jmigsan' text='GitHub' />
            <Box
              onMouseEnter={(e) => theHuber()}
              onMouseLeave={(e) => unHuber()}
            >
              <HomeLink
                link='https://www.youtube.com/channel/UCR1zRpg1WYnGWdFlduV_CRg'
                text='YouTube'
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
