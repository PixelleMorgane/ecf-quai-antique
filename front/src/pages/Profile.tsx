import { Image, Text, Title, Box, useMantineTheme } from '@mantine/core';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';
import { login } from '../utils/api';

function Profile() {

    const theme = useMantineTheme();
    const {user, setUser} = useContext(CurrentUserContext)
    console.log(user)
    return (
        <Box>
           <Text>Hello {user?.firstName} {user?.lastName} !</Text>
        </Box>
    )
}

      
export default Profile