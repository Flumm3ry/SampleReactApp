import * as React from 'react';
import CarDetails from '../interfaces/CarDetails';
import { data } from '../data/sampleData';

export interface AppContextInterface {
    availableCars: CarDetails[],
    deletedCars: CarDetails[],
    updateCars: (deletedCar: CarDetails) => void,
};

interface AppContextProviderProps {
    children: React.ReactNode;
}

export const AppContext = React.createContext<AppContextInterface>({availableCars: [], deletedCars: [], updateCars: (c: CarDetails) => {}});

export const AppContextProvider = (props: AppContextProviderProps) => {

    const updateCars = (deletedCar: CarDetails) => {
        appContext.deletedCars.push(deletedCar);
        appContext.availableCars.splice(appContext.availableCars.indexOf(deletedCar), 1);
        setAppContext({
            availableCars: appContext.availableCars,
            deletedCars: appContext.deletedCars,
            updateCars: appContext.updateCars,
        });
    }

    const [appContext, setAppContext] = React.useState<AppContextInterface>({availableCars: data, deletedCars: [], updateCars: updateCars});

    return (
        <AppContext.Provider value={appContext}>
            {props.children}
        </AppContext.Provider>
    );
};
