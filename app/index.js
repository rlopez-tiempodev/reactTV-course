import React from 'react';
import ReactDOM from 'react-dom';


import HelloWorld from './helloworld';
import {TVList} from './lists';

//import {TVList, ListItem} from './lists'
//import series from './series';

ReactDOM.render(<HelloWorld greet={<TVList/>}/>, document.getElementById('app'));
