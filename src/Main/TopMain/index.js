import React from 'react';
import Option from "../Option";
import twoMen from './icons/two.jpeg';
import threeMen from './icons/three.jpeg';
import multiMen from './icons/multi.jpeg';
import oneManPlus from './icons/plus.jpeg';
import oneManMinus from './icons/minus.jpeg';
import oneManShadow from './icons/shadow.jpeg';
import PictureWrapper from "./PictureWrapper";



class TopMain extends React.Component{

    render(){
        return(
            <div className="topMain">
                <PictureWrapper state={this.props.state} updateState={this.props.updateState}/>
                <div className="firstOp">
                    <img src={twoMen}  className="peopleIcon"/>
                    <Option state={this.props.state} updateState={this.props.updateState} num={1} text="מי שאפנה אליו במצב חירום"/>
                </div>
                <div className="secondOp">
                    <img src={threeMen} className="peopleIcon"/>
                    <Option state={this.props.state} updateState={this.props.updateState} num={2} text="חברים קרובים"/>
                </div>
                <div className="thirdOp">
                    <img src={multiMen} className="peopleIcon"/>
                    <Option state={this.props.state} updateState={this.props.updateState} num={3} text="חברים"/>
                </div>
                <div className="fourthOp">
                    <Option state={this.props.state} updateState={this.props.updateState} num={4} text="אנשים שאני בקשר פעיל איתם"/>
                    <img src={oneManPlus} className="peopleIcon"/>
                </div>
                <div className="fifthOP">
                    <Option state={this.props.state} updateState={this.props.updateState} num={5} text="אנשים שאני לא בקשר איתם"/>
                    <img src={oneManMinus} className="peopleIcon"/>
                </div>
                <div className="sixthOp">
                    <Option state={this.props.state} updateState={this.props.updateState} num={6} text="אנשים שאני לא באמת מכיר"/>
                    <img src={oneManShadow} className="peopleIcon"/>
                </div>
            </div>
        );
    }
}

export default TopMain;