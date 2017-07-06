import React from 'react';
import ReactSimpleRadioButton from './../src/react-simple-radio-button';
import {shallow} from 'enzyme';


describe('The main app', () => {
    it('the app should have text', () => {
        const comp  = shallow(<ReactSimpleRadioButton/>);
        expect(comp.contains(<div></div>)).toBe(true);
    })
})