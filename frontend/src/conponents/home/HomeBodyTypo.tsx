import React  from 'react';
import Typography from '@mui/material/Typography';

interface Props {
  name: string;
}

const HomeBodyTypo:React.FC<Props> = ({name}) => {
  return (
<Typography variant='body2'
sx={{
fontWeight:'body',
fontFamily:'Noto Sans CJK JP',
opacity:'0.8',
color:'#000000',
lineHeight: 1.4,
whiteSpace: "pre-wrap"
}}>
    {name}
</Typography>
  );
};

export default HomeBodyTypo;
