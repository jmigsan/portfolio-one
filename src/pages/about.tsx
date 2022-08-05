import type { GetServerSideProps } from 'next';
import { prisma } from '@/server/utils/prisma';
import Head from 'next/head';
import {
  Box,
  Divider,
  Heading,
  HStack,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react';
import FavThings from '@/components/About/FavThings';
import Link from 'next/link';
import CatFactForm from '@/components/About/CatFactForm';
import CommentForm from '@/components/About/CommentForm';
import { AsyncReturnType } from '@/server/utils/ts-ahh';

type CommentQueryResult = AsyncReturnType<typeof getComments>;

const About: React.FC<{ comments: CommentQueryResult }> = (props) => {
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
              <CommentForm comments={props.comments} />
              <CatFactForm />
            </HStack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default About;

const getComments = async () => {
  return await prisma.comment.findMany({});
};

export const getStaticProps: GetServerSideProps = async () => {
  const comments = await getComments();
  console.log(comments);

  return { props: { comments: comments } };
};
