import { Box, Grid } from '@mui/material';
import React from 'react';
import TopBar from '../conponents/topbar/TopBar';
import { makeStyles } from '@mui/styles';
import SubtitleTypo from '../conponents/pageUtil/SubtitleTypo';
import nekko from '../nekko.png';
import BodyTypo from '../conponents/pageUtil/BodyTypo';
import yunosen from '../yunosen.png'
import work from '../work.png';
import book from '../book.png';
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
    marginTop: '180px',
    display: 'flex'
  },
  leftSeparate: {
    marginLeft: '68px'
  },
  rightSeparate: {
    marginRight: '68px',
  },
  pngPosition: {
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  bodyPosition: {
    marginTop: '24px',
  },
  bodyItemPosition: {
    marginTop: '16px',
  },
  bottomDefaultBoxPosition: {
    marginTop: '120px',
    display: 'flex',
    marginBottom: '120px'
  },
  gitPosition: {
    marginTop: '16px',
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Box>
      <TopBar />
      <Grid container={true} className={classes.rootPadding}>
        {/* 自己紹介 */}
        <Grid container={true} item={true} lg={12} md={12} xs={12}>
          <Box className={classes.topDefaultBoxPosition}>
            <Grid item={true} lg={6} md={6} xs={6}>
              <Box className={classes.rightSeparate}>
                <Box className={classes.pngPosition}>
                  <img src={nekko} width='279.73px' height='163.36px' />
                </Box>
              </Box>
            </Grid>
            <Grid item={true} lg={6} md={6} xs={6}>
              <Box className={classes.leftSeparate}>
                <SubtitleTypo name='Introduction' />
                <Box className={classes.bodyPosition}>
                  <BodyTypo name={`初めまして。
SIerにて新卒から働いており、現在3年目になります。
2022年度の上期は人事系のシステムをスクラムにて開発し、TypeScriptとReactを用いたSPAによるフロントエンド開発やJavaとSpring Boot を用いたバックエンド開発、Oracleを用いたDB設計やデータの操作等を経験してきました。
また、並行して同プロダクトのUI/UXのデザインに携わり、25画面ほどの画面モックを成果物として納品することができました。
下期からはサブシステムの開発が始まり、UI/UXのデザイン及びスクラムマスターを担当する予定です。
その他にはウォーターフォール開発にて営業支援系のシステムのエンハンス業務、外部人材系の運用保守業務を経験したことがあります。
現在までの業務経験及び自己学習の成果を何か形として残したいと思い、本サイトを設立いたしました。`} />
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
        {/* 趣味 */}
        <Grid container={true} item={true} lg={12} md={12} xs={12}>
          <Box className={classes.defaultBoxPosition}>
            <Grid item={true} lg={6} md={6} xs={6}>
              <Box className={classes.rightSeparate}>
                <SubtitleTypo name='Hobby' />
                <Box className={classes.bodyPosition}>
                  <BodyTypo name={`読書、映画、サウナ、旅行などが趣味です！
とりあえずやりたいことは実行してみるタイプなので、インドア、アウトドア関係なくなんでも興味があります。
直近では10日間ほど沖縄に一人で行くなど、行動力には自信があります。`} />
                </Box>
              </Box>
            </Grid>
            <Grid item={true} lg={6} md={6} xs={6}>
              <Box className={classes.leftSeparate}>
                <Box className={classes.pngPosition}>
                  <img src={yunosen} width='279.73px' height='279.73px' />
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
        {/* アーキ */}
        <Grid container={true} item={true} lg={12} md={12} xs={12}>
          <Box className={classes.defaultBoxPosition}>
            <Grid item={true} lg={6} md={6} xs={6}>
              <Box className={classes.rightSeparate}>
                <Box className={classes.pngPosition}>
                  <img src={work} width='279.73px' height='186.3px' />
                </Box>
              </Box>
            </Grid>
            <Grid item={true} lg={6} md={6} xs={6}>
              <Box className={classes.leftSeparate}>
                <SubtitleTypo name='Architecture' />
                <Box className={classes.bodyPosition}>
                  <BodyTypo name='・react: 18.2.0' />
                  <Box className={classes.bodyItemPosition}>
                    <BodyTypo name='・typescript: 4.8.4' />
                  </Box>
                  <Box className={classes.bodyItemPosition}>
                    <BodyTypo name='・@mui/material: 5.10.9' />
                  </Box>
                  <Box className={classes.bodyItemPosition}>
                    <BodyTypo name='・react-router-dom :6.4.2' />
                  </Box>
                  <Box className={classes.bodyItemPosition}>
                    <BodyTypo name={`今回使用したライブラリと言語の各バージョンは上記です。TypeScriptとReactを使用し、デザインコンポーネントにMaterial-UIを使用しています。詳しくはGitHubをご参照ください。`} />
                  </Box>
                  <Box className={classes.gitPosition}>
                    <BodyTypo name='GitHub:' />
                    <Link href="https://github.com/wavwav/myPage" underline="hover">
                      {'https://github.com/wavwav/myPage'}
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
        {/* 趣味 */}
        <Grid container={true} item={true} lg={12} md={12} xs={12}>
          <Box className={classes.bottomDefaultBoxPosition}>
            <Grid item={true} lg={6} md={6} xs={6}>
              <Box className={classes.rightSeparate}>
                <SubtitleTypo name='Finally' />
                <Box className={classes.bodyPosition}>
                  <BodyTypo name={`ここまで読んでくださいまして、ありがとうございます。本サイトの今後に運用等ついては検討中です。まずはレイアウト等の調整をしていけたらと考えています。`} />
                </Box>
              </Box>
            </Grid>
            <Grid item={true} lg={6} md={6} xs={6}>
              <Box className={classes.leftSeparate}>
                <Box className={classes.pngPosition}>
                  <img src={book} width='279.73px' height='186.3px' />
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
