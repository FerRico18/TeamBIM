// ProyectoVista.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  VStack,
  HStack,
  Text,
  Input,
  Select,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

const ProyectoVista = () => {
  const [proyectos, setProyectos] = useState([]);
  const [nuevoProyecto, setNuevoProyecto] = useState('');
  const [actividades, setActividades] = useState({});

  const agregarProyecto = () => {
    if (nuevoProyecto.trim() !== '') {
      setProyectos([...proyectos, nuevoProyecto]);
      setNuevoProyecto('');
    }
  };

  const agregarActividad = (proyecto) => {
    const actividad = prompt(`Agregar actividad para "${proyecto}"`);
    const responsable = prompt(`¿Quién es responsable de esta actividad?`);
    const area = prompt(`Área responsable (e.g., Arquitectura, Sistemas, Construcción)`);

    if (actividad && responsable && area) {
      setActividades((prev) => ({
        ...prev,
        [proyecto]: [
          ...(prev[proyecto] || []),
          { tarea: actividad, usuario: responsable, area },
        ],
      }));
    }
  };

  return (
    <Box p={6} bg={useColorModeValue('gray.50', 'gray.800')} minH="100vh">
      <Heading size="lg" mb={4}>Mis Proyectos</Heading>

      <HStack mb={6} spacing={4}>
        <Input
          placeholder="Nuevo proyecto"
          value={nuevoProyecto}
          onChange={(e) => setNuevoProyecto(e.target.value)}
        />
        <Button colorScheme="blue" onClick={agregarProyecto}>
          Crear Proyecto
        </Button>
      </HStack>

      {proyectos.map((proy, index) => (
        <Box key={index} p={4} mb={6} borderRadius="md" bg="gray.700" color="white">
          <HStack justify="space-between">
            <Heading size="md">{proy}</Heading>
            <Button size="sm" colorScheme="teal" onClick={() => agregarActividad(proy)}>
              Agregar Actividad
            </Button>
          </HStack>

          <Divider my={4} />

          <VStack align="start" spacing={2}>
            {(actividades[proy] || []).map((act, idx) => (
              <Box key={idx} w="full" p={3} bg="gray.600" borderRadius="md">
                <Text><strong>Actividad:</strong> {act.tarea}</Text>
                <Text><strong>Responsable:</strong> {act.usuario}</Text>
                <Text><strong>Área:</strong> {act.area}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      ))}
    </Box>
  );
};

export default ProyectoVista;
