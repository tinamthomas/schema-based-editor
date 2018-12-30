import * as React from 'react';
import { shallow } from 'enzyme';

import TextEditor from "../../src/components/editors/Text";

describe('Text Editor', () => {
    let wrapper;
    const onChangeMock = {};
    beforeEach(() => {
        wrapper = shallow(<TextEditor label='some text' onChange={onChangeMock}/>);
    });

    it('should pass appropriate props to Input', () => {
        const inputComponentProps = wrapper.find('Input').props();
        expect(inputComponentProps.label).toBe('some text');
        expect(inputComponentProps.label).toBe('some text');
    });

    it('should handle on change', () => {
        expect(wrapper.find('Input').props().onChange).toBe(onChangeMock);
    });
});
