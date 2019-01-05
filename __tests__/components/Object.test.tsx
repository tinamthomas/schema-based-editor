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

const details = {
    name: 'Someone',
    address: 'Somewhere',
};

describe('Object Edtior', () => {
   let wrapper;
   let onChangeMock = jest.fn();

   beforeEach(() => {
       wrapper = shallow(<ObjectEditor schema={schema} onChange={onChangeMock}/>);
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
       wrapper.setProps({value: details});

       const editors = wrapper.find('DummyComponent');
       expect(editors.at(0).props().value).toBe(details.name);
       expect(editors.at(1).props().value).toBe(details.address);
   });

   it('should pass onChange to each key', () => {
       wrapper.setProps({value: details});
       wrapper.find('DummyComponent').at(0).props().onChange('newValue');

       expect(onChangeMock).toBeCalledWith({name:'newValue', address:'Somewhere'});
   });
});