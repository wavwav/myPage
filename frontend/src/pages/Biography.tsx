import { Box, Grid } from '@mui/material';
import React from 'react';
import TopBar from '../conponents/topbar/TopBar';
import {  makeStyles } from '@mui/styles';
import SubtitleTypo from '../conponents/pageUtil/SubtitleTypo';
import nekko from '../nekko.png';
import HomeBodyTypo from '../conponents/pageUtil/BodyTypo';
import yunosen from '../yunosen.png'
import work from '../work.png';
import book from '../book.png';
import DateTypo from '../conponents/pageUtil/DateTypo';
import BioBodyTypo from '../conponents/pageUtil/BioBodyTypo';

const useStyles = makeStyles(() => 　({
  rootPadding: {
    padding:'0 136px',
  },
  defaultBoxPosition: {
    marginTop:'120px',
    display:'flex'
  },
  topDefaultBoxPosition: {
    marginTop:'180px'
  },
  contentMargin:{
    marginLeft:'16px',
  },
  bodyPosition:{
    marginTop:'40px',
  },
  yearContentMargin:{
    marginLeft:'144px',
    display:'flex',
  },
  doubleMonthContentMargin:{
    marginLeft:'136px',
    display:'flex',
  },
  contentPosition: {
    display:'flex',
    alignItems:'center',
  },
  othersContentPosition: {
    marginTop:'48px',
    display:'flex',
    alignItems:'center',
  },

}));

function Biography() {
   const classes = useStyles();
  return (
  <Box>
  <TopBar />
  <Grid container={true} className={classes.rootPadding}>
  <Box className={classes.topDefaultBoxPosition}>

      <SubtitleTypo name='Biography' />
      <Box className={classes.bodyPosition}>
      <Box>
        <Box className={classes.contentPosition}>
         <DateTypo date='2013年4月' />
         <Box className={classes.yearContentMargin}>
         <BioBodyTypo name='宮崎県立宮崎西高等学校'/>
          <Box className={classes.contentMargin}>
         <BioBodyTypo name='普通科'/>
         </Box>
          <Box className={classes.contentMargin}>
         <BioBodyTypo name='入学'/>
         </Box>
         </Box>
        </Box>
        <Box className={classes.othersContentPosition}>
        <DateTypo date='2016年3月' />
         <Box className={classes.yearContentMargin}>
         <BioBodyTypo name='宮崎県立宮崎西高等学校'/>
          <Box className={classes.contentMargin}>
         <BioBodyTypo name='普通科'/>
         </Box>
          <Box className={classes.contentMargin}>
         <BioBodyTypo name='卒業'/>
         </Box>
         </Box>
        </Box>
        <Box className={classes.othersContentPosition}>
        <DateTypo date='2016年4月' />
         <Box className={classes.yearContentMargin}>
         <BioBodyTypo name='中央大学'/>
          <Box className={classes.contentMargin}>
         <BioBodyTypo name='経済学部'/>
         </Box>
          <Box className={classes.contentMargin}>
         <BioBodyTypo name='経済情報システム学科'/>
         </Box>
          <Box className={classes.contentMargin}>
         <BioBodyTypo name='入学'/>
         </Box>
         </Box>
        </Box>
        <Box className={classes.othersContentPosition}>
        <DateTypo date='2020年3月' />
         <Box className={classes.yearContentMargin}>
         <BioBodyTypo name='中央大学'/>
          <Box className={classes.contentMargin}>
         <BioBodyTypo name='経済学部'/>
         </Box>
          <Box className={classes.contentMargin}>
         <BioBodyTypo name='経済情報システム学科'/>
         </Box>
          <Box className={classes.contentMargin}>
         <BioBodyTypo name='卒業'/>
         </Box>
         </Box>
        </Box>
         <Box className={classes.othersContentPosition}>
        <DateTypo date='2020年4月' />
         <Box className={classes.yearContentMargin}>
         <BioBodyTypo name='現職'/>
          <Box className={classes.contentMargin}>
         <BioBodyTypo name='入社'/>
         </Box>
         </Box>
        </Box>
       <Box className={classes.othersContentPosition}>
        <DateTypo date='2022年10月' />
         <Box className={classes.doubleMonthContentMargin}>
         <BioBodyTypo name='現職'/>
          <Box className={classes.contentMargin}>
         <BioBodyTypo name='在籍'/>
         </Box>
         </Box>
        </Box>
      </Box>
    </Box>
  </Box>
</Grid>
  </Box>
  );
}

export default Biography;
