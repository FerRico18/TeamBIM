import {
    Box,
    Flex,
    Text,
    Avatar,
    VStack,
    HStack,
    IconButton,
    useColorModeValue,
    Heading,
    Select,
    Input,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const COLORS = ["#8884d8", "#82ca9d", "#888888", "#6495ED"];

const GanttBar = ({ title, startWeek, endWeek, color }) => {
    const totalWeeks = 12;
    const barWidth = ((endWeek - startWeek + 1) / totalWeeks) * 100;
    const marginLeft = (startWeek / totalWeeks) * 100;

    return (
        <Box
            bg={color}
            height="20px"
            borderRadius="md"
            width={`${barWidth}%`}
            ml={`${marginLeft}%`}
            mb={2}
            title={title}
        />
    );
};

const PersonalDashboard = () => {
    const userName = "Fernanda";
    const pieData = [
        { name: "Q1", value: 30 },
        { name: "Q2", value: 20 },
        { name: "Q3", value: 25 },
        { name: "Q4", value: 25 },
    ];

    const ganttData = [
        { title: "Hotel M. Phase 1", startWeek: 1, endWeek: 3, color: COLORS[0] },
        { title: "Campus Reforma", startWeek: 2, endWeek: 6, color: COLORS[1] },
        { title: "Casa Abierta", startWeek: 5, endWeek: 8, color: COLORS[2] },
        { title: "Reforma Norte", startWeek: 6, endWeek: 9, color: COLORS[3] },
    ];

    return (
        <Flex>
            {/* Sidebar */}
            <Box
                bg={useColorModeValue("gray.800", "gray.900")}
                color="white"
                w={{ base: "60px", md: "250px" }}
                p={4}
                minH="100vh"
                position="fixed"
            >
                <VStack align="start" spacing={6} display={{ base: "none", md: "flex" }}>
                    <Text fontSize="xl" fontWeight="bold" color="#6495ED">
                        TeamBIM
                    </Text>
                    <Text>Dashboard</Text>
                    <Text>Proyectos</Text>
                    <Text>Mi Cuenta</Text>
                </VStack>
            </Box>

            {/* Main content */}
            <Box ml={{ base: 0, md: "250px" }} flex="1" p={6}>
                <Flex justify="space-between" align="center" mb={6}>
                    <HStack spacing={3}>
                        <Avatar name={userName} size="sm" />
                        <Text>{userName}</Text>
                    </HStack>
                </Flex>

                <Flex gap={4} flexWrap="wrap">
                    {/* Panel izquierdo */}
                    <Box minW="250px" w={{ base: "full", md: "30%" }}>
                        <Box bg="gray.700" p={4} mb={4} borderRadius="lg">
                            <Text fontWeight="bold" mb={2}>Tus actividades</Text>
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={60}
                                        fill="#8884d8"
                                        dataKey="value"
                                        label
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </Box>
                        <Box bg="gray.700" p={4} borderRadius="lg">
                            <Text fontWeight="bold" mb={2}>Calendario</Text>
                            <Calendar />
                        </Box>
                    </Box>

                    {/* Diagrama de Gantt */}
                    <Box flex="1" overflowX="auto" minW="600px">
                        <Flex justify="space-between" align="center" mb={4}>
                            <Heading size="md">GANTT DIAGRAM</Heading>
                            <HStack>
                                <Input type="date" size="sm" />
                                <Input type="date" size="sm" />
                                <Select size="sm" defaultValue="week">
                                    <option value="week">Week</option>
                                    <option value="month">Month</option>
                                </Select>
                            </HStack>
                        </Flex>
                        <Box bg="gray.800" p={4} borderRadius="lg">
                            {ganttData.map((task, index) => (
                                <GanttBar
                                    key={index}
                                    title={task.title}
                                    startWeek={task.startWeek}
                                    endWeek={task.endWeek}
                                    color={task.color}
                                />
                            ))}
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default PersonalDashboard;
