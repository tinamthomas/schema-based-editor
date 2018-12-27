import * as React from "react";
import editorMap from "./editors/editorMap";
import IEditorProps from "./editors/IEditor";

export default class Editor extends React.Component<IEditorProps>{
    render() {
        const EditorComponent = editorMap(this.props.schema.type);
        return <EditorComponent schema={this.props.schema}/>;
    }
}