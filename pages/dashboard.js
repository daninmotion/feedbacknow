//External
import Head from 'next/head';
import { Button, Heading, Text, Code, Flex } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';

//Internal
import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
      return 'Loading...';
  } else {
    return (
        <EmptyState />
    );
  }
};

export default Dashboard;
