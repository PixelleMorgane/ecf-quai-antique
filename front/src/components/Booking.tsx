import { TextInput, Select, Text, NumberInput, Modal, Box, Button, useMantineTheme } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconAt  } from '@tabler/icons-react';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';
import MyTheme from '../utils/myTheme';
import { login } from '../utils/api';
import Page from '../components/page';
import { useNavigate } from 'react-router-dom';
import * as dayjs from 'dayjs';
import 'dayjs/locale/fr'

const data = [
    { value: '12:00', label: '12:00', group: 'Midi' },
    { value: '12:15', label: '12:15', group: 'Midi' },
    { value: '12:30', label: '12:30', group: 'Midi' },
    { value: '12:45', label: '12:45', group: 'Midi' },
    { value: '13:00', label: '13:00', group: 'Midi' },
    { value: '13:15', label: '13:15', group: 'Midi' },
    { value: '13:30', label: '13:30', group: 'Midi' },
    { value: '13:45', label: '13:45', group: 'Midi' },
    { value: '14:00', label: '14:00', group: 'Midi' },
    { value: '19:00', label: '19:00', group: 'Soir' },
    { value: '19:15', label: '19:15', group: 'Soir' },
    { value: '19:30', label: '19:30', group: 'Soir' },
    { value: '19:45', label: '19:45', group: 'Soir' },
    { value: '20:00', label: '20:00', group: 'Soir' },
    { value: '20:15', label: '20:15', group: 'Soir' },
    { value: '20:30', label: '20:30', group: 'Soir' },
    { value: '20:45', label: '20:45', group: 'Soir' },
    { value: '21:00', label: '21:00', group: 'Soir' },
    { value: '21:15', label: '21:15', group: 'Soir' },
    { value: '21:30', label: '21:30', group: 'Soir' },
    { value: '21:45', label: '21:45', group: 'Soir' },
    { value: '22:00', label: '22:00', group: 'Soir' },
]

function Booking() {

    const theme = useMantineTheme();
    const navigate = useNavigate();
    const {user, setUser} = useContext(CurrentUserContext)

    const [value, setValue] = useState<Date | null>(null);

    const [opened, setOpened] = useState(false);

    const bookingForm = useForm({
        initialValues: {
          firstName: `${user?.firstName}`,
          lastName: `${user?.lastName}`,
          phoneNumber: '',
        }
      });


    console.log(user)

    return (
        <>
            <Modal
                centered 
                opened={opened}
                onClose={() => setOpened(false)}
                title="Réservation"
            >
            <form
                // onSubmit={bookingForm.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
            >
                <TextInput
                label="First name"
                placeholder="First name"
                {...bookingForm.getInputProps('firstName')}
                />
                <TextInput
                label="Last name"
                placeholder="Last name"
                mt="md"
                {...bookingForm.getInputProps('lastName')}
                />
                <TextInput
                type="number"
                label="Numéro de téléphone"
                placeholder=""
                mt="md"
                {...bookingForm.getInputProps('phoneNumber')}
                />
                <NumberInput
                label="Nombre de personnes"
                defaultValue={1}
                // precision={2}
                min={1}
                max={15}
                />
                <Select
                    required
                    label="Heure d'arrivée"
                    placeholder="Choisissez une heure d'arrivée"
                    data={data}
                />
                <Calendar value={value} color='dark' onChange={setValue} locale="fr" />
                {/* <Box>
                    <Text>Heures du déjeuné</Text>
                    <Button m={5} color="yellow" value={'12:00'}>12:00</Button>
                    <Button m={5} color="yellow" value={'12:15'}>12:15</Button>
                    <Button m={5} color="yellow" value={'12:30'}>12:30</Button>
                    <Button m={5} color="yellow" value={'12:45'}>12:45</Button>
                    <Button m={5} color="yellow" value={'13:00'}>13:00</Button>
                    <Button m={5} color="yellow" value={'13:15'}>13:15</Button>
                    <Button m={5} color="yellow" value={'13:30'}>13:30</Button>
                    <Button m={5} color="yellow" value={'13:45'}>13:45</Button>
                    <Button m={5} color="yellow" value={'14:00'}>14:00</Button>
                </Box>
                <Box>
                <Text>Heures du diner</Text>
                    <Button m={5} color="yellow" value={'19:00'}>19:00</Button>
                    <Button m={5} color="yellow" value={'19:15'}>19:15</Button>
                    <Button m={5} color="yellow" value={'19:30'}>19:30</Button>
                    <Button m={5} color="yellow" value={'19:45'}>19:45</Button>
                    <Button m={5} color="yellow" value={'20:00'}>20:00</Button>
                    <Button m={5} color="yellow" value={'20:15'}>20:15</Button>
                    <Button m={5} color="yellow" value={'20:30'}>20:30</Button>
                    <Button m={5} color="yellow" value={'20:45'}>20:45</Button>
                    <Button m={5} color="yellow" value={'21:00'}>21:00</Button>
                    <Button m={5} color="yellow" value={'21:15'}>21:15</Button>
                    <Button m={5} color="yellow" value={'21:30'}>21:30</Button>
                    <Button m={5} color="yellow" value={'21:45'}>21:45</Button>
                    <Button m={5} color="yellow" value={'22:00'}>22:00</Button>
                </Box> */}
                <Button mt={15} type="submit" color="dark" size="md" compact>
                Valider
                </Button>
            </form>
            </Modal>
            <Button onClick={() => setOpened(true)}  color="dark" size="md" compact style={{ fontFamily: "'Playfair Display', serif", margin: 5 }}>Réserver</Button>
        </>
    )
}

      
export default Booking