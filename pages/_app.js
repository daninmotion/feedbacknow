//External Imports
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

//Internal imports
import { AuthProvider } from '../lib/auth';
import theme from '@/styles/theme';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
