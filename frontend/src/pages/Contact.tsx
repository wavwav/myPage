import { Box, Grid } from '@mui/material';
import React,{ useRef } from 'react';
import TopBar from '../conponents/topbar/TopBar';
import {  makeStyles } from '@mui/styles';
import SubtitleTypo from '../conponents/pageUtil/SubtitleTypo';
import FormTitleTypo from '../conponents/pageUtil/FormTitleTypo';
import emailjs from '@emailjs/browser';

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

function Contact() {
   const classes = useStyles();
const form = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('a', 'YOUR_TEMPLATE_ID', form.current || 'a', 'YOUR_PUBLIC_KEY')
      .then((result:any) => {
          console.log(result.text);
      }, (error:any) => {
          console.log(error.text);
      });
  };
  return (
  <Box>
  <TopBar />
  <Grid container={true} className={classes.rootPadding}>
  <Box className={classes.topDefaultBoxPosition}>
      <SubtitleTypo name='Contact' />
      <Box>
      <FormTitleTypo name="お名前" />

    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      </Box>
  </Box>
</Grid>
  </Box>
  );
}

export default Contact;
