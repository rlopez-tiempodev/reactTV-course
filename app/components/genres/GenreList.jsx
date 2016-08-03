import React from 'react';
import {Link} from 'react-router'

class GenreList extends React.Component {

    render() {
        const listItems = this.props.genres.map( (item,i) => {
            return (
                <li key={item.id}>{item.name}> <Link to={'/genre/' + item.id}>View Movies</Link></li>
            );
        });

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default GenreList;
