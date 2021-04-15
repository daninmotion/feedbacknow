import React from 'react';
import { Icon, Heading, Flex, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="whiteAlpha.900"
      borderRadius="8px"
      p="32px"
      mt="32px"
      justify="center"
      direction="column"
      align="center"
    >
      <Heading size="md" as="h2">
        You haven't added any sites
      </Heading>
      <Text pt="8px">Welcome, let's get started</Text>
      <AddSiteModal />
    </Flex>
  </DashboardShell>
);

export default EmptyState;
