import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import TopBar from '../conponents/topbar/TopBar';
import { makeStyles } from '@mui/styles';
import SubtitleTypo from '../conponents/pageUtil/SubtitleTypo';
import nekko from '../nekko.png';
import HomeBodyTypo from '../conponents/pageUtil/BodyTypo';
import yunosen from '../yunosen.png'
import work from '../work.png';
import book from '../book.png';
import DateTypo from '../conponents/pageUtil/DateTypo';
import BioBodyTypo from '../conponents/pageUtil/BioBodyTypo';
import { BioArray } from '../conponents/pageUtil/commons/constBiography';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  rootPadding: {
    padding: '0 136px',
  },
  defaultBoxPosition: {
    marginTop: '120px',
    display: 'flex'
  },
  topDefaultBoxPosition: {
    marginTop: '120px'
  },
  contentMargin: {
    marginLeft: '16px',
  },
  bodyPosition: {
    marginTop: '40px',
  },
  dateContentMargin: {
    marginLeft: '136px',
    display: 'flex',
  },
  contentPosition: {
    display: 'flex',
    alignItems: 'center',
  },
  othersContentPosition: {
    marginTop: '48px',
    display: 'flex',
    alignItems: 'center',
  },

}));

function Biography() {
  const classes = useStyles();

  const [bios, setBios] = useState(BioArray);

  return (
    <Box>
      <TopBar />
      <Grid container={true} className={classes.rootPadding}>
        <Box className={classes.topDefaultBoxPosition}>

          <SubtitleTypo name='Biography' />
          <Box className={classes.bodyPosition}>
            <Box>
              {BioArray.map((bio, index) =>
                <Box className={index === 0 ? classes.contentPosition : classes.othersContentPosition}>
                  <DateTypo date={bio.date} />
                  <Box className={classes.dateContentMargin}>
                    <BioBodyTypo name={bio.org1} />
                    {bio.org2 && (
                      <Box className={classes.contentMargin}>
                        <BioBodyTypo name={bio.org2 || ''} />
                      </Box>)}
                    {bio.org3 && (
                      <Box className={classes.contentMargin}>
                        <BioBodyTypo name={bio.org3 || ''} />
                      </Box>)}
                    <Box className={classes.contentMargin}>
                      <BioBodyTypo name={bio.status} />
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default Biography;
