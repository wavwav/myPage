import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TopBar from '../conponents/topbar/TopBar';
import { makeStyles } from '@mui/styles';
import SubtitleTypo from '../conponents/pageUtil/SubtitleTypo';
import TitleTypo from '../conponents/pageUtil/TitleTypo';
import emailjs from '@emailjs/browser';
import { TextField } from '@mui/material';
import styled from '@mui/material/styles/styled';
import { Button } from '@mui/material';
import { isEmpty } from 'lodash';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { SnackbarContent } from '@mui/material';
import { mailRegex } from '../conponents/pageUtil/commons/utils';

export interface State extends SnackbarOrigin {
  open: boolean;

}

const useStyles = makeStyles(() => ({
  rootPadding: {
    padding: '0 136px',
  },
  defaultBoxPosition: {
    marginTop: '120px',
    display: 'flex'
  },
  topDefaultBoxPosition: {
    marginTop: '120px',
  },
  titleBox: {
    minWidth: '98px',
    height: "36.13px",
    display: 'flex',
    alignItems: 'center'
  },
  formsMargin: {
    marginRight: '136px',
  },
  nameForms: {
    display: 'flex',
    alignItems: 'center',
  },
  othersForms: {
    marginTop: '48px',
  },
  topBoxMargin: {
    marginTop: '24px',
    justifyContent: 'center',
    display: 'flex'
  },
  othersFormTitle: {
    minWidth: '98px',
    marginTop: '48px',
    height: "39px",
    display: 'flex',
    alignItems: 'center'
  },
  buttonPosition: {
    marginTop: '48px',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '806.7px'
  },
  caption: {
    opacity: 0.8,
  },
  captionPosition: {
    marginTop: '40px',
  },
}));


const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '24px',
    paddingRight: '24px',
    fontSize: '14px',
    //color: 'rgba(0,0,0,0.5)',
  },
  '& .MuiOutlinedInput-root': {
    heght: "40px",
    borderRadius: '4px',
  },
  minWidth: '572px',
},

);

const StyledMessageTextField = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    paddingTop: '8px',
    paddingLeft: '24px',
    paddingBottom: '8px',
    paddingRight: '24px',
    fontSize: '14px',
    //color: 'rgba(0,0,0,0.5)',
  },
  '& .MuiOutlinedInput-root': {
    padding: "0px",
    borderRadius: '4px',
    fontSize: '16px',
  },
  minWidth: '572px',
  flexWrap: 'wrap'
},

);

function Contact() {
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  // falseの状態が正規表現に当てはまっていない状態
  const [mailCheck, setMailCheck] = useState<boolean>(false);

  const classes = useStyles();

  // snackbar
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = () => {
    setState({
      open: true,
      vertical: 'bottom',
      horizontal: 'center'
    });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  (function () {
    emailjs.init(publicKey || '');
  })();

  const sendEmail = (e: any) => {
    e.preventDefault();

    const template_param = {
      to_name: name,
      from_email: mail,
      title: title,
      message: message,
    }

    emailjs.send(
      serviceID || '',
      templateID || '',
      template_param,
      publicKey || ''
    ).then(() => {
      handleClick()
      setName('');
      setMail('');
      setMessage('');
      setTitle('');
    });

  }

  const submitCheck = () => {
    if (isEmpty(name) || isEmpty(mail) || isEmpty(title) || isEmpty(message) || !mailCheck) {
      // 何か不備があればsubmitボタンが非活性化
      return true;
    }
    return false;
  }

  return (
    <Box>
      <TopBar />
      <Grid container={true} className={classes.rootPadding}>
        <Box className={classes.topDefaultBoxPosition}>
          <SubtitleTypo name='Contact' />
          <Box className={classes.captionPosition}>
            <Typography variant='caption' className={classes.caption}>全て必須の項目であるため、入力後に送信ができるようになります。</Typography>
          </Box>
          <Box className={classes.topBoxMargin}>
            <Box className={classes.formsMargin}>
              <Box className={classes.titleBox}>
                <TitleTypo name="お名前" />
              </ Box>
              <Box className={classes.othersFormTitle}>
                <TitleTypo name="メールアドレス" />
              </Box>
              <Box className={classes.othersFormTitle}>
                <TitleTypo name="件名" />
              </Box>
              <Box className={classes.othersFormTitle}>
                <TitleTypo name="本文" />
              </Box>
            </Box>
            {/* フォーム */}
            <Box>
              <StyledTextField id="to_name" placeholder="サウナ　太郎" variant="outlined" value={name} defaultValue=''
                onChange={(e) => setName(e.target.value)}
              />

              <Box className={classes.othersForms}>
                <StyledTextField id="from_email" placeholder="sunataro@sauna.co.jp" variant="outlined" value={mail} defaultValue=''
                  onChange={(e) => {
                    setMail(e.target.value)
                    setMailCheck(mailRegex(e.target.value))
                  }
                  }
                  sx={{
                    marginRight: '192px',

                  }}
                  error={!mailCheck && mail.length > 0}
                  helperText={(!mailCheck && mail.length > 0) && 'メールアドレスはxxx@a.b.ccの形式又はxxx@aaa.bbの形式で入力してください'}
                />
              </Box>
              <Box className={classes.othersForms}>
                <StyledTextField id="title" placeholder="〇〇の件" variant="outlined" value={title} defaultValue=''
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{
                    marginRight: '192px',

                  }}
                />
              </Box>
              <Box className={classes.othersForms}>
                <StyledMessageTextField id="message" placeholder="〇〇の件で連絡しました。" variant="outlined" value={message} defaultValue=''
                  onChange={(e) => setMessage(e.target.value)}
                  multiline={true}
                  sx={{
                    marginRight: '192px',

                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box className={classes.buttonPosition}>
            <Button variant='contained' color='primary' onClick={(e) => sendEmail(e)}
              disabled={submitCheck()}>
              送信
          </Button>
          </Box>
        </Box>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="お問い合わせを送信いたしました。"
        key={vertical + horizontal}

      >
        <SnackbarContent style={{
          backgroundColor: '#5CB85C',
        }}
          message={<span id="client-snackbar">お問い合わせを送信致しました。</span>}
        />
      </Snackbar>
    </Box>
  );
}

export default Contact;
