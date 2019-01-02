import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography, Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Add from '@material-ui/icons/Add';
import Search from '@material-ui/icons/Search';
import Save from '@material-ui/icons/Save';
import Delete from '@material-ui/icons/Delete';
import Cancel from '@material-ui/icons/Cancel';

import Header from '../Header';
import styles from './styles';

const Home = props => {
    const { classes } = props
    return (
        <Header title="SIGEF">
            <Paper className={classes.root}>
                <Typography className={classes.title} variant="subtitle1">Cadastro das Empresas</Typography>
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
                        <TextField id="email" name="email" label="E-mail" fullWidth />
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
                </Grid>
                <Grid container justify="flex-start">
                    <Button className={classes.btn} variant='contained' color='primary'>
                        <Add />
                        Novo
                        </Button>
                    <Button className={classes.btn} variant='contained' color='primary'>
                        <Search />
                        Localizar
                    </Button>
                    <Button className={classes.btn} variant='contained' color='primary'>
                        <Save />
                        Salvar
                    </Button>
                    <Button className={classes.btn} variant='contained' color='primary'>
                        <Delete />
                        Remover
                    </Button>
                    <Button className={classes.btn} variant='contained' color='primary'>
                        <Cancel />
                        Cancelar
                    </Button>
                </Grid>
            </Paper>
        </Header>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)