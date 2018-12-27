import * as React from 'react'

import Editor from './Editor';

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

export default class Main extends React.Component{
    render() {
        return <Editor schema={schema}/>;
    }
}