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
            ["EMPRESA 1", "EMPRESA 1", "0000000000000000", 'ISENTO', ""],
            ["EMPRESA 2", "EMPRESA 2", "0000000000000000", 'ISENTO', ""],
            ["EMPRESA 3", "EMPRESA 3", "0000000000000000", 'ISENTO', ""],
            ["EMPRESA 4", "EMPRESA 4", "0000000000000000", 'ISENTO', ""],
            ["EMPRESA 5", "EMPRESA 5", "0000000000000000", 'ISENTO', ""],
            ["EMPRESA 6", "EMPRESA 6", "0000000000000000", 'ISENTO', ""],
            ["EMPRESA 7", "EMPRESA 7", "0000000000000000", 'ISENTO', ""],
            ["EMPRESA 8", "EMPRESA 8", "0000000000000000", 'ISENTO', ""],
            ["EMPRESA 9", "EMPRESA 9", "0000000000000000", 'ISENTO', ""],
            ["EMPRESA 10", "EMPRESA 10", "0000000000000000", 'ISENTO', ""],
            
        ];

        const options = {
            filterType: "dropdown",
            responsive: "scroll"
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
