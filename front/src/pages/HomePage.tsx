import chef from '../assets/images/chef.jpg'
import heroImage from '../assets/images/hero-image.jpg'
import CarouselComponent from '../components/CarouselComponent'
import { Image, Text, Title, Box, useMantineTheme } from '@mantine/core';
import Page from '../components/page';

function HomePage() {

    const theme = useMantineTheme();

    return (
        <Page>
            <Box
                sx={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                                    url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: 800,
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Title sx={{ color: 'white' }} order={1}>Bienvenue au Quai Antique</Title>
            </Box>
            <Box
                sx={{ 
                    maxWidth: 1000,
                    margin: 'auto',
                    paddingTop: 50,
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}
            >
                <Image 
                    width={351}
                    height={400}
                    alt="Chef cuisinier"
                    src={chef}
                />
                <Box sx={{ margin: 10 }}>
                    <Title order={2}>Notre cuisine...</Title>
                    <Text
                        sx={{ 
                            maxWidth: 450
                        }}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                </Box>
            </Box>
            <Box
                sx={{
                    height: 700, 
                    position: 'relative'
                }}
            >
                <Box
                    p="xl"
                    sx={{ 
                    maxWidth: 700,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // alignItems: 'center',
                    }}
                >                
                    <Title style={{ marginBottom: 20 }} order={2}>Les immanquables</Title> 
                    <CarouselComponent />       
                </Box>
            </Box>
        </Page>
    )
}

      
export default HomePage