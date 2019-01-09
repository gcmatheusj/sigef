import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  MenuList,
  MenuItem,
  Grid,
  Avatar,
  CssBaseline,
} from '@material-ui/core';
import { Home, Settings, Face } from '@material-ui/icons'
import { VerifiedUser } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';

import styles from './styles';

class Header extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const {
      classes, container, location: { pathname }, children, title,
    } = this.props;
    const { mobileOpen } = this.state;

    const drawer = (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} style={{ backgroundColor: '#9e9e9e'}}/>
        </Hidden>
        <Grid container justify='center' alignItems='center' style={{ height: 150, backgroundColor: '#37474f' }}>
          <Avatar style={{ height: 100, width: 100, backgroundColor: '#37474f' }}>
            <Face style={{ width: 100, height: 100, color: '#fff' }}/>
          </Avatar>
        </Grid>
        <MenuList>
          <MenuItem className={classes.menuItem}>
            <Home className={classes.drawerIcon} />
            Home
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <VerifiedUser className={classes.drawerIcon} />
            Nível de Acesso
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <Settings className={classes.drawerIcon} />
            Configurações
          </MenuItem>
        </MenuList>
      </div>
    );

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <Menu />
              </IconButton>
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            {/* The implementation can be swap with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
};

export default compose(
  withRouter,
  withStyles(styles)
)(Header);
