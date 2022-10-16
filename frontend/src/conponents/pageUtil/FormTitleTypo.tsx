import React  from 'react';
import Typography from '@mui/material/Typography';

interface Props {
  name: string;
}

const FormTitleTypo:React.FC<Props> = ({name}) => {
  return (
<Typography variant='subtitle2'
sx={{
fontWeight:'bold',
fontFamily:'Noto Sans CJK JP',
opacity:'0.8'
}}>
    {name}
</Typography>
  );
};

export default FormTitleTypo;
