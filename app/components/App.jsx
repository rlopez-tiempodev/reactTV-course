import React from 'react';
import {Link} from 'react-router'

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/hello">Hello</Link></li>
                    <li><Link to="/tvlist">tvlist</Link></li>
                </ul>
                {/*
                    next we replace `<Child>` with `this.props.children`
                    the router will figure out the children for us
                  */}
                    {this.props.children}
            </div>
        )
    }
})

    export default App;
