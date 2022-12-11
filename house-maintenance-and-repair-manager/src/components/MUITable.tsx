import classes from './mui-table.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";
import login from "../pages/Login";

export default function MUITable(props: ITable) {
    const {titles, rows} = props;

    const TableHeader =
        <TableHead>
            <TableRow>
                {titles.map((title) => {
                    return (<TableCell key={`title-${title}`}>{title}</TableCell>)
                })
                }
            </TableRow>
        </TableHead>;

    const TableRows =
        rows.map((row) => {
                return (
                    <TableRow key={row.columns.toString()}>
                        {row.columns.map((column) => {
                            return (
                                <TableCell key={column}>
                                    {column}
                                </TableCell>
                            )
                        })}
                    </TableRow>)
            })
        ;

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table aria-label="table over the user's managed houses">
                {TableHeader}
                <TableBody>
                    {TableRows}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export interface ITable {
    titles: string[],
    rows: ITableRow[]
}

export interface ITableRow {
    id: string | number,
    columns: any[];
}
