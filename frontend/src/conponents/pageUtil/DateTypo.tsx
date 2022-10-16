import React  from 'react';
import Typography from '@mui/material/Typography';

interface Props {
  date: string;
}

const DateTypo:React.FC<Props> = ({date}) => {
  return (
<Typography variant='subtitle2'
sx={{
fontWeight:'bold',
fontFamily:'Noto Sans CJK JP',
opacity:'0.6',
color:'#000000',
}}>
    {date}
</Typography>
  );
};

export default DateTypo;
