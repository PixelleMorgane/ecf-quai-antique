import { TextInput, Radio, Button, ActionIcon, Image, Text, Tooltip, Badge, Avatar, Title, Navbar, NavLink, Box, useMantineTheme } from '@mantine/core';
import { useContext, useState, useEffect } from 'react';
import logo from '../assets/images/avatar.png';
import { CurrentUserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { IconSalad, IconTrash, IconCoinEuro, IconPencil } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { dishes } from '../utils/api';
import { addDish } from '../utils/api';
import { deleteDish } from '../utils/api';
import { updateDish } from '../utils/api';
import Page from '../components/page';
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

type Meals = {
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
        })
        .catch()
    },[])

    useEffect(() => {
        if(!meals){return}
        formUpdateEntree.setValues({ entrees: [] })
        formUpdateDish.setValues({ plats: [] })
        formUpdateDessert.setValues({ desserts: [] })
        meals.entree.forEach((mealEntree) => {
            formUpdateEntree.insertListItem('entrees', { title: mealEntree.title, price: mealEntree.price, key: mealEntree.id })
        });
        meals.dish.forEach((mealDish) => {
            formUpdateDish.insertListItem('plats', { title: mealDish.title, price: mealDish.price, key: mealDish.id })
        });
        meals.dessert.forEach((mealDessert) => {
            formUpdateDessert.insertListItem('desserts', { title: mealDessert.title, price: mealDessert.price, key: mealDessert.id })
        });
    },[meals])
    
    console.log(meals)
    const navigate = useNavigate();
    const {user, setUser} = useContext(CurrentUserContext);
    const [submittedValues, setSubmittedValues] = useState('');

    const formUpdateEntree = useForm<{entrees: { title: string, price: number, key: string }[]}>({
        initialValues: {
            entrees: [],
        }
    });
    const formUpdateDish = useForm<{plats: { title: string, price: number, key: string }[]}>({
        initialValues: {
            plats: [],
        }
    });
    const formUpdateDessert = useForm<{desserts: { title: string, price: number, key: string }[]}>({
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
    
    const removeEntree = (id: string, index: number) => {
        deleteDish(id)
        .then(() => {
        formUpdateEntree.removeListItem('entrees', index)
        })
        .catch()
    }

    const removeDish = (id: string, index: number) => {
        console.log(id)
        deleteDish(id)
        .then(() => {
        formUpdateDish.removeListItem('plats', index)
        })
        .catch()
    }

    const removeDessert = (id: string, index: number) => {
        deleteDish(id)
        .then(() => {
        formUpdateDessert.removeListItem('desserts', index)
        })
        .catch()
    }

    const update = (dish: { title: string, price: number, key: string }) => {
        updateDish(dish)
        .then(() => {
        
        })
        .catch()
    }

    return (
        <Page>
            <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
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
                                onSubmit={formUpdateEntree.onSubmit((values) => {
                                    
                                })}
                            >
                                {formUpdateEntree.values.entrees.map((entree, index) => (
                                    <Box 
                                        key={entree.key}
                                        sx={{ 
                                            width: "100%",
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-end',
                                            flexWrap: 'wrap',
                                            margin: '15px 0 15px 0'
                                        }}
                                    >
                                        <TextInput
                                        label="Nom de l'entrée"
                                        placeholder={`${entree.title}`}
                                        sx={{ marginRight: 15, width:'250px' }}
                                        icon={<IconSalad size={20} />}
                                        {...formUpdateEntree.getInputProps(`entrees.${index}.title`)}
                                        />
                                        <TextInput
                                        label="Prix"
                                        placeholder={`${entree.price}`}
                                        sx={{ marginRight: 15, width:'110px' }}
                                        icon={<IconCoinEuro size={20} />}
                                        {...formUpdateEntree.getInputProps(`entrees.${index}.price`)}
                                        />
                                        <Tooltip
                                            label="Valider les modifications"
                                            color="dark"
                                            withArrow
                                        >
                                            <ActionIcon  
                                                color="dark" 
                                                variant="filled" 
                                                size="lg"
                                                onClick={() => update(entree)}
                                                sx={{ marginRight: 10 }}
                                            >
                                                <IconPencil size={20} />
                                            </ActionIcon>
                                        </Tooltip>
                                        <Tooltip
                                            label="Supprimer cette entrée"
                                            color="dark"
                                            withArrow
                                        >
                                            <ActionIcon 
                                                onClick={() => removeEntree(entree.key, index)} 
                                                color="dark" 
                                                variant="filled" 
                                                size="lg"
                                            >
                                                <IconTrash size={20} />
                                            </ActionIcon>
                                        </Tooltip>
                                    </Box>  
                                ))}
                            </form>
                        </Box>
                        <Box>
                            <Title order={3}>Plats</Title>
                            <Title order={4}>Modifier les plats</Title>
                            <form
                                onSubmit={formUpdateDish.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
                            >
                                {formUpdateDish.values.plats.map((dish, index) => (
                                    <Box 
                                        key={dish.key}
                                        sx={{ 
                                            width: "100%",
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-end',
                                            flexWrap: 'wrap',
                                            margin: '15px 0 15px 0'
                                        }}
                                    >
                                        <TextInput
                                        label="Nom du plat"
                                        placeholder={`${dish.title}`}
                                        sx={{ marginRight: 15, width:'250px' }}
                                        icon={<IconSalad size={20} />}
                                        {...formUpdateDish.getInputProps(`plats.${index}.title`)}
                                        />
                                        <TextInput
                                        label="Prix"
                                        placeholder={`${dish.price}`}
                                        sx={{ marginRight: 15, width:'110px' }}
                                        icon={<IconCoinEuro size={20} />}
                                        {...formUpdateDish.getInputProps(`plats.${index}.price`)}
                                        />
                                        <Tooltip
                                            label="Valider les modifications"
                                            color="dark"
                                            withArrow
                                        >
                                            <ActionIcon  
                                                color="dark" 
                                                variant="filled" 
                                                size="lg"
                                                sx={{ marginRight: 10 }}
                                            >
                                                <IconPencil size={20} />
                                            </ActionIcon>
                                        </Tooltip>
                                        <Tooltip
                                            label="Supprimer ce plat"
                                            color="dark"
                                            withArrow
                                        >
                                            <ActionIcon 
                                                onClick={() => removeDish(dish.key, index)} 
                                                color="dark" 
                                                variant="filled" 
                                                size="lg"
                                            >
                                                <IconTrash size={20} />
                                            </ActionIcon>
                                        </Tooltip>
                                    </Box>  
                                ))}
                            </form>
                        </Box>
                        <Box>
                            <Title order={3}>Desserts</Title>
                            <Title order={4}>Modifier les desserts</Title>
                            <form
                                onSubmit={formUpdateDessert.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
                            >
                                {formUpdateDessert.values.desserts.map((dessert, index) => (
                                    <Box 
                                        key={dessert.key}
                                        sx={{ 
                                            width: "100%",
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-end',
                                            flexWrap: 'wrap',
                                            margin: '15px 0 15px 0'
                                        }}
                                    >
                                        <TextInput
                                        label="Nom du dessert"
                                        placeholder={`${dessert.title}`}
                                        sx={{ marginRight: 15, width:'250px' }}
                                        icon={<IconSalad size={20} />}
                                        {...formUpdateDessert.getInputProps(`desserts.${index}.title`)}
                                        />
                                        <TextInput
                                        label="Prix"
                                        placeholder={`${dessert.price}`}
                                        sx={{ marginRight: 15, width:'110px' }}
                                        icon={<IconCoinEuro size={20} />}
                                        {...formUpdateDessert.getInputProps(`desserts.${index}.price`)}
                                        />
                                        <Tooltip
                                            label="Valider les modifications"
                                            color="dark"
                                            withArrow
                                        >
                                            <ActionIcon  
                                                color="dark" 
                                                variant="filled" 
                                                size="lg"
                                                sx={{ marginRight: 10 }}
                                            >
                                                <IconPencil size={20} />
                                            </ActionIcon>
                                        </Tooltip>
                                        <Tooltip
                                            label="Supprimer ce dessert"
                                            color="dark"
                                            withArrow
                                        >
                                            <ActionIcon 
                                                onClick={() => removeDessert(dessert.key, index)} 
                                                color="dark" 
                                                variant="filled" 
                                                size="lg"
                                            >
                                                <IconTrash size={20} />
                                            </ActionIcon>
                                        </Tooltip>
                                    </Box>  
                                ))}
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
        </Page>
    )
}

      
export default Admin