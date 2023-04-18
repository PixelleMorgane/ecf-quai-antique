import logo from '../assets/images/logo-qa-blanc.png'
import { 
    Footer,
    Image,
    Title,
    List,
    Button,
    Box,
    useMantineTheme 
} from '@mantine/core'

function MyFooter() {

    const theme = useMantineTheme();

    return (
        <Footer 
          height={257}
          p="md" 
          sx={(theme) => ({
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            color: 'white',
          })}
        >
          <Image
                width={150}
                height={68}
                src={logo}
                alt="Logo du restaurant le Quai Antique"
          />
          <Box>
            <Title sx={{ color: 'white' }} order={3}>Horaires</Title>
            <List listStyleType="none"
              sx={(theme) => ({
                color: 'white',
              })}
            >
              <List.Item>Test</List.Item>  
            </List>
          </Box>
          <Button className='button' variant="white" color="dark" size="md" compact>Réserver</Button>
        </Footer>
    )
}

export default MyFooter