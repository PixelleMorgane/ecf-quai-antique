import React, {useEffect, useState} from 'react';
import { List, Text, Title, Box, useMantineTheme } from '@mantine/core';
import { dishes } from '../utils/api';

interface Meals {
    id: string; 
    title: string; 
    description: string; 
    price: number; 
    categoryId: string;
}

function Dishes() {

    const [meals, setMeals] = useState<Meals[]>([]);

    const theme = useMantineTheme();

    useEffect(() => {
        dishes()
        .then((apiMeals: Meals[]) => {
            setMeals(apiMeals)
        })
        .catch()
    },[])

    let result = meals.map(({id, title, description, price, categoryId}: Meals) => (
       <List.Item>{title}</List.Item>   
    ))

    return (
        <Box>
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
                                
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                        </List>
                    </Box>
                    <Box sx={{ margin: 10 }}>
                        <Title order={3}>Salades</Title> 
                        <List listStyleType="none" >
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                        </List>
                    </Box>
                    <Box sx={{ margin: 10 }}>
                        <Title order={3}>Plats</Title> 
                        <List listStyleType="none" >
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                        </List>
                    </Box>
                    <Box sx={{ margin: 10 }}>
                        <Title order={3}>Burgers</Title> 
                        <List listStyleType="none" >
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                        </List>
                    </Box>
                    <Box sx={{ margin: 10 }}>
                        <Title order={3}>Desserts</Title> 
                        <List listStyleType="none" >
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                                <List.Item>Lorem ipsum dolor</List.Item>  
                        </List>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

      
export default Dishes