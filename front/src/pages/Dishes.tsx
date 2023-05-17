import React, {useEffect, useState} from 'react';
import { List, Text, Title, Box, useMantineTheme } from '@mantine/core';
import { dishes } from '../utils/api';
import Page from '../components/page';

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

function Dishes() {

    const [meals, setMeals] = useState<ApiMeals>();

    const theme = useMantineTheme();

    useEffect(() => {
        dishes()
        .then((apiMeals: ApiMeals) => {
            setMeals(apiMeals)
        })
        .catch()
    },[])
    

    return (
        <Page>
            <Box
            sx={{ 
                backgroundColor: '#000',
                color: '#fff',
                padding: '100px 10px'
            }}
            >
                <Title  sx={{ color: '#e3ad00', textAlign: 'center', marginBottom: 50 }} order={2} >Menus</Title>
                <Box 
                sx={{ 
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap'
                }}
                >
                    <Box sx={{ margin: 10 }} >
                        <Title sx={{ color: '#e3ad00' }} order={3}>Menu Poséidon</Title>
                        <Title order={4}>Tarif : XX €</Title>
                        <Text sx={{ color: '#e3ad00', fontWeight: 'bold' }}>Poisson</Text>
                        <List listStyleType="none"
                        sx={(theme) => ({
                            color: 'white'
                        })}
                        >
                            <List.Item>Lorem ipsum dolor</List.Item>  
                            <List.Item>Lorem ipsum dolor</List.Item>  
                            <List.Item>Lorem ipsum dolor</List.Item>  
                            <List.Item>Lorem ipsum dolor</List.Item>  
                            <List.Item>Lorem ipsum dolor</List.Item>  
                        </List>
                    </Box>
                    <Box sx={{ margin: 10 }} >
                        <Title sx={{ color: '#e3ad00' }} order={3}>Menu Déméter</Title>
                        <Title order={4}>Tarif : XX €</Title>
                        <Text sx={{ color: '#e3ad00', fontWeight: 'bold' }}>Veggie</Text>
                        <List listStyleType="none"
                        sx={(theme) => ({
                            color: 'white'
                        })}
                        >
                            <List.Item>Lorem ipsum dolor</List.Item>  
                            <List.Item>Lorem ipsum dolor</List.Item>  
                            <List.Item>Lorem ipsum dolor</List.Item>  
                            <List.Item>Lorem ipsum dolor</List.Item>  
                            <List.Item>Lorem ipsum dolor</List.Item>  
                        </List>
                    </Box>
                    <Box sx={{ margin: 10 }} >
                        <Title sx={{ color: '#e3ad00' }} order={3}>Menu Artémis</Title>
                        <Title order={4}>Tarif : XX €</Title>
                        <Text sx={{ color: '#e3ad00', fontWeight: 'bold' }}>Viande</Text>
                        <List listStyleType="none"
                        sx={(theme) => ({
                            color: 'white'
                        })}
                        >
                            <List.Item>Lorem ipsum dolor</List.Item>  
                            <List.Item>Lorem ipsum dolor</List.Item>  
                            <List.Item>Lorem ipsum dolor</List.Item>  
                            <List.Item>Lorem ipsum dolor</List.Item>  
                            <List.Item>Lorem ipsum dolor</List.Item>  
                        </List>
                    </Box>
                </Box>
            </Box>
            <Box  sx={{ padding: '100px 20px' }}>
                <Title order={2} sx={{ textAlign: 'center', marginBottom: 50 }}>Carte</Title> 
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap'
                }}>
                    <Box sx={{ margin: 10 }}>
                        <Title order={3}>Entrées</Title> 
                        <List listStyleType="none" >
                                {meals && meals.entree.map((entree) => (
                                    <List.Item key={entree.id}><span style={{ fontWeight: 500 }}>{entree.title}</span> {entree.price}€</List.Item>  
                                ))}
                        </List>
                    </Box>
                    <Box sx={{ margin: 10 }}>
                        <Title order={3}>Plats</Title> 
                        <List listStyleType="none" >
                                {meals && meals.dish.map((dish) => (
                                    <List.Item key={dish.id}><span style={{ fontWeight: 500 }}>{dish.title}</span> {dish.price}€</List.Item>  
                                ))} 
                        </List>
                    </Box>
                    <Box sx={{ margin: 10 }}>
                        <Title order={3}>Desserts</Title> 
                        <List listStyleType="none" >
                                {meals && meals.dessert.map((dessert) => (
                                    <List.Item key={dessert.id}><span style={{ fontWeight: 500 }}>{dessert.title}</span> {dessert.price}€</List.Item>  
                                ))}  
                        </List>
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}

      
export default Dishes