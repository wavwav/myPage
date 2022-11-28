import { Box, Grid } from '@mui/material';
import React from 'react';
import TopBar from '../conponents/topbar/TopBar';
import { makeStyles } from '@mui/styles';
import SubtitleTypo from '../conponents/pageUtil/SubtitleTypo';
import BodyTypo from '../conponents/pageUtil/BodyTypo';

import { Link } from '@mui/material';

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
  pngPosition: {
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  topLinkPosition: {
    marginTop: '40px',
  },
  bodyPosition: {
    marginTop: '16px',
  },
  bodyItemPosition: {
    marginTop: '16px',
  },
  bottomDefaultBoxPosition: {
    marginTop: '120px',
    display: 'flex',
    marginBottom: '120px'
  },
}));

function Links() {
  const classes = useStyles();
  return (
    <Box>
      <TopBar />
      <Grid container={true} className={classes.rootPadding}>
        <Box className={classes.topDefaultBoxPosition}>
          <SubtitleTypo name='Link' />
          <Box className={classes.topLinkPosition}>
                    <Link href="https://xd.adobe.com/view/3d5e7ec0-91d8-4ba4-a657-1fa15867af2f-680d/" underline="hover">
                      {'Adobe XD'}
                    </Link>

          <Box className={classes.bodyPosition}>
                    <BodyTypo name={`このサイトを実装前に作成した画面モックです。実装後に変更した部分もあるので、少し異なる部分があるかもしれません。
直近ではブログ機能を作るためにブログの画面モックを追加しました。` }/>
           </Box>
            </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default Links;
