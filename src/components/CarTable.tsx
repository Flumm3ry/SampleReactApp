import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles'

interface CarDetails {
    id: number,
    car_make: string,
    car_model: string,
    year: number,
    color: string,
    email_address: string,
}

interface TableProps {
    data: CarDetails[],
}

const useStyles = makeStyles({
    tableContainer: {
        width: "75%",
    },
});

const CarTable = (props: TableProps): JSX.Element => {
    const classes = useStyles();
    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Car Make</TableCell>
                        <TableCell align="right">Car Model</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Colour</TableCell>
                        <TableCell align="right">Email address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell align="right">{row.car_make}</TableCell>
                            <TableCell align="right">{row.car_model}</TableCell>
                            <TableCell align="right">{row.year}</TableCell>
                            <TableCell align="right">{row.color}</TableCell>
                            <TableCell align="right">{row.email_address}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CarTable;