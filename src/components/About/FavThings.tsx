import { Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

import { trpc } from '@/utils/trpc';
import { favNumGen } from '@/utils/favNumGen';

import { useState, useEffect } from 'react';

// maybe putting this on page then passing as prop to component will fix it, might as well no longer be separate component. actually keep as component anyway.

const FavThings: NextPage = () => {
  const [fNum, setfNum] = useState<number | undefined>(undefined);
  const [fCat, setfCat] = useState<string | undefined>(undefined);
  const catData = trpc.useQuery(['getFavCatFact']);

  useEffect(() => {
    setfNum(favNumGen(388071));
    setfCat(catData.data?.catFact);
  }, []);

  return (
    <Stack>
      <Text>My favourite number right now is {fNum}</Text>
      <Text>My favourite cat fact right now: {fCat}</Text>
    </Stack>
  );
};

export default FavThings;
