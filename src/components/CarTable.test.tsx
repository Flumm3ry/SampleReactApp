import React from 'react';
import { shallow } from 'enzyme';
import CarTable from './CarTable';
import { data } from './../data/sampleData';

describe('Car table', () => {
    it('Contains the right number of rows', () => {
        const testTable = shallow(<CarTable data={data} deleteButtonsDisabled={false}/>);
        const rows = testTable.find('CarTableRow');
        expect(rows.length).toEqual(data.length);
    })
});