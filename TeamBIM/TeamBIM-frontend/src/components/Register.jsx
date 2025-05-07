import { useEffect, useState } from 'react';
import {
    Box,
    Flex,
    Heading,
    Input,
    Button,
    Select,
    FormControl,
    FormLabel,
    Text,
    VStack,
    useToast,
    useColorModeValue,
} from '@chakra-ui/react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [area, setArea] = useState('');
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        setName("");
        setEmail("");
        setPassword("");
        setArea("");
    }, []);

    const handleRegister = async () => {
        try {
            const response = await api.post('/register', {
                name,
                email,
                password,
                area,
            });
            setEmail("");
            setPassword("");
            setName("");
            setArea("");
            console.log('Registro exitoso:', response.data);

            toast({
                title: 'Registro exitoso',
                description: '¡Ya puedes iniciar sesión!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });

            navigate('/'); // Redirigir al login después del registro
        } catch (error) {
            console.error('Error en registro:', error.response?.data || error.message);
            toast({
                title: 'Error en el registro',
                description: error.response?.data?.message || 'Ocurrió un error',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.900', 'gray.900')} display="flex" justifyContent="center" alignItems="center">
            <Box
                bg={useColorModeValue('gray.800', 'gray.800')}
                p={10}
                rounded="xl"
                shadow="lg"
                w={{ base: "90%", md: "400px" }}
            >
                <VStack spacing={6}>
                    <Heading size="lg" color="white">Crear Cuenta</Heading>

                    <FormControl>
                        <FormLabel color="gray.300">Nombre completo</FormLabel>
                        <Input
                            type="text"
                            placeholder="Tu nombre"
                            bg="gray.700"
                            border="none"
                            color="white"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel color="gray.300">Correo electrónico</FormLabel>
                        <Input
                            type="email"
                            placeholder="correo@teamBIM.com"
                            bg="gray.700"
                            border="none"
                            color="white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel color="gray.300">Contraseña</FormLabel>
                        <Input
                            type="password"
                            placeholder="********"
                            bg="gray.700"
                            border="none"
                            color="white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel color="gray.300">Área</FormLabel>
                        <Select
                            placeholder="Selecciona tu área"
                            bg="gray.700"
                            border="none"
                            color="white"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                        >
                            <option style={{ backgroundColor: '#2D3748' }} value="Ingeniería Civil">Ingeniería Civil</option>
                            <option style={{ backgroundColor: '#2D3748' }} value="Arquitectura">Arquitectura</option>
                            <option style={{ backgroundColor: '#2D3748' }} value="Gestión de Proyectos">Gestión de Proyectos</option>
                            <option style={{ backgroundColor: '#2D3748' }} value="Estudiante">Estudiante</option>
                            <option style={{ backgroundColor: '#2D3748' }} value="Otro">Otro</option>
                        </Select>
                    </FormControl>

                    <Button colorScheme="blue" w="full" mt={4} onClick={handleRegister}>
                        Registrarse
                    </Button>

                    <Button variant="link" color="#6495ED" onClick={() => navigate('/')}>
                        ¿Ya tienes cuenta? Inicia sesión
                    </Button>
                </VStack>
                <Text mt={10} textAlign="center" fontSize="sm" color="gray.500">
                    © 2025 TeamBIM - Inspirado en Autodesk BIM
                </Text>
            </Box>
        </Box>
    );
};

export default Register;
