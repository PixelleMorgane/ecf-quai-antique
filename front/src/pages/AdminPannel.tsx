import { Text, Badge, Avatar, Title, Navbar, NavLink, Box, useMantineTheme } from '@mantine/core';
import { useContext, useState } from 'react';
import logo from '../assets/images/avatar.png';
import { CurrentUserContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Admin() {

    const theme = useMantineTheme();
    const navigate = useNavigate();
    const {user, setUser} = useContext(CurrentUserContext)
    

    console.log(user)

    return (
        <Box>
            <Navbar  sx={{ backgroundColor: '#000' }} height={600} p="xs" width={{ base: 300 }}>
                <Navbar.Section sx={{ margin: '15px 5px' }}>
                    {/* Header with logo */}
                    <Box
                        sx={{ 
                            backgroundColor: '#E3AD00',
                            minHeight: 60,
                            color: 'white',
                            borderRadius: 7,
                            padding: '7px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Title order={2}>10</Title>
                        <Title order={3}>réservations</Title>
                    </Box>
                </Navbar.Section>
                <Navbar.Section grow mt="md">
                    {/* Links sections */}
                    <NavLink sx={{ color: 'white' }} label="Galerie" component="a" href="#" />
                    <NavLink sx={{ color: 'white' }} label="Menus | Carte" component="a" href="#" />
                    <NavLink sx={{ color: 'white' }} label="Horaires" component="a" href="#" />
                </Navbar.Section>
                <Navbar.Section
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        color: 'white',
                    }}
                >
                    {/* Footer with user */}
                    <Avatar radius="xl" size="lg" color="dark" src={logo} />
                    <Box>
                        <Text>Hello {user?.firstName} {user?.lastName} !</Text>
                        <Badge color="gray" variant="outline">Admin</Badge>
                    </Box>
                </Navbar.Section>
            </Navbar>
        </Box>
    )
}

      
export default Admin