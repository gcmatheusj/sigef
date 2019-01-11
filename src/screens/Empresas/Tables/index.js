import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


export default class NovaTabela extends Component {
  getMuiTheme = () => createMuiTheme({
    overrides: {
      root: {
        root: {
          backgroundColor: "#FF0000"
        }
      }
    }
  })

  render() {
    const columns = ["Nome", "Nome Fantasia", "CNPJ", "Insc. Estadual", "Actions"];

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
    };

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          style={{ marginTop: 24 }}
          title={'Lista de Empresas'}
          data={this.props.empresas}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    );
  }
}
