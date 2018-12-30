export interface ISchema {
    type: string,
    properties?: {[k: string]: ISchema},
}

interface IEditorProps {
    schema: ISchema,
    label?: string,
    onChange?: () => void;
    value?: any;
};

export interface IEditorState {

};


export default IEditorProps;
