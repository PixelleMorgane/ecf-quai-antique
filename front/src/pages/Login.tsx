import heroImage from '../assets/images/plat-1.jpg'
import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../App';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { login } from '../utils/api';
import Page from '../components/page';
import { PasswordInput, TextInput, Title, Button, Box, useMantineTheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  const theme = useMantineTheme();
  const [submittedValues, setSubmittedValues] = useState('');
  const [visible, { toggle }] = useDisclosure(false);
  const {user, setUser} = useContext(CurrentUserContext);

  useEffect(() => {
    if(user === null){return;}
    if(user.isAdmin === 0) {
      navigate('/profile')
    } else {                
      navigate('/control-panel')
    }
  },[user]);

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
  });

  return (
    <Page>
      <Box
          sx={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                              url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: 350,
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
          }}
      >
          <Title sx={{ color: 'white' }} order={1}>Connectez-vous</Title>
      </Box>
      <Box 
      maw={400} 
      mx="auto" 
      sx={{ 
        height: 450, 
        padding: '80px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <form
          onSubmit={form.onSubmit((values) => {
            login(values)
            .then(user => {
              console.log(user)
              setUser({
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
                isAdmin: user.is_admin,
              }) 
            })
          })}
        >
          <TextInput
            label="email"
            id="email"
            placeholder="email"
            mt="md"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Mot de Passe"
            id="password"
            defaultValue=""
            placeholder="Mot de Passe"
            mt="md"
            visible={visible}
            onVisibilityChange={toggle}
            {...form.getInputProps('password')}
          />
          <Button 
            type="submit" 
            className='button' 
            color="dark" size="md" 
            compact 
            style={{ marginTop: 15 }}
          >
            Connexion
          </Button> 
        </form>
      </Box>
    </Page>
  );
}

      
export default Login