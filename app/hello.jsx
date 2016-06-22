import React from 'react';
import client from './utils/MovieDBClient';

window.client = client;

class Hello extends React.Component {
  componentDidMount() {
    client.get('genre/28/movies');
  }

  
  render() {
    return (<div>
            <h1 id="asd">Hello darkness my old friend.</h1>
            </div>
           );
  }
}

export default Hello;
