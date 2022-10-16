import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {  makeStyles } from '@mui/styles';
import TopBarTypo from './TopBarTypo';

const pageTitle = ['Home', 'Biography', 'Contact','Link'];

const useStyles = makeStyles(() => 　({
  toolbarWrapper: {
    // 下記のように記述することで(開発者ツールにて)初期値として付与されているCSSを上書きできる
    '& .MuiContainer-root': {
      paddingLeft: 0,
      paddingRight: 0,
    },
    '& .MuiToolbar-root': {
      minHeight: '60px',
    }
  },
}));

const TopBar = () => {

  const classes = useStyles();

  return (
    <AppBar position="static" sx={{
     boxShadow: '0 0 0 0 rgba(0, 0, 0, .0)',
    bgcolor:'#000000',
    position: "fixed",
    zIndex: 9999,
    }}
    className={classes.toolbarWrapper}
    >
      <Container
      sx={{
                  padding:0
      }}

      >
        <Toolbar disableGutters sx={{padding:'0 0 0 0',maxHeight: '60px' }} >
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'center'} }}>
            {pageTitle.map((page,index) => (
              <Button
                key={page}
                sx={{
                  color:'#FFFFFF',
                  marginRight: pageTitle.length === index + 1 ? 0 : '64px'
                }}
              >
                <TopBarTypo titleName={page} />
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopBar;
