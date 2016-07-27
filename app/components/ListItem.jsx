import React from 'react';

const ListItem = ({chapter, name, serieId, season, viewed, onChange}) => {
    return (
            <li className="" >
                <input type="checkbox" data-id={serieId} checked={viewed} onChange={onChange} value="t"/>
                <span>{season} × {chapter} - {name}</span>
            </li>
        );
}

ListItem.propTypes = {
        chapter: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        serieId: React.PropTypes.string,
        season: React.PropTypes.string,
        viewed: React.PropTypes.bool,
        onChange: React.PropTypes.func.isRequired
};

export default ListItem;
