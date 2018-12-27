export interface ISchema {
    type: string,
    properties?: {[k: string]: ISchema},
}

interface IEditorProps {
    schema: ISchema,
    label?: string,
};

export interface IEditorState {

};


export default IEditorProps;
