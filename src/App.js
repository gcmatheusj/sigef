import React, { Component, Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import SignIn from './screens/SignIn/'
import Home from './screens/Home/'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bef67a',
      main: '#8bc34a',
      dark: '#5a9216',
    },
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <Route exact path='/' component={SignIn} />
            <Route path='/home' component={Home} />
          </MuiThemeProvider>
        </Fragment>
      </Router>
    );
  }
}

export default App;
