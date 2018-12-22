import React from 'react'
import Header from '../Header'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        padding: 20,
        marginTop: 24
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    }
})

const Home = props => {
    const { classes } = props
    return (
        <Header title="SIGEF">
            <Paper className={classes.root}>
                <Typography className={classes.title} variant="subtitle1">Cadastro das Empresas</Typography>
                <Typography variant="h6" gutterBottom>
                    Shipping address
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="codigo"
                            name="codigo"
                            label="Código"
                            fullWidth
                            autoComplete="fname"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="data"
                            name="data"
                            label="Data"
                            fullWidth
                            autoComplete="lname"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="razaoSocial"
                            name="razaoSocial"
                            label="Razão Social"
                            fullWidth
                            autoComplete="billing address-line1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="nomeFantasia"
                            name="nomeFantasia"
                            label="Nome Fantasia"
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="contato"
                            name="contato"
                            label="Contato"
                            fullWidth
                            autoComplete="billing address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="cpnj"
                            name="cnpj"
                            label="CNPJ"
                            fullWidth
                            autoComplete="billing postal-code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="inscEstadual"
                            name="inscEstadual"
                            label="Insc. Estadual"
                            fullWidth
                            autoComplete="billing country"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Use this address for payment details"
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Header>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)