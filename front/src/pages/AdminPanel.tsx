import { Group, Input, TextInput, Button, Image, Text, Badge, Avatar, Title, Navbar, NavLink, Box, useMantineTheme } from '@mantine/core';
import { useContext, useState } from 'react';
import logo from '../assets/images/avatar.png';
import { CurrentUserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import Hours from '../components/Hours';
import plat1 from '../assets/images/plat-1.jpg';
import plat2 from '../assets/images/plat-2.jpg';
import plat3 from '../assets/images/plat-3.jpg';
import plat4 from '../assets/images/plat-4.jpg';
import plat5 from '../assets/images/plat-5.jpg';
import plat6 from '../assets/images/plat-6.jpg';
import plat7 from '../assets/images/plat-7.jpg';
import plat8 from '../assets/images/plat-8.jpg';

const data = [plat1, plat2, plat3, plat4, plat5, plat6, plat7, plat8];

const images = data.map((image) => (
    <Image 
    m="xs"
    width={200}
    height={129}
    fit="cover"
    src={image}
    sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
    })}
    />
  ));

function Admin(props: Partial<DropzoneProps>) {

    const theme = useMantineTheme();
    const navigate = useNavigate();
    const {user, setUser} = useContext(CurrentUserContext);
    const form = useForm({
        initialValues: {
          url: '',
        },
      });
    

    console.log(user)

    return (
        <Box sx={{ display: 'flex' }}
        >
            <Box mr='lg'>
                <Navbar  sx={{ backgroundColor: '#000', height: '100%'  }} p="xs" width={{ base: 300 }}>
                    <Navbar.Section sx={{ margin: '15px 5px' }}>
                        {/* Header with logo 
                        <Box
                            sx={{ 
                                backgroundColor: '#E3AD00',
                                minHeight: 60,
                                color: 'white',
                                borderRadius: 7,
                                padding: '7px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Title order={2}>10</Title>
                            <Title order={3}>réservations</Title>
                        </Box>*/}
                    </Navbar.Section>
                    <Navbar.Section grow mt="md">
                        {/* Links sections */}
                        <NavLink sx={{ color: 'white' }} label="Galerie" component="a" href="#" />
                        <NavLink sx={{ color: 'white' }} label="Menus | Carte" component="a" href="#" />
                        <NavLink sx={{ color: 'white' }} label="Horaires" component="a" href="#" />
                    </Navbar.Section>
                    <Navbar.Section
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            color: 'white',
                        }}
                    >
                        {/* Footer with user */}
                        <Avatar radius="xl" size="lg" color="dark" src={logo} />
                        <Box>
                            <Text>Hello {user?.firstName} {user?.lastName} !</Text>
                            <Badge color="gray" variant="filled">Admin</Badge>
                        </Box>
                    </Navbar.Section>
                </Navbar>
            </Box>
            <Box>
                <Box>
                    <Title order={2}>Les réservations</Title>

                </Box>
                <Box>
                    <Title order={2}>Galerie</Title>
                    <Dropzone
                    onDrop={(files) => console.log('accepted files', files)}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={3 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    {...props}
                    >
                    <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                        <IconUpload
                            size={50}
                            stroke={1.5}
                            color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                        <IconX
                            size={50}
                            stroke={1.5}
                            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                        <IconPhoto size={50} stroke={1.5} />
                        </Dropzone.Idle>

                        <div>
                        <Text size="xl" inline>
                            Déposez les images composant le slider
                        </Text>
                        <Text size="sm" color="dimmed" inline mt={7}>
                            Nous avons besoin de 5 images
                        </Text>
                        </div>
                    </Group>
                    </Dropzone>
                    <Box
                        sx={{ 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}
                        >
                        {images}
                    </Box>
                    <Title order={3}>Ajouter une nouvelle image</Title>
                    <form
                    // onSubmit={form.onSubmit((values) => {
                        //      setSubmittedValues(JSON.stringify(values, null, 2))
                        //     register(values)
                        //     .then(value => {
                            //     console.log(user)
                            //     setUser({
                                //         firstName: form.values.firstName,
                                //         lastName: form.values.lastName,
                                //         email: form.values.email,
                                //         isAdmin: 0,
                                //     })
                                //     navigate('/profile')
                                //     })
                                // })}
                                style={{display: "flex", alignItems: "center"}}
                                >
                        <TextInput sx={{ width: 500 }} icon={<IconPhoto size={20}
                         />} label="" placeholder="Url de votre image" {...form.getInputProps('url')} />
                        <Button type="submit" className='button' color="dark" size="lg" compact style={{ marginLeft: 10 }}>Ajouter</Button>
                    </form>
                </Box>
                <Box>
                    <Title order={2}>Menus | Carte</Title>

                </Box>
                <Box>
                    <Title order={2}>Horaires</Title>
                    <Hours />
                </Box>
            </Box>
        </Box>
    )
}

      
export default Admin