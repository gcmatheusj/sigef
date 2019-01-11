import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';

import Header from '../Header';
import CustomPaginationActionsTable from './Tables'

import styles from './styles';

const Empresas = props => {
  const { classes } = props
  return (
    <Header title="Exibindo Empresas">
      <Button variant='contained' color='primary' className={classes.button}><Add />Adicionar empresa</Button>
      <CustomPaginationActionsTable />
    </Header>
  )
}

Empresas.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Empresas)