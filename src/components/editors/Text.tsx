import * as React from 'react';
import {Input} from 'semantic-ui-react';
import IEditorProps, {IEditorState} from "./IEditor";


export default class TextEditor extends React.Component<IEditorProps, IEditorState>{
    render() {
        return <div>
            <Input label={this.props.label}/>
        </div>
    }
}