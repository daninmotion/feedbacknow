import React from 'react';
import {
  Flex,
  Icon,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button
} from '@chakra-ui/react';
import { auth } from 'firebase';
import { useAuth } from '@/lib/auth';

const IconLogo = (props) => (
  <Icon viewBox="0 0 46 32" {...props}>
    <path
      d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
      fill="currentColor"
    />
  </Icon>
);

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="#fffbfb"
        alignItems="center"
        justifyContent="space-between"
        p="16px"
      >
        <Flex justifyContent="flex-start" alignItems="center">
          <IconLogo width="32px" height="32px" />
          <Link ml={8}>Link text</Link>
          <Link ml={8}>Link text</Link>
        </Flex>
        <Flex alignItems="center">
          <Link mr={8}>Link text</Link>
          <Avatar size="sm" src={auth.user.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.200" p={16} height="100vh">
        <Flex
          maxWidth="800px"
          width="100%"
          ml="auto"
          mr="auto"
          direction="column"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
