import React, { Component } from 'react';
import series from './series'
import _ from 'lodash';
import ListItem from './ListItem';

export const TVList = React.createClass({
    
    render(){
        const listItems = this.state.series.map( (item,i) => {
            return (
                <ListItem {...item} viewed={item.viewed} key={item.serieId} onChange={this.onChange}/>
            );
        });

        
        return (
            <div>
                <h3>TV List</h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    },

    getInitialState() {
        return {
            series: series.slice()
        }
    },

    onChange(event) {
        //event.stopPropagation(); // checkboxes  gets pretty weird
        const id = event.target.getAttribute('data-id');
        const index = _.findIndex( this.state.series, {'serieId':id});
        //const index = 0;
        let newSeries = this.state.series.slice();
        newSeries[index].viewed = event.target.checked;
        this.setState({
            series: newSeries,
        });
        //return false;
    },
});
