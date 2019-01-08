import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Header from '../Header';
import styles from './styles';

const Empresas = props => {
    const { classes } = props
    return (
        <Header title="Mostrando Todas Empresas">
            
        </Header>
    )
}

Empresas.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Empresas)