import * as React from 'react';

import IEditorProps, {IEditorState, ISchema} from "./IEditor";
import editorMap from './editorMap';

const schema = {
    type: "object",
    properties: {
        name: {
            type: "string"
        }
    },
};


export default class ObjectEditor extends React.Component<IEditorProps, IEditorState>{
    render() {
        const properties = this.props.schema.properties;
        const propertyKeys: any = Object.keys(properties);
        return <div>
            {propertyKeys.map((property: string) => {
                const EditorComponent = editorMap(properties[property].type);
                return <EditorComponent schema={properties[property]} label={property}/>;
            })}
        </div>
    }
}