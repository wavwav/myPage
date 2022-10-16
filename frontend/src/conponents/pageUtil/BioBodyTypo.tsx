import React  from 'react';
import Typography from '@mui/material/Typography';

interface Props {
  name: string;
}

const BioBodyTypo:React.FC<Props> = ({name}) => {
  return (
<Typography variant='body1'
sx={{
fontWeight:'body',
fontFamily:'Noto Sans CJK JP',
opacity:'0.8',
color:'#000000',
}}>
    {name}
</Typography>
  );
};

export default BioBodyTypo;
