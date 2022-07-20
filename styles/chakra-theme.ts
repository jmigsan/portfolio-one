import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#ecf0f1',
      }
    })
  },
});

export default theme;
