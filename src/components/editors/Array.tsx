import * as React from 'react';
import * as _ from 'lodash';
import {Label} from 'semantic-ui-react';

import IEditorProps, {IEditorState} from "./IEditor";
import editorMap from './editorMap';

export default class ArrayEditor extends React.Component<IEditorProps, IEditorState>{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(index, value) {
        const newItems = [..._.slice(this.props.value, 0, index), value, ..._.slice(this.props.value, index + 1)];
        this.props.onChange(newItems);
    }

    render() {
        const itemsSchema = this.props.schema.items;
        const EditorComponent = editorMap(itemsSchema.type);

        return <div>
            <Label>Array</Label>
            {this.props.value.map((value, index) => {
                return <EditorComponent
                    schema={itemsSchema}
                    value={value}
                    label=''
                    onChange={(value) => this.handleChange(index,value)}
                />;
            })}
        </div>
    }
}