import React, { Component, Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import SignIn from './screens/SignIn'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e4ff54',
      main: '#aeea00',
      dark: '#79b700',
    },
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <SignIn />
          </MuiThemeProvider>
        </Fragment>
      </div>
    );
  }
}

export default App;
