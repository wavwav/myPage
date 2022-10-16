import { Box, Grid } from '@mui/material';
import React from 'react';
import TopBar from '../conponents/topbar/TopBar';
import {  makeStyles } from '@mui/styles';
import SubtitleTypo from '../conponents/SubtitleTypo';
import nekko from '../nekko.png';
import HomeBodyTypo from '../conponents/home/HomeBodyTypo';
import yunosen from '../yunosen.png'
import work from '../work.png';

const useStyles = makeStyles(() => 　({
  rootPadding: {
    padding:'0 136px',
  },
  defaultBoxPosition: {
    marginTop:'120px',
    display:'flex'
  },
  leftSeparate:{
    marginLeft:'68px'
  },
  rightSeparate:{
    marginRight:'68px'
  },
  yunosenPosition:{
    textAlign:'center'
  },
  bodyPosition:{
    marginTop:'24px',
  },
  bodyItemPosition:{
    marginTop:'16px',
  },
}));

function Home() {
   const classes = useStyles();
  return (
    <Box>
  <TopBar />
  <Grid container={true} className={classes.rootPadding}>
    {/* 自己紹介 */}
    <Grid container={true} item={true}>
      <Box className={classes.defaultBoxPosition}>
       <Grid item={true} lg={6} md={6} xs={6}>
            <Box className={classes.rightSeparate}>
      <img src={nekko} width='479px' height='279.73px' />
      </Box>
      </Grid>
         <Grid item={true} lg={6} md={6} xs={6}>
      <Box className={classes.leftSeparate}>
      <SubtitleTypo name='Introduction' />
      <Box className={classes.bodyPosition}>
      <HomeBodyTypo name={`初めまして。
SIerにて新卒から働いており、現在3年目になります。
2022年度の上期までは人事系のシステムをスクラムにて開発し、TypeScriptとReactを用いたSPAによるフロントエンド開発やJavaとSpring Boot を用いたバックエンド開発、Oracleを用いたDB設計やデータの操作等を経験してきました。
また、並行して同プロダクトのUI/UXのデザインに携わり、25画面ほどの画面モックをアウトプットとして納品することができました。
下期からはサブシステムの新機能の開発が始まるため、UI/UXのデザイン及びスクラムマスターを担当する予定です。
その他にはウォーターフォール開発にて営業支援系のシステムのエンハンス業務、外部人材系の運用保守業務を経験したことがあります。
硬い話ばかりになってしまいましたが、現在までの業務経験及び自己学習の成果を何か形として残したいと思い、本サイトを設立いたしました。`} />
</Box>
      </Box>
      </Grid>
      </Box>
    </Grid>
    {/* 趣味 */}
    <Grid container={true} item={true} >
      <Box className={classes.defaultBoxPosition}>
       <Grid item={true} lg={6} md={6} >
       <Box className={classes.rightSeparate}>
      <SubtitleTypo name='Hobby' />
      <Box className={classes.bodyPosition}>
      <HomeBodyTypo name={`読書、映画、サウナ、旅行などが趣味です！
とりあえずやりたいことは実行してみるタイプなので、インドア、アウトドア関係なくなんでも興味があります。
直近では10日間ほど沖縄に一人で行くなど、行動力には自信があります。`}/>
</Box>
</Box>
      </Grid>
       <Grid item={true} lg={6} md={6} xs={6}>
      <Box className={classes.leftSeparate}>
        <Box className={classes.yunosenPosition}>
      <img src={yunosen} width='279.73' height='279.73px' />
      </Box>
      </Box>
      </Grid>
      </Box>
    </Grid>
    {/* アーキ */}
    <Grid container={true} item={true} >
      <Box className={classes.defaultBoxPosition}>
       <Grid item={true} lg={6} md={6} xs={6} style={{marginRight:'68px'}}>
      <img src={work} width='420.01' height='279.73px' />
      </Grid>
      <Grid item={true} lg={6} md={6} xs={6}>
      <Box className={classes.leftSeparate}>
      <SubtitleTypo name='Architecture' />
       <Box className={classes.bodyPosition}>
      <HomeBodyTypo name='・react: 18.2.0' />
      <Box className={classes.bodyItemPosition}>
      <HomeBodyTypo name='・typescript: 4.8.4' />
      </Box>
  <Box className={classes.bodyItemPosition}>
      <HomeBodyTypo name='・@mui/material: 5.10.9' />
</Box>
       <Box className={classes.bodyItemPosition}>
      <HomeBodyTypo name={`使用したライブラリと各バージョンは上記です。
 詳しくはGitHubをご参照ください。`} />
        </Box>
          <Box className={classes.bodyItemPosition}>
      <HomeBodyTypo name='GitHub:https://github.com/wavwav/myPage' />
      </Box>
      </Box>
      </Box>
      </Grid>
      </Box>
    </Grid>
  </Grid>
  </Box>
  );
}

export default Home;
