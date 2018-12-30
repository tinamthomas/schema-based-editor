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

export default class Main extends React.Component{
    render() {
        return <Grid columns={2} style={{'margin-top': '20px'}}>
            <Grid.Row>
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column width={14}>
                    <Editor schema={schema} value={initialValue}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>;
    }
}