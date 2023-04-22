import { Image, Text, Title, Box, Button, useMantineTheme } from '@mantine/core';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';
import Banner from '../components/Banner';
import { login } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Profile() {

    const theme = useMantineTheme();
    const navigate = useNavigate();
    const {user, setUser} = useContext(CurrentUserContext)
    const logout = () => {
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            isAdmin: 0,
        })
        navigate('/home')
    };

    console.log(user)

    return (
        <Box>
          <Banner />
          <Button 
            className='button' 
            color="dark" size="md" 
            compact 
            style={{ margin: 15 }}
            onClick={logout}
          >
            Déconnexion
          </Button> 
        </Box>
    )
}

      
export default Profile