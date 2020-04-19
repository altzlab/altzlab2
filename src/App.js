import React, {Component} from 'react';
import './style.css';
import Main from "./Main";
import RightMenu from "./RightMenu";
import endView from './EndView/endView.jpeg'
import BeforeStart from "./BeforeStart";
import Init from "./Init";

class App extends React.Component {

    state = {
        screen: "Init", // Init, BeforeStart, Main, EndOfPics, Submitted
        currentPic: 0,
        currentGroup: -1,
        userData: {}
    };

    updateState = (newState) => {
        this.setState(newState);
    };

    render() {
        return (
            <div className="appContainer">
                {this.state.screen === "Init" && <Init updateState={this.updateState}/>}
                {this.state.screen === "BeforeStart" &&
                <BeforeStart state={this.state} updateState={this.updateState}/>}
                {(this.state.screen === "Main" || this.state.screen === "BeforeStart") &&
                <div className="app">
                    <Main state={this.state} updateState={this.updateState}/>
                    <RightMenu state={this.state} updateState={this.updateState}/>
                </div>}
                {this.state.screen === "Submitted" && <img src={endView} width="100%" height="950px"/>}
            </div>
        );
    }
}

export default App;
