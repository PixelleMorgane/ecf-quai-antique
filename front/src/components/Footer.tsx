import logo from '../assets/images/logo-qa-blanc.png'
import { 
    Image,
    Title,
    List,
    Text,
    Box,
    useMantineTheme 
} from '@mantine/core'

function MyFooter() {

    const theme = useMantineTheme();

    return (
      <Box>

        <Box 
        p="md" 
        sx={(theme) => ({
          backgroundColor: 'black',
            minHeight: 257,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: 15,
            color: 'white',
          })}
        >
          <Image
                width={150}
                height={68}
                m={20}
                src={logo}
                alt="Logo du restaurant le Quai Antique"
          />
          <Box m={20}>
            <Title sx={{ color: 'white' }} order={3}>Horaires</Title>
            <List listStyleType="none"
              sx={(theme) => ({
                color: 'white',
              })}
            >
              <List.Item>Lundi : 12h00 - 14h00 | 19h00 - 22h00</List.Item>  
              <List.Item>Mardi : 12h00 - 14h00 | 19h00 - 22h00</List.Item>  
              <List.Item>Mercredi : 12h00 - 14h00 | 19h00 - 22h00</List.Item>  
              <List.Item>Jeudi : 12h00 - 14h00 | 19h00 - 22h00</List.Item>  
              <List.Item>Vendredi : 12h00 - 14h00 | 19h00 - 22h00</List.Item>  
              <List.Item>Samedi : 12h00 - 14h00 | 19h00 - 22h00</List.Item>  
              <List.Item>Dimanche : 12h00 - 14h00 | 19h00 - 22h00</List.Item>  
            </List>
          </Box>
        </Box>
        <Box 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          zIndex: 98, color: '#000', 
          alignItems: 'center', 
          fontSize: '15px', 
          fontWeight: 500, 
          backgroundColor: '#E3AD00' 
        }}>
          <Text>Avis aux affamés, gourmand et épicuriens ce restaurant est fictif, je vous conseille donc de vous réserver dans un autre restaurant !</Text>
        </Box>
      </Box>
    )
}

export default MyFooter