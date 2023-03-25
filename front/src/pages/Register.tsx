import heroImage from '../assets/images/plat-8.jpg'
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { PasswordInput, MultiSelect, TextInput, Title, Button, Box, Code, useMantineTheme } from '@mantine/core';

const data = [
  { value: 'gluten', label: 'Gulten' },
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

  const theme = useMantineTheme();
  const [submittedValues, setSubmittedValues] = useState('');
  const [visible, { toggle }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
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
      <Box maw={400} mx="auto" sx={{ padding: 20 }}>
        <form
          onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
        >
          <TextInput
            label="Prénom"
            placeholder="First name"
            {...form.getInputProps('firstName')}
          />
          <TextInput
            label="Nom"
            placeholder="Last name"
            mt="md"
            {...form.getInputProps('lastName')}
          />
          <TextInput
            label="email"
            placeholder="email"
            mt="md"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Mot de Passe"
            defaultValue=""
            placeholder="Mot de Passe"
            mt="md"
            visible={visible}
            onVisibilityChange={toggle}
          />
          <PasswordInput
            label="Confirmation Mot de Passe"
            defaultValue=""
            placeholder="Confirmation Mot de Passe"
            mt="md"
            visible={visible}
            onVisibilityChange={toggle}
          />
          <MultiSelect
            data={data}
            mt="md"
            label="Allergies | intolérances alimentaires"
            placeholder="Sélectionner les vos allergies"
          />
          <Button type="submit" className='button' color="dark" size="md" compact style={{ marginTop: 15 }}>Valider</Button> 
        </form>

        {submittedValues && <Code block>{submittedValues}</Code>}
      </Box>
    </Box>
  );
}

      
export default Register