import React from 'react';
import client from './utils/MovieDBClient';

window.client = client;

class Hello extends React.Component {
  componentDidMount() {
    client.get('genre/28/movies');
  }

  
  render() {
    return <h1 id="asd">Hello 2</h1>
  }
}

export default Hello;
