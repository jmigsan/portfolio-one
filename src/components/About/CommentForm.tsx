import { trpc } from '@/utils/trpc';
import {
  Avatar,
  Box,
  Button,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const CommentForm: React.FC<{
  comments: {
    id: string;
    author: string;
    createdAt: Date;
    content: string;
  }[];
}> = (comments) => {
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');

  const commentMutation = trpc.useMutation(['comment']);

  const commmentPress = () => {
    if (comment === '') {
      return;
    }

    if (author === '') {
      commentMutation.mutate({ author: 'Anonymous', content: comment });
    }

    if (author !== '' && comment !== '') {
      commentMutation.mutate({ author: author, content: comment });
    }

    setComment('');
    setAuthor('');
  };

  return (
    <Stack>
      <Box pt={5}>
        <Text>Comments</Text>
        <Stack>
          <HStack>
            <Text w={'32'}>Name</Text>
            <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
          </HStack>
          <HStack>
            <Text w={'32'}>Comment</Text>
            <Input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </HStack>
          <Button
            colorScheme={'whiteAlpha'}
            w={'40'}
            onClick={commmentPress}
            alignSelf={'end'}
          >
            Comment
          </Button>
        </Stack>
      </Box>
      <CommMap props={comments.comments} />
    </Stack>
  );
};

const CommMap: React.FC<{
  props: {
    id: string;
    author: string;
    createdAt: Date;
    content: string;
  }[];
}> = (props) => {
  if (props.props === undefined) return null;

  return (
    <>
      <Stack spacing={4}>
        {props.props.map((x) => {
          return (
            <Box rounded={5} border='1px' borderColor='gray.200' key={x.id}>
              <Box pt={3} px={3}>
                <Avatar size={'xs'} />
                <Text as={'span'} p={2}>
                  {x.author}
                </Text>
              </Box>
              <Box p={3} mt={3}>
                {x.content}
              </Box>
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export default CommentForm;
