import React, { Component } from 'react';

// Parent Component
class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h1>Hello world from react!</h1>
                {this.props.greet}
            </div>
        );
    }
}

HelloWorld.propTypes = {
    greeter: React.PropTypes.element
};


HelloWorld.defaultProps = {

};

export default HelloWorld;
