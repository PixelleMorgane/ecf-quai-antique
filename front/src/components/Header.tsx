import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';
import logo from '../assets/images/logo-qa-noir.png';
import { Header, MantineProvider, ActionIcon, Tooltip, Image, Burger, MediaQuery, Button, Box, Navbar, NavLink } from '@mantine/core';
import MyTheme from '../utils/myTheme';
import Booking from './Booking';
import { useNavigate } from 'react-router-dom';
import { IconLogout, } from '@tabler/icons-react';


function MyHeader() {
  const theme = {MyTheme};
  const [opened, setOpened] = useState(false);
  const {user, setUser} = useContext(CurrentUserContext);
  
  const logout = () => {
    setUser(null)
    navigate('/')
  };

  const navigate = useNavigate();

  const route = (path: string) => {
    navigate(path);
  }
  

  return (
      <Header height={{ base: 50, md: 70 }} p="xl">
      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 98, height: '100%', position: 'relative' }}>
        
          <Image
              width={88}
              height={40}
              src={logo}
              alt="Logo du restaurant le Quai Antique"
              onClick={() => route('/')}
          />
       
        <MantineProvider
          theme={{
            components: {
              
              Navbar: {
                styles: {
                  root: { 
                    height: 50,
                    minWidth: '350px',
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
          <MediaQuery 
          smallerThan="sm" 
          styles={{ 
            width: '300px', 
            height: '100vh', 
            position: 'absolute', 
            top: 25, 
            left: '-30px', 
            margin: 0,
            flexDirection: 'column',
            justifyContent: 'flex-start' 
            }}
          >
            
            <Navbar 
              hiddenBreakpoint="sm" 
              hidden={!opened}          
              sx={(theme) => ({
                width: 250,
                margin: 0,
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: theme.spacing.xl,
              })}
            >
              <Box>
                <NavLink label="Carte" onClick={() => route('/dishes')} />
              </Box>
              {user
                ?  (
                  <MediaQuery 
                    smallerThan="sm" 
                    styles={{ 
                      flexDirection: 'column',
                      justifyContent: 'flex-start' 
                      }}
                  >
                    <Box
                      sx={(theme) => ({
                        margin: 0,
                        padding: 0,
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      })}
                    >

                      <NavLink label="Profile" onClick={() => route('/profile')} />
                      <Tooltip
                          label="Déconnexion"
                          color="dark"
                          withArrow
                      >
                          <ActionIcon 
                              color="dark" 
                              variant="transparent" 
                              size="lg"
                              onClick={() => logout()}
                          >
                              <IconLogout size={20} />
                          </ActionIcon>
                      </Tooltip>
                    </Box>
                  </MediaQuery>
                )
                : (
                    <MediaQuery 
                    smallerThan="sm" 
                    styles={{ 
                      flexDirection: 'column',
                      justifyContent: 'flex-start' 
                      }}
                    >
                      <Box
                      sx={(theme) => ({
                        margin: 0,
                        padding: 0,
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      })}
                      >
                        <NavLink label="Connexion" onClick={() => route('/login')} />
                        <NavLink label="Inscription" onClick={() => route('/register')} />
                      </Box>
                    </MediaQuery>
                  )
              }
              <Booking />
              {/* <Button className='button' color="dark" size="md" compact style={{ margin: 5 }}>Réserver</Button>  */}

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