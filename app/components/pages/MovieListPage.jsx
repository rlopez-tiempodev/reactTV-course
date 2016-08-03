import React from 'react';

import {TVList, ListItem} from '../lists'
import {Link} from 'react-router'
import TVStore from '../../stores/TVStore';
import TVActions from '../../actions/TVActions';


class MovieListPage  extends React.Component {
    constructor(){
        super(...arguments);
        TVActions.getMovies(this.props.params.id);
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
        let listItems;
        if( this.state.movies.length > 0) {
            listItems = this.state.movies.map( (item,i) => {
                return (
                    <li key={item.id}>{item.title} > <Link to={'/movie/' + item.id}>View Movies</Link></li>
                );
            });
        }
        return (
            <div>
                <h1>Movie List {this.state.genreName}</h1>
                {listItems}
            </div>
        )
    }
}

export default MovieListPage;
