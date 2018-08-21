import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);

        this.renderAction = this.renderAction.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    // displays a - anchor tag if the isRemoval property is true,
    // and a + anchor tag if the isRemoval property is false
    renderAction() {
        return (
            this.props.isRemoval ? <a className="Track-action" onClick={this.addTrack}>+</a> : <a className="Track-action" onClick={this.removeTrack}>-</a>
        );
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    render() {
        return (
            <div className="Track">
              <div className="Track-information">
                <h3>track name</h3>
                <p>track artist | track album</p>
              </div>
              {this.renderAction()}
            </div>
        );
    }
}

export default Track;
