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
    deleteButtonsDisabled: boolean,
    onDataChange: (deletedCar: CarDetails) => void | null,
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
            {console.log("Rerendered" + props.deleteButtonsDisabled)}
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Car Make</TableCell>
                        <TableCell align="right">Car Model</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Colour</TableCell>
                        <TableCell align="right">Email address</TableCell>
                        {props.deleteButtonsDisabled ? null : <TableCell></TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map(car => (
                        <CarTableRow key={car.id} car={car} onDataChange={props.onDataChange} buttonDisabled={props.deleteButtonsDisabled}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CarTable;