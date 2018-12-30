import * as React from 'react';
import { shallow } from 'enzyme';

import TextEditor from "../../src/components/editors/Text";

describe('Text Editor', () => {
    it('should display input with label', () => {
        const wrapper = shallow(<TextEditor label='some text'/>);
        expect(wrapper.find('Input').props().label).toBe('some text');
    });
});
