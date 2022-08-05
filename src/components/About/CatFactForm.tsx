import { Box, Button, HStack, Input, Stack, Text } from '@chakra-ui/react';

const CatFactForm = () => {
  return (
    <Stack>
      <Box pt={5}>
        <Text>Favourite cat fact</Text>
        <HStack>
          <Input />
          <Button colorScheme={'whiteAlpha'} w={'40'}>
            Submit
          </Button>
          <Button colorScheme={'whiteAlpha'} w={'56'}>
            Reroll Cat Fact
          </Button>
        </HStack>
      </Box>
    </Stack>
  );
};
export default CatFactForm;
