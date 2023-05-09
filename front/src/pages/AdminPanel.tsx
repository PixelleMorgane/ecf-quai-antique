import { TextInput, Radio, Button, ActionIcon, Image, Text, Badge, Avatar, Title, Navbar, NavLink, Box, useMantineTheme } from '@mantine/core';
import { useContext, useState, useEffect } from 'react';
import logo from '../assets/images/avatar.png';
import { CurrentUserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { IconSalad, IconTrash, IconCoinEuro } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { dishes } from '../utils/api';
import { addDish } from '../utils/api';
// import { deleteDish } from '../utils/api';
import plat1 from '../assets/images/plat-1.jpg';
import plat2 from '../assets/images/plat-2.jpg';
import plat3 from '../assets/images/plat-3.jpg';
import plat4 from '../assets/images/plat-4.jpg';
import plat5 from '../assets/images/plat-5.jpg';
import plat6 from '../assets/images/plat-6.jpg';
import plat7 from '../assets/images/plat-7.jpg';
import plat8 from '../assets/images/plat-8.jpg';
import { title } from 'process';

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

interface Meals {
    id: string; 
    title: string; 
    description: string; 
    price: number; 
    categoryId: string;
}

type ApiMeals = {
    entree: Meals[];
    dish: Meals[];
    dessert: Meals[];
}

type Dish = {
    title: string;
    price: number;
    categoryId: string;
}

function Admin(props: Partial<DropzoneProps>) {

    const [meals, setMeals] = useState<ApiMeals>();
    const [dish, setDish] = useState<Dish>();

    const theme = useMantineTheme();

    useEffect(() => {
        dishes()
        .then((apiMeals: ApiMeals) => {
            setMeals(apiMeals)
            apiMeals.entree.forEach((mealEntree) => {
                formUpdateEntree.insertListItem('entrees', { plateName: mealEntree.title, price: mealEntree.price, key: mealEntree.id })
            });
            apiMeals.dish.forEach((mealDish) => {
                formUpdateDish.insertListItem('plats', { plateName: mealDish.title, price: mealDish.price, key: mealDish.id })
            });
            apiMeals.dessert.forEach((mealDessert) => {
                formUpdateDessert.insertListItem('desserts', { plateName: mealDessert.title, price: mealDessert.price, key: mealDessert.id })
            });
        })
        .catch()

        // deleteDish()
        // .then()
        // .catch()
    },[])
    
    console.log(meals)
    const navigate = useNavigate();
    const {user, setUser} = useContext(CurrentUserContext);
    const [submittedValues, setSubmittedValues] = useState('');
    const formUpdateEntree = useForm({
        initialValues: {
            entrees: [],
        }
    });
    const formUpdateDish = useForm({
        initialValues: {
            plats: [],
        }
    });
    const formUpdateDessert = useForm({
        initialValues: {
            desserts: [],
        }
    });
    const formAddDish = useForm({
        initialValues: {
            title: '',
            price: 0,
            categoryId: 'entree',
        }
    });
    

    console.log(user)

    return (
        <Box sx={{ display: 'flex' }}
        >
            <Box mr='lg'>
                <Navbar  sx={{ backgroundColor: '#000', height: '100%'  }} p="xs" width={{ base: 300 }}>
                    <Navbar.Section sx={{ margin: '15px 5px' }}>
                        
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
                    <Title order={2}>Carte</Title>
                    <Box sx={{ width: "100%" }} mx="auto">
                        <Box>
                            <Title order={3}>Entrées</Title>
                            <Title order={4}>Modifier les entrées</Title>
                            <form
                                onSubmit={formUpdateEntree.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
                            >
                                {meals && meals.entree.map((entree, index) => (
                                    <Box 
                                        key={entree.id}
                                        sx={{ 
                                            width: "100%",
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-end',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <TextInput
                                        label="Nom du plat"
                                        placeholder={`${entree.title}`}
                                        sx={{ marginRight: 15 }}
                                        icon={<IconSalad size={20} />}
                                        {...formUpdateEntree.getInputProps(`entrees.${index}.plateName`)}
                                        />
                                        <TextInput
                                        label="Prix"
                                        placeholder={`${entree.price}`}
                                        sx={{ marginRight: 15 }}
                                        icon={<IconCoinEuro size={20} />}
                                        {...formUpdateEntree.getInputProps(`entrees.${index}.price`)}
                                        />
                                        <ActionIcon color="dark" variant="filled" size="lg"><IconTrash size={20} /></ActionIcon>
                                    </Box>  
                                ))}
                                <Button className='button' color="dark" size="md" compact style={{ marginTop: 10 }}>Valider</Button> 
                            </form>
                        </Box>
                        <Box>
                            <Title order={3}>Plats</Title>
                            <Title order={4}>Modifier les plats</Title>
                            <form
                                onSubmit={formUpdateDish.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
                            >
                                {meals && meals.dish.map((dish, index) => (
                                    <Box 
                                        key={dish.id}
                                        sx={{ 
                                            width: "100%",
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-end',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <TextInput
                                        label="Nom du plat"
                                        placeholder={`${dish.title}`}
                                        sx={{ marginRight: 15 }}
                                        icon={<IconSalad size={20} />}
                                        {...formUpdateEntree.getInputProps(`plats.${index}.plateName`)}
                                        />
                                        <TextInput
                                        label="Prix"
                                        placeholder={`${dish.price}`}
                                        sx={{ marginRight: 15 }}
                                        icon={<IconCoinEuro size={20} />}
                                        {...formUpdateEntree.getInputProps(`plats.${index}.price`)}
                                        />
                                        <ActionIcon color="dark" variant="filled" size="lg"><IconTrash size={20} /></ActionIcon>
                                    </Box>  
                                ))}
                                <Button className='button' color="dark" size="md" compact style={{ marginTop: 10 }}>Valider</Button> 
                            </form>
                        </Box>
                        <Box>
                            <Title order={3}>Desserts</Title>
                            <Title order={4}>Modifier les desserts</Title>
                            <form
                                onSubmit={formUpdateDessert.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
                            >
                                {meals && meals.dessert.map((dessert, index) => (
                                    <Box 
                                        key={dessert.id}
                                        sx={{ 
                                            width: "100%",
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-end',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <TextInput
                                        label="Nom du plat"
                                        placeholder={`${dessert.title}`}
                                        sx={{ marginRight: 15 }}
                                        icon={<IconSalad size={20} />}
                                        {...formUpdateEntree.getInputProps(`desserts.${index}.plateName`)}
                                        />
                                        <TextInput
                                        label="Prix"
                                        placeholder={`${dessert.price}`}
                                        sx={{ marginRight: 15 }}
                                        icon={<IconCoinEuro size={20} />}
                                        {...formUpdateEntree.getInputProps(`desserts.${index}.price`)}
                                        />
                                        <ActionIcon color="dark" variant="filled" size="lg"><IconTrash size={20} /></ActionIcon>
                                    </Box>  
                                ))}
                                <Button className='button' color="dark" size="md" compact style={{ marginTop: 10 }}>Valider</Button> 
                            </form>
                        </Box>
                        <Title order={3}>Ajouter un plat</Title>
                        <form
                            onSubmit={formAddDish.onSubmit((values) => {
                                addDish(values)
                                .then(newDish => {
                                    setDish({
                                    title: newDish.title,
                                    price: newDish.price,
                                    categoryId: newDish.category,
                                    })
                                })
                            })}
                        >   
                            <TextInput
                                label="Nom du plat"
                                placeholder=""
                                required
                                icon={<IconSalad size={20} />}
                                {...formAddDish.getInputProps('title')}
                            />
                            <TextInput
                                label="Prix"
                                placeholder=""
                                required
                                icon={<IconCoinEuro size={20} />}
                                {...formAddDish.getInputProps('price')}
                            />
                            <Radio.Group
                                name="category"
                                {...formAddDish.getInputProps('categoryId')}
                                label="Selectionnez une catégorie"
                                withAsterisk
                            >
                                <Radio  color="dark" value="entree" label="Entrée" />
                                <Radio  color="dark" value="dish" label="Plat" />
                                <Radio  color="dark" value="dessert" label="Dessert" />
                            </Radio.Group>
                            <Button type="submit" className='button' color="dark" size="md" compact style={{ marginTop: 10 }}>Ajouter</Button> 
                        </form>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

      
export default Admin