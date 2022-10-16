import React  from 'react';
import Typography from '@mui/material/Typography';

interface Props {
  titleName: string;
}

const TopBarTypo:React.FC<Props> = ({titleName}) => {
  return (
<Typography variant='subtitle1'
sx={{
fontWeight:'bold',
fontFamily:'Noto Sans CJK JP'
}}>
                {titleName}
</Typography>
  );
};

export default TopBarTypo;
