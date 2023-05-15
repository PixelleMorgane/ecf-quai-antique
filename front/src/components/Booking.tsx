import { TextInput, Select, Text, NumberInput, Modal, Box, Button, useMantineTheme } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useForm, matches } from '@mantine/form';
import { IconAt  } from '@tabler/icons-react';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../App';
import { addBooking } from '../utils/api';
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

type Slot = {
    nbPersons: number;
    date: Date;
    hours: string;
    phone: string;
    firstName: string;
    lastName: string;
}

function Booking() {

    const theme = useMantineTheme();
    const navigate = useNavigate();
    const {user, setUser} = useContext(CurrentUserContext)

    const [value, setValue] = useState<Date | null>();
    const [slot, setSlot] = useState<Slot>();
    const [opened, setOpened] = useState(false);

    const bookingForm = useForm({
        initialValues: {
            nbPersons: 1,
            date: new Date(),
            hours: '',
            phone: '',
            firstName: '',
            lastName: '',
        },

        validate: {
            phone: matches(/^((\+)33|0|0033)[1-9](\d{2}){4}$/, 'Ce n\'est pas un numéro de téléphone valide'),
        },
      });


    return (
        <>
            <Modal
                centered 
                opened={opened}
                onClose={() => setOpened(false)}
                title="Réservation"
                style={{ zIndex: 99 }}
            >
            <form
                onSubmit={bookingForm.onSubmit((values) => {
                    console.log(values)
                    addBooking(values)
                    .then()
                })}            
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
                label="Numéro de téléphone"
                placeholder=""
                mt="md"
                {...bookingForm.getInputProps('phone')}
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
                    {...bookingForm.getInputProps('hours')}
                />
                <Calendar {...bookingForm.getInputProps('date')} color='dark' locale="fr" />
                
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