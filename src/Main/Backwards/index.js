import React from 'react';
import backPic from './arrow.png';

class Backwards extends React.Component {

    onClick = () => {
        let newState = {...this.props.state};
        if (newState.currentPic > 0) {
            newState.currentPic -= 1;
            newState.userData.pictures[newState.currentPic].selected_option = 0;
            this.props.updateState(newState);
        }
    };

    render() {
        return (
            <div onClick={() => this.onClick()}>
                <img src={backPic} className="backwards"/>
            </div>
        );
    }
}

export default Backwards;