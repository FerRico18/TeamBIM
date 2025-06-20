import {
    Box,
    Flex,
    Text,
    Avatar,
    VStack,
    HStack,
    IconButton,
    Image,
    useColorModeValue,
    Heading,
    Tooltip,
    Spacer,
    Select,
    Input,
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
import { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import logo from '../../logoTeamBIM.png';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const COLORS = ["#BEB8EB", "#5299D3", "#0B5563", "#5E5C6C", '#A2BCE0'];

const getDateRange = (start, end, mode) => {
    const result = [];
    const curr = new Date(start);

    while (curr <= end) {
        result.push(new Date(curr));
        if (mode === 'days') curr.setDate(curr.getDate() + 1);
        else if (mode === 'weeks') curr.setDate(curr.getDate() + 7);
        else curr.setMonth(curr.getMonth() + 1);
    }

    return result;
};

const PersonalDashboard = () => {
    const [expanded, setExpanded] = useState(false);
    const [userName, setUserName] = useState('');
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);

    // ✅ Estados bien definidos:
    const [projectSummary, setProjectSummary] = useState([]);
    const [ganttData, setGanttData] = useState([]);
    const [lineData, setLineData] = useState([]);

    const [startDate, setStartDate] = useState(new Date('2024-06-01'));
    const [endDate, setEndDate] = useState(new Date('2024-08-01'));
    const [mode, setMode] = useState('weeks');


    const gridColumns = useMemo(() => getDateRange(startDate, endDate, mode), [startDate, endDate, mode]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await api.get('/api/dashboard-data');
                const data = response.data;

                // ✅ Asignar correctamente a los estados existentes
                setUsuario(data.usuario);
                setProjectSummary(data.proyectos || []);
                setGanttData(data.cronograma || []);
                setLineData(data.actividadesPorSemana || []);
            } catch (error) {
                console.error('Error al cargar datos del dashboard:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);



    const handleHover = (e) => e.currentTarget.style.background = '#6495ED';
    const handleLeave = (e) => e.currentTarget.style.background = 'transparent';
    const formattedDate = new Date().toLocaleDateString('es-MX', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <Flex minH="100vh" bg="gray.900" color="white">
            <Box
                bg="gray.800"
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
                            _hover={{ bg: '#6495ED' }}
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
                                    onMouseEnter={handleHover}
                                    onMouseLeave={handleLeave}
                                    borderRadius="md"
                                    p={1}
                                    w="full"
                                >
                                    <Image src={icon} alt={label} boxSize="20px" />
                                    {expanded && <Text>{label}</Text>}
                                </HStack>
                            ))}
                        </VStack>
                    </Box>
                    <HStack
                        cursor="pointer"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        p={1}
                        borderRadius="md"
                        w="full"
                    >
                        <Image src={ayudaIcon} alt="Ayuda" boxSize="20px" />
                        {expanded && <Text>Ayuda</Text>}
                    </HStack>
                </VStack>
            </Box>

            <Box ml={expanded ? '220px' : '60px'} flex="1" p={6}>
                <Flex justify="space-between" align="center" mb={6}>
                    <HStack>
                        <Avatar name={userName} size="md" />
                        <Text fontWeight="bold">{userName}</Text>
                    </HStack>
                    <Text>{formattedDate}</Text>
                </Flex>

                <Flex gap={4} mb={4} wrap="wrap">
                    <Box w="300px" flexShrink={0} bg="gray.800" p={4} borderRadius="md">
                        <Text mb={2}>Progreso de Proyectos</Text>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={projectSummary}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={60}
                                    label
                                >
                                    {projectSummary.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <RechartsTooltip />
                            </PieChart>
                        </ResponsiveContainer>

                        <Box mt={4}>
                            <Text mb={2}>Actividades por Semana</Text>
                            <ResponsiveContainer width="100%" height={150}>
                                <LineChart data={lineData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" stroke="#CBD5E0" />
                                    <YAxis stroke="#CBD5E0" />
                                    <RechartsTooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="Actividades" stroke="#63b3ed" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </Box>
                    </Box>

                    <Box flex="1" bg="gray.800" p={4} borderRadius="md" overflow="auto" minW="600px">
                        <Flex justify="space-between" mb={2} align="center">
                            <Text fontWeight="bold">Cronograma</Text>
                            <HStack>
                                <Select size="sm" value={mode} onChange={(e) => setMode(e.target.value)}>
                                    <option value="days">Días</option>
                                    <option value="weeks">Semanas</option>
                                    <option value="months">Meses</option>
                                </Select>
                                <Input size="sm" type="date" value={startDate.toISOString().split('T')[0]} onChange={(e) => setStartDate(new Date(e.target.value))} />
                                <Input size="sm" type="date" value={endDate.toISOString().split('T')[0]} onChange={(e) => setEndDate(new Date(e.target.value))} />
                            </HStack>
                        </Flex>

                        <Box borderTop="1px solid #444">
                            <Flex borderBottom="1px solid gray" mb={2}>
                                {gridColumns.map((col, i) => (
                                    <Box key={i} flex="1" textAlign="center" fontSize="xs" color="gray.400">
                                        {mode === 'days' && col.toLocaleDateString('es-MX')}
                                        {mode === 'weeks' && `Sem ${Math.ceil((col.getDate() - 1) / 7 + 1)} ${col.toLocaleString('default', { month: 'short' })}`}
                                        {mode === 'months' && col.toLocaleString('default', { month: 'short', year: 'numeric' })}
                                    </Box>
                                ))}
                            </Flex>

                            {ganttData.map((task, idx) => {
                                const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
                                const taskStart = Math.max((new Date(task.start) - startDate) / (1000 * 60 * 60 * 24), 0);
                                const taskEnd = Math.min((new Date(task.end) - startDate) / (1000 * 60 * 60 * 24), totalDays);
                                const taskWidth = ((taskEnd - taskStart) / totalDays) * 100;
                                const taskLeft = (taskStart / totalDays) * 100;

                                return (
                                    <Tooltip
                                        key={idx}
                                        label={`${task.name}: ${task.progress}% completado`}
                                        placement="top-start"
                                    >
                                        <Box
                                            h="30px"
                                            my={2}
                                            bg={task.color}
                                            w={`${taskWidth}%`}
                                            ml={`${taskLeft}%`}
                                            borderRadius="md"
                                            position="relative"
                                            cursor="pointer"
                                            onClick={() => navigate(`/proyectos/${task.name.toLowerCase().replace(/\s/g, '-')}`)}
                                        >
                                            <Text pl={2} fontSize="xs" color="white">
                                                {task.name}
                                            </Text>
                                        </Box>
                                    </Tooltip>
                                );
                            })}
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default PersonalDashboard;
