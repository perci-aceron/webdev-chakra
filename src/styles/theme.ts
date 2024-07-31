// theme.js or theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        maxW: '1920px',
        mx: 'auto',
        px: 4,
        w: 'full',
      },
    },
  }
});

export default theme;
