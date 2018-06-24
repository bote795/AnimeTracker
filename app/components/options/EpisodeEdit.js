import React, { Component } from 'react'

export default class EpisodeEdit extends Component {
    add = (e) => {
        e.preventDefault();
        const { id, edit } = this.props;
        const action = {
            type: 'add',
            id,
            value: 1
        };
        return edit(action);
    }
    subtract = (e) => {
        e.preventDefault();
        const { id, edit } = this.props;
        const action = {
            type: 'add',
            id,
            value: -1
        };

        return this.props.edit(action);
    }
    render() {
        const { episode } = this.props;
        const spanStyle={minWidth: '30px', display: 'inline-block', textAlign: 'center'};
        return (
            <div>
                <button onClick={this.subtract}>-</button>
                <span style={spanStyle}>{episode}</span>
                <button onClick={this.add}>+</button>
            </div>
        );
    }
}
