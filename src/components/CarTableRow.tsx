import React from 'react';
import CarDetails from './../interfaces/CarDetails';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

interface CarTableRowProps {
    car: CarDetails,
    onClick: (id: number) => void,
}

const CarTableRow = (props: CarTableRowProps): JSX.Element =>(
    <TableRow>
        <TableCell>{props.car.id}</TableCell>
        <TableCell align="right">{props.car.car_make}</TableCell>
        <TableCell align="right">{props.car.car_model}</TableCell>
        <TableCell align="right">{props.car.year}</TableCell>
        <TableCell align="right">{props.car.color}</TableCell>
        <TableCell align="right">{props.car.email_address}</TableCell>
        <TableCell align="right">
            <Button 
                color="secondary"
                startIcon={<DeleteIcon />}
                variant="outlined"
                onClick={() => props.onClick(props.car.id)}
            >
                Delete
            </Button>
        </TableCell>
    </TableRow>
);

export default CarTableRow;