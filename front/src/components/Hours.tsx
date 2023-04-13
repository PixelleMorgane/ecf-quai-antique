import dayjs from 'dayjs';
import { useState } from 'react';
import { TimeRangeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';
import { Box } from '@mantine/core';



function Hours() {
  const now = new Date();
  const then = dayjs(now).add(30, 'minutes').toDate();
  const [value1, setValue1] = useState<[Date, Date]>([now, then]);
  const [value2, setValue2] = useState<[Date, Date]>([now, then]);
  const [value3, setValue3] = useState<[Date, Date]>([now, then]);
  const [value4, setValue4] = useState<[Date, Date]>([now, then]);
  const [value5, setValue5] = useState<[Date, Date]>([now, then]);
  const [value6, setValue6] = useState<[Date, Date]>([now, then]);
  const [value7, setValue7] = useState<[Date, Date]>([now, then]);

  
  return (
    <Box>
      <TimeRangeInput sx={{ width: 200 }} icon={<IconClock size={20} />} label="Lundi" value={value1} onChange={setValue1} clearable />
      <TimeRangeInput sx={{ width: 200 }} icon={<IconClock size={20} />} label="Mardi" value={value2} onChange={setValue2} clearable />
      <TimeRangeInput sx={{ width: 200 }} icon={<IconClock size={20} />} label="Mercredi" value={value3} onChange={setValue3} clearable />
      <TimeRangeInput sx={{ width: 200 }} icon={<IconClock size={20} />} label="Jeudi" value={value4} onChange={setValue4} clearable />
      <TimeRangeInput sx={{ width: 200 }} icon={<IconClock size={20} />} label="Vendredi" value={value5} onChange={setValue5} clearable />
      <TimeRangeInput sx={{ width: 200 }} icon={<IconClock size={20} />} label="Samedi" value={value6} onChange={setValue6} clearable />
      <TimeRangeInput sx={{ width: 200 }} icon={<IconClock size={20} />} label="Dimanche" value={value7} onChange={setValue7} clearable />
    </Box>
  )
}

export default Hours