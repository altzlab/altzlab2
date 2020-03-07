import React from 'react';
import ShowListButton from "./ShowListButton";
import Picture from "../TopMain/Picture/indexc";


class Option extends React.Component {

    getCurrentPic = () => {
        let currPicIndex = this.props.state.currentPic;
        if(currPicIndex >  this.props.state.userData.pictures.length - 1){
            return  this.props.state.userData.pictures[currPicIndex - 1];
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
        setTimeout(() => this.props.updateState(newState), 600);
    };

    onClick = () => {
        let newState = {...this.props.state};
        let currPic = this.getCurrentPic();
        let currPicIndex = this.props.state.currentPic;

        if(currPicIndex < this.props.state.userData.pictures.length){
            newState.userData.pictures[currPicIndex].selected_option = this.props.num;
            this.props.updateState(newState);
            this.incrementCurrPicIndex();
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