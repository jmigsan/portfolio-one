import type { NextPage } from 'next';
import Head from 'next/head';

import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react';
import FavThings from '@/components/About/FavThings';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Juan Miguel Sanchez - About</title>
        <meta name='description' content='About Juan Miguel Sanchez' />
      </Head>

      <Box>
        <Box p={10}>
          <Heading fontSize={'6xl'}>About</Heading>
          <Text>
            <Link href='/'>
              <ChakraLink>Back to home</ChakraLink>
            </Link>
          </Text>
        </Box>

        <Box px={20}>
          <Stack>
            <FavThings />
            <HStack spacing={16}>
              <Stack>
                <Box pt={5}>
                  <Text>Comments</Text>
                  <HStack>
                    <Input />
                    <Button colorScheme={'whiteAlpha'}>Comment</Button>
                  </HStack>
                </Box>
                <Box rounded={5} border='1px' borderColor='gray.200'>
                  Card
                </Box>
              </Stack>
              <Stack>
                <Box pt={5}>
                  <Text>Favourite cat fact</Text>
                  <HStack>
                    <Input />
                    <Button colorScheme={'whiteAlpha'}>Comment</Button>
                  </HStack>
                </Box>
                <Box rounded={5} border='1px' borderColor='gray.200'>
                  Card
                </Box>
              </Stack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
