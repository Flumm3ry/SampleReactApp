import React from 'react';
import { shallow } from 'enzyme';
import CarTable from '../components/CarTable';
import { data } from '../data/sampleData';
import CarTableRow from '../components/CarTableRow';

describe('Car table', () => {
    it('Contains the right number of rows', () => {
        const testTable = shallow(<CarTable data={data} deleteButtonsDisabled={false} onDataChange={null}/>);
        const rows = testTable.find(CarTableRow);
        expect(rows.length).toEqual(data.length);
    });
});