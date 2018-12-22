import * as React from 'react'

import Text from './editors/Text';

const schema = {
    type: "object",
    properties: {
      name: {
          type: "string"
      }
    },
};

export default class Main extends React.Component{
    render() {
        return <Text/>;
    }
}