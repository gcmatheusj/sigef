import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import Header from '../Header';
<<<<<<< HEAD
import CustomPaginationActionsTable from './Tables'
import Modal from './Tables/ModalCadEmpresa'
=======
import CustomPaginationActionsTable from './Tables';
>>>>>>> 284329b34baca2561ebf8dbdb1084b033522b6df

import styles from './styles';

class Empresas extends Component {

  state ={
    openModal: false
  }

  handleOpen = () => {
    this.setState({
      openModal: true
    })
  }

  handleClose = () => {
    this.setState({
      openModal: false
    })
  }

  render() {
    const { classes } = this.props
    return (
      <Header title="Exibindo Empresas">
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={this.handleOpen}
        ><Add />Adicionar empresa</Button>
        <CustomPaginationActionsTable />
        <Modal open={this.state.openModal} handleClose={this.handleClose}/>
      </Header>
    )
  }
}

Empresas.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Empresas)