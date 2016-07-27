import React from 'react';

import {TVList, ListItem} from '../lists'
import {Link} from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>
          <h1>TVList Page Container</h1>
          <TVList />
      </div>
    )
  }
})

export default App;
