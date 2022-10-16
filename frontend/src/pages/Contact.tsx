import { Box, Grid } from '@mui/material';
import React from 'react';
import TopBar from '../conponents/topbar/TopBar';
import {  makeStyles } from '@mui/styles';
import SubtitleTypo from '../conponents/SubtitleTypo';

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
    display:'flex'
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

function Contact() {
   const classes = useStyles();
  return (
  <Box>
  <TopBar />
  <Grid container={true} className={classes.rootPadding}>
  <Box className={classes.topDefaultBoxPosition}>
      <SubtitleTypo name='Contact' />
  </Box>
</Grid>
  </Box>
  );
}

export default Contact;
