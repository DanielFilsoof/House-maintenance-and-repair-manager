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

function createData(
    id: number,
    name: any,
    openTasks: number,
    nextDeadline: Date
) {
    return { name, openTasks: openTasks, nextDeadline: nextDeadline };
}

const rows = [
    createData(1, <Link to={`/house/${1}`}>Beder huset</Link>, 21, new Date()),
    createData(2, <Link to={`/house/${2}`}>Sommerhuset</Link>, 3, new Date(2024, 11, 28)),
    createData(3, <Link to={`/house/${3}`}>Kolonihaven</Link>, 12, new Date())
];

export default function MUITable() {
    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Names</TableCell>
                        <TableCell align="right">Unresolved tasks</TableCell>
                        <TableCell align="right">Next deadline</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name.props.children}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.openTasks}</TableCell>
                            <TableCell align="right">{`${row.nextDeadline.getFullYear()}/${row.nextDeadline.getMonth()}/${row.nextDeadline.getDay()}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
