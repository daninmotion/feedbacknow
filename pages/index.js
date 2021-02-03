//External
import Head from 'next/head';
import { Button, Heading, Text, Code } from '@chakra-ui/react';

//Internal
import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <div className="container">
      <Head>
        <title>Feedbacknow</title>
      </Head>
      <main>
        <Heading fontWeight="bold">Feedbacknow</Heading>
        <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <Button bg="brand.100" onClick={(e) => auth.signout()}>
            Sign Out
          </Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
};

export default Home;
