import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { data } from '../data/sampleData';
import CarTable from './CarTable';
import CarDetails from '../interfaces/CarDetails';

const CarTablesContainer = (): JSX.Element => {
    const [availableCars, setAvailableCars] = useState<CarDetails[]>(data);
    const [deletedCars, setDeletedCars] = useState<CarDetails[]>([]);

    const onChange = (deletedCar: CarDetails): void => {
        setAvailableCars(availableCars.filter(c => c.id !== deletedCar.id));
        deletedCars.push(deletedCar);
        setDeletedCars(deletedCars);
    };

    return (
        <>
            <Route exact path="/deleted">
                <div className="margin">
                    <h1>Deleted Cars</h1>
                    <CarTable
                        data={deletedCars}
                        deleteButtonsDisabled={true}
                        onDataChange={onChange}
                    />
                </div>
            </Route>
            <Route exact path="/">
                <div className="margin">
                    <h1>Available Cars</h1>
                    <CarTable
                        data={availableCars}
                        deleteButtonsDisabled={false}
                        onDataChange={onChange}
                    />
                </div>
            </Route>
        </>
    );
};

export default CarTablesContainer;