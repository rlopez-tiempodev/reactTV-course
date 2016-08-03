import React from 'react';
import GenreList from '../genres/GenreList';
import TVStore from '../../stores/TVStore';
import TVActions from '../../actions/TVActions';

class Home extends React.Component {
    constructor(){
        super(...arguments);
        TVActions.getGenres();
        this.state = TVStore.getState();
    }

    componentDidMount() {
        this.storeSubscription = TVStore.addListener(data => this.handleStoreChange(data));
    }

    componentWillUnmount() {
        this.storeSubscription.remove();
    }

    handleStoreChange(){
        this.setState(TVStore.getState());
    }
    
    render() {
        // console.log(this.state.genres);
        return (
            <div>
                <h3>HomePage</h3>
                <GenreList genres={this.state.genres} />
            </div>
        );
    }
}

export default Home;
