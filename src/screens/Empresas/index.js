import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Header from '../Header';
import CustomPaginationActionsTable from './Tables'

import styles from './styles';

const Empresas = props => {
    const { classes } = props
    return (
        <Header title="Exibindo Empresas">
            <CustomPaginationActionsTable />
        </Header>
    )
}

Empresas.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Empresas)