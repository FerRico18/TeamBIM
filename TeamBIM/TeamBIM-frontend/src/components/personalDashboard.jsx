import {
    Box,
    Flex,
    Text,
    Avatar,
    VStack,
    HStack,
    IconButton,
    useColorModeValue,
    Progress,
    Heading,
    Tooltip,
    useDisclosure,
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
} from '../assets/icons/icons';
import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import Calendar from 'react-calendar';
import logo from '../../logoTeamBIM.png';
import 'react-calendar/dist/Calendar.css';


const COLORS = ["#BEB8EB", "#5299D3", "#0B5563", "#5E5C6C", '#A2BCE0'];
const data = [
    { name: 'Proyecto A', value: 400 },
    { name: 'Proyecto B', value: 300 },
    { name: 'Proyecto C', value: 300 },
];

const ganttData = [
    { name: 'Proyecto A', start: 1, end: 4, color: '#BEB8EB' },
    { name: 'Proyecto B', start: 2, end: 5, color: '#5299D3' },
    { name: 'Proyecto C', start: 3, end: 6, color: '#0B5563' },
    { name: 'Proyecto D', start: 3, end: 6, color: '#5E5C6C' },
    { name: 'Proyecto E', start: 3, end: 6, color: '#A2BCE0' },
];

const PersonalDashboard = () => {
    const [date, setDate] = useState(new Date());
    const [expanded, setExpanded] = useState(false);

    return (
        <Flex minH="100vh">
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
                            _hover={{ bg: "gray.600" }}
                        />

                        <VStack align="start" spacing={4}>
                            <HStack>
                                <Image src={logo} alt="Logo" boxSize="20px" />
                                {expanded && <Text fontSize="xl" fontWeight="bold">TeamBIM</Text>}
                            </HStack>

                            <HStack>
                                <Image src={dashboardIcon} alt="Dashboard" boxSize="20px" />
                                {expanded && <Text>Dashboard Personal</Text>}
                            </HStack>

                            <HStack>
                                <Image src={proyectosIcon} alt="Proyectos" boxSize="20px" />
                                {expanded && <Text>Mis Proyectos</Text>}
                            </HStack>

                            <HStack>
                                <Image src={reportesIcon} alt="Reportes" boxSize="20px" />
                                {expanded && <Text>Reportes</Text>}
                            </HStack>

                            <HStack>
                                <Image src={modelosIcon} alt="Modelos" boxSize="20px" />
                                {expanded && <Text>Modelos</Text>}
                            </HStack>

                            <HStack>
                                <Image src={equiposIcon} alt="Equipos" boxSize="20px" />
                                {expanded && <Text>Equipos</Text>}
                            </HStack>

                            <HStack>
                                <Image src={configuracionesIcon} alt="Config" boxSize="20px" />
                                {expanded && <Text>Configuraciones</Text>}
                            </HStack>
                        </VStack>
                    </Box>

                    <HStack>
                        <Image src={ayudaIcon} alt="Ayuda" boxSize="20px" />
                        {expanded && <Text>Ayuda</Text>}
                    </HStack>
                </VStack>

            </Box>

            {/* Main Content */}
            <Box ml={expanded ? '220px' : '60px'} flex="1" p={6} bg={useColorModeValue('gray.100', 'gray.700')}>
                <Flex justify="space-between" align="center" mb={4}>
                    <Heading size="lg">Panel Principal</Heading>
                    <Avatar name="Fernanda" size="md" />
                </Flex>

                <Flex gap={4} mb={4} wrap="wrap">
                    <Box w="250px" p={4} bg="gray.800" color="white" borderRadius="md">
                        <Text mb={2}>Progreso de Proyectos</Text>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={60}
                                    fill="#8884d8"
                                    label
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <RechartsTooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </Box>

                    <Box w="250px" p={4} bg="gray.800" color="white" borderRadius="md">
                        <Text mb={2}>Calendario</Text>
                        <Calendar onChange={setDate} value={date} />
                    </Box>

                    <Box flex="1" bg="gray.900" p={4} borderRadius="md" overflowX="auto">
                        <Flex justify="space-between" mb={2}>
                            <Text fontWeight="bold">Cronograma</Text>
                            <Text fontSize="sm">Semana actual</Text>
                        </Flex>
                        <Box>
                            {ganttData.map((task, idx) => (
                                <Box
                                    key={idx}
                                    h="30px"
                                    my={2}
                                    bg={task.color}
                                    w={`${(task.end - task.start) * 15}%`}
                                    ml={`${task.start * 10}%`}
                                    borderRadius="md"
                                    transition="all 0.3s"
                                >
                                    <Text pl={2} fontSize="xs" color="white">{task.name}</Text>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default PersonalDashboard;
