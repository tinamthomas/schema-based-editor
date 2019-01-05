import * as React from 'react';
import { shallow } from 'enzyme';

import ArrayEditor from "../../src/components/editors/Array";

jest.mock('../../src/components/editors/editorMap', () => ({default: () => 'DummyComponent'}));

const schema = {
    type: 'array',
    items: {
        type: 'string'
    }
};

const value = ['a','b','c'];

describe('Array Editor', () => {
    let onChangeMock;
    let wrapper;

    beforeEach(() => {
       onChangeMock = jest.fn();
       wrapper = shallow(
            <ArrayEditor
                schema={schema}
                value={value}
                onChange={onChangeMock}
            />);
    });

    it('should load editors for each entry with correct value', () => {
        const editors = wrapper.find('DummyComponent');
        expect(editors.length).toBe(value.length);

        expect(editors.at(0).props().value).toBe('a');
        expect(editors.at(1).props().value).toBe('b');
        expect(editors.at(2).props().value).toBe('c');
    });

    it('should load editors with schema', () => {
        const editors = wrapper.find('DummyComponent');

        expect(editors.at(0).props().schema).toBe(schema.items);
        expect(editors.at(1).props().schema).toBe(schema.items);
        expect(editors.at(2).props().schema).toBe(schema.items);
    });

    it('should handle on Change', () => {
        const editorOne = wrapper.find('DummyComponent').at(0);
        editorOne.props().onChange('a-dash');
        expect(onChangeMock).toHaveBeenCalledWith(['a-dash','b','c']);
    });
});