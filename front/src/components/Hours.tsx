import dayjs from 'dayjs';
import { useState } from 'react';
import { TimeRangeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';
import { Box } from '@mantine/core';



function Hours() {
  const now = new Date();
  const then = dayjs(now).add(30, 'minutes').toDate();
  const [value, setValue] = useState<[Date, Date]>([now, then]);

  return (
    <Box>
      <TimeRangeInput icon={<IconClock size={20} />} label="Lundi" value={value} onChange={setValue} clearable />
      <TimeRangeInput icon={<IconClock size={20} />} label="Mardi" value={value} onChange={setValue} clearable />
      <TimeRangeInput icon={<IconClock size={20} />} label="Mercredi" value={value} onChange={setValue} clearable />
      <TimeRangeInput icon={<IconClock size={20} />} label="Jeudi" value={value} onChange={setValue} clearable />
      <TimeRangeInput icon={<IconClock size={20} />} label="Vendredi" value={value} onChange={setValue} clearable />
      <TimeRangeInput icon={<IconClock size={20} />} label="Samedi" value={value} onChange={setValue} clearable />
      <TimeRangeInput icon={<IconClock size={20} />} label="Dimanche" value={value} onChange={setValue} clearable />
    </Box>
  )
}

export default Hours