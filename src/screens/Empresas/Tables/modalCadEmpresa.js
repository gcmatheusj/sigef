import React  from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
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

  const cadEmpresas = props => {
      const { classes } = props

      return (
          <Grid container justify="center">
            <Modal className={classes.root}>
                <Grid style={{marginBottom: 20}} container spacing={24}>
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
                            
                            id="razaoSocial"
                            name="razaoSocial"
                            label="Razão Social"
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
                        <TextField id="email" name="email" label="E-mail" fullWidth variant="outlined"/>
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
                            
                            id="razaoSocial"
                            name="razaoSocial"
                            label="Razão Social"
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
                        <TextField id="email" name="email" label="E-mail" fullWidth variant="outlined"/>
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
            </Modal>
          </Grid>
      )
  }

  cadEmpresas.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(cadEmpresas)