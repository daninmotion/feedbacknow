import React from 'react';
import { Icon, Heading, Box, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box
      width="100%"
      backgroundColor="whiteAlpha.900"
      borderRadius="8px"
      p="32px"
      mt="32px"
    >
      <Heading size="md" as="h2">
        Get feedback on your site instantly.
      </Heading>
      <Text pt="8px">Start today, then grow with us.</Text>
      <Button variant="solid" size="md" mt="32px">
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
);

export default DashboardShell;
