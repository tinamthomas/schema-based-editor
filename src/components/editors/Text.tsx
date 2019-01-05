import * as React from 'react';
import {Input, Label} from 'semantic-ui-react';
import IEditorProps, {IEditorState} from "./IEditor";


export default class TextEditor extends React.Component<IEditorProps, IEditorState>{
    render() {
        return <div style={{'margin': '10px'}}>
            {this.props.label && <Label>{this.props.label}</Label>}
                <Input
                    onChange={(event) => this.props.onChange(event.target.value)}
                    value={this.props.value}
                />
            </div>;
    }
}