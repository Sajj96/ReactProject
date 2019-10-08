import React from 'react';
import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import PropTypes from 'prop-types';
import './App.css';
import Toolbar from '@material-ui/core/Toolbar';
import InstaProfile from './js/InstaProfile.js';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import UserInfo from './js/UserInfo.js';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from './js/Tabs.js';

const theme = createMuiTheme ({
  palette:{
   primary: {
     main: grey[900],
     light: grey[50],
   },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  tool:{
    backgroundColor: '#212121',
    minHeight: '0% !important',
  },
}));


function ScrollTop(props) {
  const { children, window} = props;
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


export default function App(props) {
  const classes = useStyles()

    return(
     <MuiThemeProvider theme={theme}>
       <InstaProfile />
          <Toolbar id="back-to-top-anchor" className={classes.tool}/>
       <UserInfo />
       <Tabs />
       <ScrollTop {...props}>
        <Fab color="inherit" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
     </MuiThemeProvider>
    )
}

