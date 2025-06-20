import { useEffect, useState } from 'react';
import { Box, Flex, Heading, Input, Button, FormControl, FormLabel, Text, Link, VStack, Spacer, Image, useToast, useColorModeValue } from '@chakra-ui/react';
import logo from '../../logoTeamBIM.png';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const toast = useToast()
    const navigate = useNavigate();

    useEffect(() => {
        setEmail("");
        setPassword("");
    }, []);

    const handleLogin = async () => {
        try {
            const response = await api.post('/api/login', {
                email,
                password,
            })
            setEmail("");
            setPassword("");
            console.log('Login exitoso:', response.data);

            toast({
                title: 'Bienvenido',
                description: 'Has iniciado sesión con éxito',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            navigate('/dashboard');
        } catch (error) {
            console.error('Error en login:', error.response?.data || error.message);
            console.log('Detalles:', error.response);
            toast({
                title: 'Error de inicio de sesión',
                description: 'Correo o contraseña incorrectos',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.900', 'gray.900')}>

            {/* Top Bar */}
            <Flex
                as="header"
                bg="gray.800"
                px={8}
                py={4}
                align="center"
                boxShadow="md"
            >
                <Image src={logo} alt="TeamBIM Logo" boxSize="40px" objectFit="contain" />
                <Heading size="md" color="#6495ED">
                    TeamBIM
                </Heading>
                <Spacer />
                <Button
                    variant="outline"
                    colorScheme="blue"
                    size="sm"
                    onClick={() => navigate('/register')}
                >
                    Registrarse
                </Button>
            </Flex>

            {/* Login */}
            <Flex align="center" justify="center" mt={12}>
                <Box
                    bg={useColorModeValue('gray.800', 'gray.800')}
                    p={10}
                    rounded="xl"
                    shadow="lg"
                    w={{ base: "90%", md: "400px" }}
                >
                    <VStack spacing={6}>
                        <Heading size="lg" color="white">Iniciar Sesión</Heading>
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
                        <Button colorScheme="blue" w="full" mt={4} onClick={handleLogin}>
                            Entrar
                        </Button>

                    </VStack>
                    <Text mt={10} textAlign="center" fontSize="sm" color="gray.500">
                        © 2025 TeamBIM - Inspirado en Autodesk BIM
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}


export default Login;