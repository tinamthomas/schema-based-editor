import * as React from 'react'
import {Grid} from 'semantic-ui-react';
import editorMap from './editors/editorMap';

const schema = {
    type: "object",
    properties: {
      firstname: {
          type: "string"
      },
      secondname: {
          type: "string"
      },
      departments: {
          type: "array",
          items: {
              type: 'string'
          }
      }
    },
};

const initialValue = {
    firstname: 'Someone here',
    secondname: 'Someone else',
    departments: ['1','2']
};

interface IMainState {
    value: any;
}

export default class Main extends React.Component<{}, IMainState>{
    constructor(props) {
        super(props);
        this.state = {
            value: initialValue,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
            this.setState({value});
    }

    render() {
        const EditorComponent = editorMap(schema.type);

        return <Grid columns={2} style={{'margin-top': '20px'}}>
            <Grid.Row>
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column width={14}>
                    <EditorComponent
                        schema={schema}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>;
    }
}