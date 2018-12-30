import { shallow } from 'enzyme';
import ObjectEditor from "../../src/components/editors/Object";
import * as React from 'react';

jest.mock('../../src/components/editors/editorMap', () => ({default: () => 'DummyComponent'}));

const nameDefinition = {
    type: 'string'
};

const addressDefinition = {
    type: 'string'
};
const schema = {
    type: 'object',
    properties: {
        name: nameDefinition,
        address:addressDefinition,
    }
};

describe('Object Edtior', () => {
   let wrapper;
   beforeEach(() => {
       wrapper = shallow(<ObjectEditor schema={schema}/>);
   });

   it('should find editor for each property in object', () => {
       const editors = wrapper.find('DummyComponent');

       expect(editors.at(0).props().label).toBe('name');
       expect(editors.at(1).props().label).toBe('address');

       expect(editors.at(0).props().schema).toBe(nameDefinition);
       expect(editors.at(1).props().schema).toBe(addressDefinition);

   });

    it('should set empty value if not defined', () => {
        const editors = wrapper.find('DummyComponent');

        expect(editors.at(0).props().value).toBe('');
        expect(editors.at(1).props().value).toBe('');
    });

   it('should pass appropriate values to each key in object', () => {
       const details = {
           name: 'Someone',
           address: 'Somewhere',
       };
       wrapper.setProps({value: details});

       const editors = wrapper.find('DummyComponent');
       expect(editors.at(0).props().value).toBe(details.name);
       expect(editors.at(1).props().value).toBe(details.address);
   });
});