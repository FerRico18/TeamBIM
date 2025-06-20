// Projects.jsx - Lista de Proyectos y Actividades (modo oscuro)

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  IconButton,
  Button,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import {
  dashboardIcon,
  menuIcon,
  proyectosIcon,
  reportesIcon,
  configuracionesIcon,
  modelosIcon,
  equiposIcon,
  ayudaIcon,
} from '../assets/icons/icons.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const mockProyectos = [
  {
    nombre: 'Casa Modelo',
    actividades: ['Plano base', 'Render preliminar', 'Diseño fachada', 'Materiales']
  },
  {
    nombre: 'Edificio Central',
    actividades: ['Planificación', 'Presupuesto', 'Cimientos', 'Muros']
  },
  {
    nombre: 'Remodelación IT',
    actividades: ['Diagnóstico', 'Cableado', 'Pisos', 'Finalización']
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <Flex minH="100vh" bg={useColorModeValue('gray.100', 'gray.800')}>
      {/* Sidebar */}
      <Box
        bg={useColorModeValue('gray.800', 'gray.900')}
        color="white"
        w={expanded ? '220px' : '60px'}
        p={4}
        position="fixed"
        transition="width 0.2s"
        minH="100vh"
      >
        <VStack align="start" spacing={6} h="full" justify="space-between">
          <Box w="full">
            <IconButton
              icon={<Image src={menuIcon} alt="Menu" boxSize="20px" />}
              aria-label="Expand sidebar"
              onClick={() => setExpanded(!expanded)}
              mb={4}
              bg="transparent"
              _hover={{ bg: '#0d79da' }}
            />
            <VStack align="start" spacing={4}>
              {[{
                icon: dashboardIcon, label: 'Dashboard Personal', route: '/dashboard'
              }, {
                icon: proyectosIcon, label: 'Mis Proyectos', route: '/projects'
              }, {
                icon: reportesIcon, label: 'Reportes', route: '/reportes'
              }, {
                icon: modelosIcon, label: 'Modelos', route: '/modelos'
              }, {
                icon: equiposIcon, label: 'Equipos', route: '/equipos'
              }, {
                icon: configuracionesIcon, label: 'Configuraciones', route: '/configuraciones'
              }].map(({ icon, label, route }, index) => (
                <HStack
                  key={index}
                  onClick={() => navigate(route)}
                  cursor="pointer"
                  borderRadius="md"
                  p={1}
                  w="full"
                  _hover={{ bg: '#0d79da' }}
                >
                  <Image src={icon} alt={label} boxSize="20px" />
                  {expanded && <Text>{label}</Text>}
                </HStack>
              ))}
            </VStack>
          </Box>
          <HStack cursor="pointer" p={1} borderRadius="md" w="full" _hover={{ bg: '#0d79da' }}>
            <Image src={ayudaIcon} alt="Ayuda" boxSize="20px" />
            {expanded && <Text>Ayuda</Text>}
          </HStack>
        </VStack>
      </Box>

      {/* Main content */}
      <Box ml={expanded ? '220px' : '60px'} flex="1" p={6} bg="#003593">
        <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>Mis Proyectos</Text>
        <VStack spacing={6} align="stretch">
          {mockProyectos.map((proy, idx) => (
            <Box key={idx} bg="gray.700" p={4} borderRadius="md">
              <Text fontSize="xl" fontWeight="semibold" color="white" mb={2}>{proy.nombre}</Text>
              <VStack align="stretch" spacing={2}>
                {proy.actividades.map((act, i) => (
                  <Flex
                    key={i}
                    justify="space-between"
                    align="center"
                    p={3}
                    borderRadius="md"
                    bg="gray.600"
                    _hover={{ bg: 'gray.500' }}
                  >
                    <Text color="white">{act}</Text>
                    <Button size="sm" colorScheme="red">Bloquear</Button>
                  </Flex>
                ))}
              </VStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default Projects;
