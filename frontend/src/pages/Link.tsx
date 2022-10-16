import { Box, Grid } from '@mui/material';
import React from 'react';
import TopBar from '../conponents/topbar/TopBar';
import {  makeStyles } from '@mui/styles';
import SubtitleTypo from '../conponents/pageUtil/SubtitleTypo';
import BodyTypo from '../conponents/pageUtil/BodyTypo';

const useStyles = makeStyles(() => 　({
  rootPadding: {
    padding:'0 136px',
  },
  defaultBoxPosition: {
    marginTop:'120px',
    display:'flex'
  },
  topDefaultBoxPosition: {
    marginTop:'180px',
  },
  pngPosition:{
    textAlign:'center',
    justifyContent:'center',
    display:'flex'
  },
  bodyPosition:{
    marginTop:'24px',
  },
  bodyItemPosition:{
    marginTop:'16px',
  },
  bottomDefaultBoxPosition: {
    marginTop:'120px',
    display:'flex',
    marginBottom:'120px'
  },
}));

function Link() {
   const classes = useStyles();
  return (
  <Box>
  <TopBar />
  <Grid container={true} className={classes.rootPadding}>
  <Box className={classes.topDefaultBoxPosition}>
      <SubtitleTypo name='Link' />
      <Box className={classes.bodyPosition}>
     <BodyTypo name='未定' />
      </Box>
  </Box>
</Grid>
  </Box>
  );
}

export default Link;
