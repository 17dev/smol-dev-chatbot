// nextjs-app/utils/shadcn.js

import { Box, Flex, Text } from '@shadcn/ui';

export const Container = ({ children }) => (
  <Box maxWidth="1200px" mx="auto" px={6}>
    {children}
  </Box>
);

export const Header = ({ title, subtitle }) => (
  <Flex justifyContent="space-between" alignItems="center" mb={8}>
    <Box>
      <Text as="h1" fontSize={6} mb={2}>
        {title}
      </Text>
      <Text as="h2" fontSize={4} color="gray">
        {subtitle}
      </Text>
    </Box>
  </Flex>
);

export const Button = ({ children, ...props }) => (
  <Box
    as="button"
    px={4}
    py={2}
    borderRadius="md"
    bg="blue"
    color="white"
    {...props}
  >
    {children}
  </Box>
);

export const Input = ({ ...props }) => (
  <Box
    as="input"
    px={3}
    py={2}
    borderRadius="md"
    borderColor="gray"
    {...props}
  />
);

export const Dropdown = ({ children, ...props }) => (
  <Box
    as="select"
    px={3}
    py={2}
    borderRadius="md"
    borderColor="gray"
    {...props}
  >
    {children}
  </Box>
);