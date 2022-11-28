import React from 'react';
import Typography from '@mui/material/Typography';

interface Props {
  name: string;
}

const TitleTypo: React.FC<Props> = ({ name }) => {
  return (
    <Typography variant='subtitle2'
      sx={{
        fontWeight: 'bold',
        fontFamily: 'Noto Sans CJK JP',
        opacity: '0.8',
        whiteSpace: 'nowrap'
      }}>
      {name}
    </Typography>
  );
};

export default TitleTypo;
