import { useState } from 'react';
import logo from '../assets/images/logo-qa-noir.png';
import { Header, Image, Burger, MediaQuery, Button, Box, NavLink, useMantineTheme, } from '@mantine/core';


function MyHeader() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
      <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <Image
            width={88}
            height={40}
            src={logo}
            alt="Logo du restaurant le Quai Antique"
        />
        <Box  
          // hiddenBreakpoint="sm" 
          hidden={!opened} 
          // width={{ sm: 200, lg: 300 }}          
          sx={(theme) => ({
            width: 400,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: theme.spacing.xl,
          })}
        >
          <NavLink label="Carte" component="a" href="/home" target="_blank" />
          <NavLink label="Connexion" component="a" href="/home" target="_blank" />
          <Button className='button' color="dark" size="md" compact>Réserver</Button>
        </Box>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
      </div>
    </Header>

  )
}

export default MyHeader