import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // bg: '#ecf0f1',
        bg: '#2c3e50',
        color: 'white',
      },
    },
  },
  colors: {
    background: {
      // 100: '#ecf0f1',
      100: '#2c3e50',
    },
  },
  fonts: {
    heading: `'Biryani', sans-serif`,
    body: `'Biryani', sans-serif`,
  },
});

export default theme;
