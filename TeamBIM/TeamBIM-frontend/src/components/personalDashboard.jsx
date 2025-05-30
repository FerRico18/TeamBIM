import {
  Box,
  Flex,
  Text,
  Avatar,
  VStack,
  HStack,
  Spacer,
  IconButton,
  useColorModeValue,
  Progress,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const PersonalDashboard = () => {
  // Simulación de datos
  const [userName] = useState("Fernanda Rico");
  const [progress] = useState(60);
  const [title] = useState("Avance del Proyecto BIM");

  return (
    <>
      {/* Sidebar */}
      <Box
        bg={useColorModeValue('gray.800', 'gray.900')}
        color="white"
        w={{ base: '60px', md: '220px' }}
        p={4}
        minH="100vh"
        position="fixed"
      >
        <VStack align="start" spacing={6} display={{ base: 'none', md: 'flex' }}>
          <Text fontSize="xl" fontWeight="bold" color="#6495ED">
            TeamBIM
          </Text>
          <Text>Dashboard</Text>
          <Text>Proyectos</Text>
          <Text>Mi Cuenta</Text>
        </VStack>
      </Box>

      {/* Header */}
      <Flex
        bg={useColorModeValue('gray.700', 'gray.800')}
        w="full"
        h="60px"
        align="center"
        px={4}
        justify="space-between"
        position="fixed"
        top={0}
        left={{ base: 0, md: '220px' }}
        right={0}
        zIndex={100}
      >
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: 'inline-flex', md: 'none' }}
        />
        <Spacer />
        <HStack spacing={3}>
          <Avatar name={userName} size="sm" />
          <Text color="white">{userName}</Text>
        </HStack>
      </Flex>

      {/* Contenido */}
      <Box
        ml={{ base: 0, md: '220px' }}
        mt="80px"
        p={6}
        bg={useColorModeValue('gray.700', 'gray.700')}
        minH="calc(100vh - 80px)"
        color="white"
      >
        <Box
          bg={useColorModeValue('gray.800', 'gray.800')}
          p={5}
          rounded="lg"
          boxShadow="md"
          w="full"
        >
          <Text fontWeight="bold" mb={2}>{title}</Text>
          <Progress value={progress} colorScheme="blue" />
          <Text mt={1} fontSize="sm">Avance: {progress}%</Text>
        </Box>
      </Box>
    </>
  );
};

export default PersonalDashboard;
