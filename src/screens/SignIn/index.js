import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

import logo from '../../assets/logo.jpg'

import styles from './styles'

function SignIn(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <img className={classes.logo} src={logo} alt="" />
        <Typography 
          component="h1" 
          variant="h5" 
          className={classes.text}
        >
          Acesso ao sistema
        </Typography>
        <form className={classes.form}>
          <FormControl required fullWidth>
            <TextField
            id="outlined-search"
            label="Endereço de email"
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            />
          </FormControl>
          <FormControl required fullWidth>
            <TextField
            id="outlined-search"
            label="Senha"
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar-me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Acesso
          </Button>
        </form>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);