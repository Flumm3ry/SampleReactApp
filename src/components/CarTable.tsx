import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles'
import CarDetails from '../interfaces/CarDetails';
import CarTableRow from './CarTableRow';

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

    const [cars, setCars] = useState<CarDetails[]>(props.data);

    const deleteRow = (id: number): void => (
        setCars(cars.filter(c => c.id !== id))
    );

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
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cars.map(car => (
                        <CarTableRow key={car.id} car={car} onClick={deleteRow}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CarTable;