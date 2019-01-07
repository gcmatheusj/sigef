import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography, Paper, Button, Divider } from '@material-ui/core';
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
            <Grid container justify="center">
                <Paper className={classes.root}>
                    <Typography className={classes.title} variant="subtitle1">Cadastro das Empresas</Typography>
                    
                    <Grid container justify="flex-end">
                        <Button className={classes.btnLocalizar} variant='contained' color='primary'>
                            <Search className={classes.icon} />
                            Localizar
                        </Button>
                    </Grid>
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
                    <Divider />
                    <Grid container justify='space-between'>
                        <Grid>
                            <Button className={classes.btn} size="small" variant='contained' color='primary'>
                                <Add className={classes.icon} />
                                Novo
                            </Button>
                            <Button className={classes.btn} size="small" variant='contained' color='primary'>
                                <Save className={classes.icon} />
                                Salvar
                            </Button>
                        </Grid>
                        <Button className={[classes.btnRemover]} size="small" variant='contained'>
                            <Delete className={classes.icon} />
                            Remover
                        </Button>
                    </Grid>
                </Paper>
            </Grid>
        </Header>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)