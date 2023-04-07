import heroImage from '../assets/images/plat-1.jpg'
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { login } from '../utils/api';
import { PasswordInput, TextInput, Title, Button, Box, Code, useMantineTheme } from '@mantine/core';


function Login() {

  const theme = useMantineTheme();
  const [submittedValues, setSubmittedValues] = useState('');
  const [visible, { toggle }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
  });

  return (
    <Box>
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
      <Box maw={400} mx="auto" sx={{ padding: '80px 20px' }}>
        <form
          onSubmit={form.onSubmit((values) => {
            // setSubmittedValues(JSON.stringify(values, null, 2))
            login(values)
            .then(user => {
              console.log(user)
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
          <Button type="submit" className='button' color="dark" size="md" compact style={{ marginTop: 15 }}>Connexion</Button> 
        </form>

        {submittedValues && <Code block>{submittedValues}</Code>}
      </Box>
    </Box>
  );
}

      
export default Login