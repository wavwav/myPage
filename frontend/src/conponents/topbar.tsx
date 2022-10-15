import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme } from '@mui/material';

const pageTitle = ['Home', 'Biography', 'Contact','Link'];

const TopBar = () => {

  return (
    <AppBar position="static" sx={{
      paddingRight : 0,
      marginTop : 0
    , boxShadow: '0 0 0 0 rgba(0, 0, 0, .0)'
    ,bgcolor:'#000000'
    }}>
      <Container
      sx={{
                  padding:0
      }}>
        <Toolbar disableGutters sx={{padding:'0 0 0 0' , height: '10pxs'}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'center'} }}>
            {pageTitle.map((page,index) => (
              <Button
                key={page}
                sx={{
                  color:'#FFFFFF',
                  marginRight: pageTitle.length === index + 1 ? 0 : '64px'
                }}
              >
                <Typography variant='subtitle1'     sx={{
                  fontWeight:'bold'
                  ,
                  fontFamily:'Noto Sans CJK JP'
                }}>
                {page}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopBar;
