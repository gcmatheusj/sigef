import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import Header from '../Header';
import CustomPaginationActionsTable from './Tables'
import Modal from './Tables/ModalCadEmpresa'

import styles from './styles';

const empresas = [
  ["FUNERÁRIA 1", "FUNERÁRIA 1", "0000000000000000", 'ISENTO', ""],
  ["FUNERÁRIA 2", "FUNERÁRIA 2", "0000000000000000", 'ISENTO', ""],
  ["FUNERÁRIA 3", "FUNERÁRIA 3", "0000000000000000", 'ISENTO', ""],
  ["FUNERÁRIA 4", "FUNERÁRIA 4", "0000000000000000", 'ISENTO', ""],
  ["FUNERÁRIA 5", "FUNERÁRIA 5", "0000000000000000", 'ISENTO', ""],
  ["FUNERÁRIA 6", "FUNERÁRIA 6", "0000000000000000", 'ISENTO', ""],
  ["FUNERÁRIA 7", "FUNERÁRIA 7", "0000000000000000", 'ISENTO', ""],
  ["FUNERÁRIA 8", "FUNERÁRIA 8", "0000000000000000", 'ISENTO', ""],
  ["FUNERÁRIA 9", "FUNERÁRIA 9", "0000000000000000", 'ISENTO', ""],
  ["FUNERÁRIA 10", "FUNERÁRIA 10", "0000000000000000", 'ISENTO', ""],
];
class Empresas extends Component {

  state = {
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

  add = (empresa) => {
    empresas.push(empresa)
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
        <CustomPaginationActionsTable empresas={empresas}/>
        <Modal open={this.state.openModal} handleClose={this.handleClose} add={this.add} />
      </Header>
    )
  }
}

Empresas.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Empresas)