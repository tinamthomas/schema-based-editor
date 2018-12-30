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
   it('should find editor for each property in object', () => {
       const wrapper = shallow(<ObjectEditor schema={schema}/>);

       const editors = wrapper.find('DummyComponent');

       expect(editors.at(0).props().label).toBe('name');
       expect(editors.at(1).props().label).toBe('address');

       expect(editors.at(0).props().schema).toBe(nameDefinition);
       expect(editors.at(1).props().schema).toBe(addressDefinition);

   });
});