import React from 'react';
import showListIcon from "./showGroup.jpeg";

class ShowListButton extends React.Component {

    onClick = (e) => {
        e.stopPropagation();
        let newState = this.props.state;   ///change to immutable
        newState.currentGroup = this.props.num;
        this.props.updateState(newState);
    };

    render() {
        return (
            <div className="showListButton" onClick={(e) => this.onClick(e)}>
                <img
                    src={showListIcon} height="16" width="15" id="showListIcon"
                />
            </div>
        );
    }
}

export default ShowListButton;