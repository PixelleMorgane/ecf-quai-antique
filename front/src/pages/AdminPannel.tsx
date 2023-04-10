import { Image, Text, Title, Box, Button, useMantineTheme } from '@mantine/core';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Admin() {

    const theme = useMantineTheme();
    const navigate = useNavigate();
    const {user, setUser} = useContext(CurrentUserContext)
    

    console.log(user)

    return (
        <Box>
          <Text>Hello BOSS !</Text>
        </Box>
    )
}

      
export default Admin