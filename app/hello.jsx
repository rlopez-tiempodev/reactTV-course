import React from 'react';
import {get} from './utils/api';

class Hello extends React.Component {
    componentDidMount() {
        let response = await get('genre/28/movies');
        let json = await response.json() ;
        console.log( json );
    }

    render() {
        return <h1>Hello 2</h1>
    }
}

export default Hello;
