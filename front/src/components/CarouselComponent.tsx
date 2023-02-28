import plat1 from '../assets/images/plat-1.jpg';
import plat2 from '../assets/images/plat-2.jpg';
import plat3 from '../assets/images/plat-3.jpg';
import plat4 from '../assets/images/plat-4.jpg';
import plat5 from '../assets/images/plat-5.jpg';
import { Carousel } from '@mantine/carousel';
import { Image, Text, useMantineTheme } from '@mantine/core';


const data = [
  {
    title: 'Oeufs bénédicte',
    image: plat1
  },
  {
    title: 'Pomme de terre hasselback',
    image: plat2
  },
  {
    title: 'Buger Chambérien',
    image: plat3
  },
  {
    title: 'Salade vegan',
    image: plat4
  },
  {
    title: 'Le délice anonyme',
    image: plat5
  }
];


const slides = data.map(({title, image}) => (
  <Carousel.Slide key={title} style={{ position: 'relative' }}>
    <Image 
      fit="cover"
      src={image}
      sx={(theme) => ({
        width: 700,
        height: 450,
        display: 'flex',
        alignItems: 'center',
      })}
    />
    <Text
      sx={(theme) => ({
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '5px',
        color: 'white',
        backgroundColor: 'black'
      })}
    >
      {title}
    </Text>
  </Carousel.Slide>
));

function CarouselComponent() {
  const theme = useMantineTheme();

  return (
    <Carousel sx={{ maxWidth: 700 }} mx="auto" withIndicators>
      {slides}
    </Carousel>
  );
}

export default CarouselComponent