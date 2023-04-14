import heroImage from '../assets/images/plat-8.jpg'
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { register } from '../utils/api';
import { PasswordInput, MultiSelect, TextInput, Title, Button, Box, Code, useMantineTheme } from '@mantine/core';

const data = [
  { value: 'gluten', label: 'Gluten' },
  { value: 'lactose', label: 'Lactose' },
  { value: 'huitre', label: 'Huîtres' },
  { value: 'oeuf', label: 'Oeufs' },
  { value: 'fac', label: 'Fruits à coques' },
  { value: 'cereales', label: 'Céréales' },
  { value: 'fdm', label: 'Fruits de mer' },
  { value: 'poisson', label: 'Poisson' },
  { value: 'legumineuse', label: 'Légumineuse' },
];

function Register() {

  const navigate = useNavigate();
  const theme = useMantineTheme();
  const [submittedValues, setSubmittedValues] = useState('');
  const [visible, { toggle }] = useDisclosure(false);
  const {user, setUser} = useContext(CurrentUserContext)

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
          <Title sx={{ color: 'white' }} order={1}>Inscrivez-vous</Title>
      </Box>
      <Box maw={400} mx="auto" sx={{ padding: '80px 20px' }}>
        <form
          onSubmit={form.onSubmit((values) => {
            register(values)
            .then(value => {
              console.log(user)
              setUser({
                firstName: form.values.firstName,
                lastName: form.values.lastName,
                email: form.values.email,
                isAdmin: 0,
              })
              navigate('/profile')
            })
          })}
        >
          <TextInput
            label="Prénom"
            id="firstName"
            placeholder="First name"
            {...form.getInputProps('firstName')}
          />
          <TextInput
            label="Nom"
            id="lastName"
            placeholder="Last name"
            mt="md"
            {...form.getInputProps('lastName')}
          />
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
          <MultiSelect
            data={data}
            mt="md"
            label="Allergies | intolérances alimentaires"
            placeholder="Sélectionner les vos allergies"
          />
          <Button type="submit" className='button' color="dark" size="md" compact style={{ marginTop: 15 }}>Valider</Button> 
        </form>
      </Box>
    </Box>
  );
}

      
export default Register