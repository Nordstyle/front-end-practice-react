import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const styles = {
  appBar: {
    backgroundColor: '#20232a'
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'center'
  },
  link: {
    color: '#fff',
    margin: '0 10px',
    transition: '.3s',
    '&:hover': {
      color: '#61dafb'
    }
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <AppBar className={classes.appBar} position='sticky'>
      <Toolbar className={classes.toolBar}>
        <Link className={classes.link} component={RouterLink} to='/'> Home page </Link>
        <Link className={classes.link} component={RouterLink} to='/users'> Users list </Link>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);