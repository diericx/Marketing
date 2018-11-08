import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Link from 'next/link';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Header extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  renderAuthButtons = () => {
    const { firebase } = this.props;
    // If the user ISN'T signed in
    if (firebase.auth().currentUser == null) {
      return (
        <div>
          <Link href="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Link href="/signup">
            <Button color="inherit">Sign Up</Button>
          </Link>
        </div>
      )
    }

    // If the user IS signed in

    
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, firebase, profile } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>

            
              <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link href="/">
                Contmar
                </Link>
              </Typography>
            

            {this.renderAuthButtons()}
            {firebase && firebase.auth().currentUser && (
                <div>

                  <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
  
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withFirebase,
  connect(({firebase: {profile}}) => ({
    profile
  })),
  withStyles(styles)
)(Header)