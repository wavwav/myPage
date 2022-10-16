import { Box, Grid } from '@mui/material';
import React, { useRef, useState } from 'react';
import TopBar from '../conponents/topbar/TopBar';
import { makeStyles } from '@mui/styles';
import SubtitleTypo from '../conponents/pageUtil/SubtitleTypo';
import FormTitleTypo from '../conponents/pageUtil/FormTitleTypo';
import emailjs from '@emailjs/browser';
import { TextField } from '@mui/material';
import styled from '@mui/material/styles/styled';

const useStyles = makeStyles(() => ({
  rootPadding: {
    padding: '0 136px',
  },
  defaultBoxPosition: {
    marginTop: '120px',
    display: 'flex'
  },
  topDefaultBoxPosition: {
    marginTop: '180px',
  },
  pngPosition: {
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  bodyPosition: {
    marginTop: '24px',
  },
  fieldStyle: {
    marginRight: '192px',
    height: '40px'
  },
  nameForms: {
    marginTop: '40px',
    display: 'flex',
    alignItems: 'center',
  },
  othersForms: {
    marginTop: '48px',
    display: 'flex',
    alignItems: 'center',
  },
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '24px',
    fontSize: '16px',
    color: 'rgba(0,0,0,0.5)',
  },
  '& .MuiOutlinedInput-root': {
    heght: "40px",
    borderRadius: '4px',
  },
  minWidth: '572px',
},

);

function Contact() {
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const [name, setName] = useState<string>();
  const [mail, setMail] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [message, setMessage] = useState<string>();

  const classes = useStyles();
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(serviceID || '', templateID || '', form.current || '', publicKey)
      .then((result: any) => {
        console.log(result.text);
      }, (error: any) => {
        console.log(error.text);
      });
  };
  if (
    publicKey !== undefined &&
    serviceID !== undefined &&
    templateID !== undefined
  ) {
    const template_param = {
      to_name: name,
      from_email: mail,
      title: title,
      message: message,
    }
  };

  return (
    <Box>
      <TopBar />
      <Grid container={true} className={classes.rootPadding}>
        <Box className={classes.topDefaultBoxPosition}>

          <SubtitleTypo name='Contact' />

          <form onSubmit={sendEmail}>
            <Box>
              <Box className={classes.nameForms}>
                <Box style={{ marginRight: '192px' }}>
                  <FormTitleTypo name="お名前" />
                </Box>
                <StyledTextField id="to_name" placeholder="サウナ　太郎" variant="outlined" value={name} defaultValue=''
                  onChange={(e) => setName(e.target.value)} sx={{
                    marginRight: '192px',
                    height: '40px'
                  }}
                  className={classes.fieldStyle} />
              </Box>
              <Box className={classes.othersForms}>
                <FormTitleTypo name="メールアドレス" />
                <StyledTextField id="from_email" placeholder="sunataro@sauna.co.jp" variant="outlined" value={mail} defaultValue=''
                  onChange={(e) => setMail(e.target.value)}
                  sx={{
                    marginRight: '192px',
                    height: '40px'
                  }}
                  className={classes.fieldStyle} />
              </Box>
              <Box className={classes.othersForms}>
                <FormTitleTypo name="件名" />
                <StyledTextField id="title" placeholder="○○の件" variant="outlined" value={title} defaultValue=''
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{
                    marginRight: '192px',
                    height: '40px'
                  }}
                  className={classes.fieldStyle} />
              </Box>
              <Box className={classes.othersForms}>
                <FormTitleTypo name="本文" />
                <StyledTextField id="message" placeholder="〇〇の件で連絡しました。" variant="outlined" value={message} defaultValue=''
                  onChange={(e) => setMessage(e.target.value)}
                  sx={{
                    marginRight: '192px',
                    height: '40px'
                  }}
                  className={classes.fieldStyle} />
              </Box>
              <input type="submit" value="Send" />
            </Box>
          </form>

        </Box>
      </Grid>
    </Box>
  );
}

export default Contact;
