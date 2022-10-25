import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import TopBarTypo from './TopBarTypo';
import { Link } from 'react-router-dom'
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import BodyTypo from '../pageUtil/BodyTypo';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const pageTitle = ['Home', 'Biography', 'Contact', 'Link'];


const useStyles = makeStyles(() => ({
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

const toList = (name: string): string => {
  if (name === 'Biography') {
    return '/biography'
  } if (name === 'Contact') {
    return '/contact'
  } if (name === 'Link') {
    return '/link'
  }

  return '/'

}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const TopBar = () => {
  const theme = useTheme();

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    // fixedだと、下に要素が入ってしまうためfixedよりsitckyの方がよい。
    <>
      <AppBar position="sticky"
        sx={{
          boxShadow: '0 0 0 0 rgba(0, 0, 0, .0)',
          bgcolor: '#000000',
          zIndex: 9999,
        }}
        className={classes.toolbarWrapper}
        open={open}
      >
        <Container>
          <Toolbar disableGutters >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ [theme.breakpoints.down('md')]: { marginLeft: '48px' }, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
              {pageTitle.map((page, index) => (
                <Button
                  key={page}
                  sx={{
                    color: '#FFFFFF',
                    marginRight: pageTitle.length === index + 1 ? 0 : '64px',
                    '& :hover': {
                      color: '#FFFFFF',
                      opacity: 0.6
                    },
                  }}
                  component={Link}
                  to={toList(page)}
                >
                  <TopBarTypo titleName={page} />
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {pageTitle.map((page) => (
            // to = { toList(text) }
            <Link to={toList(page)} style={{ textDecoration: 'none' }}>
              <ListItem key={page}>
                <ListItemButton >
                  <BodyTypo name={page}></BodyTypo>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};
export default TopBar;
