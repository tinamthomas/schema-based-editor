import * as React from 'react';
import {Input} from 'semantic-ui-react';
import IEditorProps, {IEditorState} from "./IEditor";


export default class TextEditor extends React.Component<IEditorProps, IEditorState>{
    render() {
        return <div style={{'margin': '10px'}}>
                <Input
                    label={this.props.label}
                    onChange={(event) => this.props.onChange(event.target.value)}
                    value={this.props.value}
                />
            </div>;
    }
}