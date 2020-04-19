import React from 'react';
import ShowListButton from "./ShowListButton";

class Option extends React.Component {

    getCurrentPic = () => {
        let currPicIndex = this.props.state.currentPic;
        if (currPicIndex > this.props.state.userData.pictures.length - 1) {
            return this.props.state.userData.pictures[currPicIndex - 1];
        }
        let currPic = this.props.state.userData.pictures[currPicIndex];
        if (currPic.selected_option !== 0) {
            this.incrementCurrPicIndex();
        }
        return currPic;
    };

    incrementCurrPicIndex = () => {
        let newState = {...this.props.state};
        newState.currentPic += 1;
        this.props.updateState(newState);
    };

    onClick = () => {
        let newState = {...this.props.state};
        this.getCurrentPic();
        let currPicIndex = this.props.state.currentPic;

        if (currPicIndex < this.props.state.userData.pictures.length) {
            newState.userData.pictures[currPicIndex].selected_option = this.props.num;
            this.props.updateState(newState);
        }
    };

    render() {
        return (
            <div onClick={() => this.onClick()}
                 className={this.getCurrentPic().selected_option === this.props.num ? "selected_option" : "option"}>
                <ShowListButton
                    state={this.props.state}
                    updateState={this.props.updateState}
                    num={this.props.num}
                />
                <div className="optionText">{this.props.text}</div>
            </div>
        );
    }
}

export default Option;