import { Image, Text, Title, Box, Button, useMantineTheme } from '@mantine/core';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';
import  '../assets/styles/Banner.css';
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
            position: 'relative',
            overflow: 'hidden', 
            padding: '100px 20px', 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}>
                <Box 
                className='roll-container'
                sx={{ 
                    width: '300px', 
                    height: '300px', 
                    position: 'relative'
                }}>
                    <span className='roll'></span>
                    <span className='roll'></span>
                    <span className='roll'></span>
                </Box>
            <Title order={1} 
            sx={{ 
                color: 'white', 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%,-50%)',
                textShadow: '3px 0px 2px black, -3px 0px 2px black, 0px 3px 2px black, -3px 0px 2px black'
            }}>
                Bonjour {user?.firstName} {user?.lastName} !
            </Title>
        </Box>
    )
}

      
export default Banner