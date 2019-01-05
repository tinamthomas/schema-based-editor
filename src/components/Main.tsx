import * as React from 'react'
import Editor from './Editor';
import {Grid} from 'semantic-ui-react';

const schema = {
    type: "object",
    properties: {
      firstname: {
          type: "string"
      },
      secondname: {
          type: "string"
      }
    },
};

const initialValue = {
    firstname: 'Someone here',
    secondname: 'Someone else'
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
        return <Grid columns={2} style={{'margin-top': '20px'}}>
            <Grid.Row>
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column width={14}>
                    <Editor
                        schema={schema}
                        value={this.state.value}
                        onChange={(value) => this.handleChange(value)}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>;
    }
}