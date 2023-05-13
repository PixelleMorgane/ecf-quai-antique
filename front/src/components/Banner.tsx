import { Image, Text, Title, Box, Button, useMantineTheme } from '@mantine/core';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';
import { login } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Banner() {

    const theme = useMantineTheme();
    const {user, setUser} = useContext(CurrentUserContext)

    return (
        <Box 
        id='banner-background'
        sx={{ 
            backgroundColor: '#000',
            overflow: 'hidden', 
            padding: '100px 20px', 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}>
            <Title order={1} 
            sx={{ 
                color: 'white', 
            }}>
                Bonjour {user?.firstName} {user?.lastName} !
            </Title>
        </Box>
    )
}

      
export default Banner