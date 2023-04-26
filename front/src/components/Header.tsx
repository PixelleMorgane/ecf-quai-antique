import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';
import logo from '../assets/images/logo-qa-noir.png';
import { Header, MantineProvider, Anchor, Image, Burger, MediaQuery, Button, Box, Navbar, NavLink, createStyles } from '@mantine/core';
import MyTheme from '../utils/myTheme';


function MyHeader() {
  const theme = {MyTheme};
  const [opened, setOpened] = useState(false);
  const {user, setUser} = useContext(CurrentUserContext);
  
  const useStyles = createStyles((theme) => ({
    link: {
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
      marginBottom: 5 
    },
  }));
  
  const { classes } = useStyles();
  

  return (
      <Header height={{ base: 50, md: 70 }} p="md">
      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', position: 'relative' }}>
        <Anchor href="/">
          <Image
              width={88}
              height={40}
              src={logo}
              alt="Logo du restaurant le Quai Antique"
          />
        </Anchor>
        <MantineProvider
          theme={{
            components: {
              
              Navbar: {
                // Use raw styles object if you do not need theme dependency
                styles: {
                  root: { 
                    height: 50,
                    width: 400,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    border: 'none'
                  },
                },
              },
            },
          }}
        >
          <MediaQuery smallerThan="sm" styles={{ 
            width: '300px', 
            height: '100vh', 
            position: 'absolute', 
            top: 30, 
            left: 0, 
            margin: 0,
            flexDirection: 'column',
            justifyContent: 'flex-start' 
            }}>
            
            <Navbar 
              hiddenBreakpoint="sm" 
              hidden={!opened}          
              sx={(theme) => ({
                width: 400,
                margin: 0,
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: theme.spacing.xl,
              })}
            >
              {user
                ?  <NavLink className={classes.link} label="Profile" component="a" href="profile" />
                : (
                    <Box
                    sx={(theme) => ({
                      margin: 0,
                      padding: 0,
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    })}
                    >
                      <NavLink className={classes.link} label="Connexion" component="a" href="login" />
                      <NavLink className={classes.link} label="Inscription" component="a" href="register" />
                    </Box>
                  )
              }
              <NavLink className={classes.link} label="Carte" component="a" href="#" />
              <Button className='button' color="dark" size="md" compact style={{ margin: 5 }}>Réserver</Button> 

            </Navbar>
          </MediaQuery>
        </MantineProvider>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>
      </Box>
    </Header>

  )
}

export default MyHeader