import React from 'react';
import { mount } from 'enzyme';
import CarTable from '../components/CarTable';
import { data } from '../data/sampleData';
import CarTableRow from '../components/CarTableRow';
import { ThemeProvider } from '@material-ui/core';
import Theme from '../themes/Theme';

const wrapper = mount(
    <ThemeProvider theme={Theme}>
        <CarTable
            data={data}
            deleteButtonsDisabled={false}
            onDataChange={null}
        />
    </ThemeProvider>
)

describe('Car table', () => {
    it('Contains the right number of rows', () => {
        const rows = wrapper.find(CarTableRow);
        expect(rows.length).toEqual(data.length);
    });

    it('Contains the data provided', () => {
        expect(
            wrapper.contains(data[0].carModel)
            &&
            wrapper.contains(data[data.length-1].carModel)
        ).toBe(true);
    });
});