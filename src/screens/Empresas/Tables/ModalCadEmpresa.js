import React, { Component } from 'react';
import { Dialog, Grid, DialogContent, DialogTitle, DialogActions, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  root: {
    padding: 20,
    marginTop: 24,
  },
});

class cadEmpresas extends Component {

  state ={
      nome: '',
      nomeFantasia: '',
      cnpj: '',
      inscEstadual: '',
  }

  handleContent = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  add = () => {
    const empresa = [this.state.nome,this.state.nomeFantasia, this.state.cnpj, this.state.inscEstadual]
    this.props.add(empresa)
    this.setState({
      nome: '',
      nomeFantasia: '',
      cnpj: '',
      inscEstadual: '',
    })
    this.props.handleClose()
  }

  render() {
    const { classes } = this.props
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >

        <DialogTitle>Cadatrar nova empresa</DialogTitle>

        <DialogContent>
          <Grid style={{ marginBottom: 10, marginTop: 10 }} container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField

                id="codigo"
                name="codigo"
                label="Código"
                fullWidth
                autoComplete="fname"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                id="data"
                name="data"
                label="Data"
                fullWidth
                autoComplete="lname"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                id="nome"
                name="nome"
                value={this.state.nome}
                onChange={this.handleContent}
                label="Nome"
                fullWidth
                autoComplete="billing address-line1"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="nomeFantasia"
                name="nomeFantasia"
                label="Nome Fantasia"
                value={this.state.nomeFantasia}
                onChange={this.handleContent}
                fullWidth
                autoComplete="billing address-line2"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                id="contato"
                name="contato"
                label="Contato"
                fullWidth
                autoComplete="billing address-level2"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="email" name="email" label="E-mail" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                id="cpnj"
                name="cnpj"
                label="CNPJ"
                value={this.state.cnpj}
                onChange={this.handleContent}
                fullWidth
                autoComplete="billing postal-code"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                id="inscEstadual"
                name="inscEstadual"
                value={this.state.inscEstadual}
                onChange={this.handleContent}
                label="Insc. Estadual"
                fullWidth
                autoComplete="billing country"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="email" name="email" label="E-mail" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                id="cpnj"
                name="cnpj"
                label="CNPJ"
                fullWidth
                autoComplete="billing postal-code"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                id="inscEstadual"
                name="inscEstadual"
                label="Insc. Estadual"
                fullWidth
                autoComplete="billing country"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={this.props.handleClose}>Cancelar</Button>
          <Button
            variant='contained'
            color='primary'
            style={{ color: '#fff' }}
            onClick={this.add}
          >Adicionar</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

cadEmpresas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(cadEmpresas)