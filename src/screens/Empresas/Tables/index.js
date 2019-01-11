import React, { Component } from 'react'
import MUIDataTable from 'mui-datatables'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'


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

    const data = [
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

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
    };

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          style={{ marginTop: 24 }}
          title={'Lista de Empresas'}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    );
  }
}
