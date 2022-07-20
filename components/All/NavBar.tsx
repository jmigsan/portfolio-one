import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Heading,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavLink: React.FC<{ text: string; link: string }> = ({ text, link }) => (
  <Link
    px={3}
    py={2}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.100',
    }}
  >
    {text} {link}
  </Link>
);

const TitleLink = () => (
  <Link
    _hover={{
      textDecoration: 'none',
    }}
  >
    <Heading fontSize={'2xl'} mt={-1}>
      Juan Miguel Sanchez
    </Heading>
  </Link>
);

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'white'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <TitleLink />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLink text='Your Logs' link='yo' />
              <NavLink text='Dashboard' link='yo' />
              <NavLink text='Portfolio' link='yo' />
              <NavLink text='Invest' link='yo' />
            </HStack>
          </HStack>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg={'white'}
            _hover={{ bg: 'gray.100' }}
            _expanded={{ bg: 'gray.100' }}
          />
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink text='Your Logs' link='yo' />
              <NavLink text='Dashboard' link='yo' />
              <NavLink text='Portfolio' link='yo' />
              <NavLink text='Invest' link='yo' />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
