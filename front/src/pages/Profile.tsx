import { TextInput, Text, Title, Box, Button, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAt  } from '@tabler/icons-react';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';
import Banner from '../components/Banner';
import { login } from '../utils/api';
import Page from '../components/page';
import { useNavigate } from 'react-router-dom';

function Profile() {

    const theme = useMantineTheme();
    const navigate = useNavigate();
    const {user, setUser} = useContext(CurrentUserContext)


    return (
        <Page>
          <Banner />
          <Box
            style={{ padding: 30 }}
          >
            <Box>
              <Title order={2}>Mes infos</Title>
              <Text>Nom : {user?.lastName}</Text>
              <Text>Prénom : {user?.firstName}</Text>
              <Text>Email : {user?.email}</Text>
            </Box> 
            <Box sx={{ marginTop: 20 }}>
              <Title order={2}>Mes réservations</Title>
              <Text>Vous n'avez encore fait aucune réservation</Text>
            </Box> 
          </Box>
        </Page>
    )
}

      
export default Profile