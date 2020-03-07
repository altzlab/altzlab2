import React from 'react';
import Loading from "./Loading";
import TopMain from "./TopMain";
import Backwards from "./Backwards";

class Main extends React.Component{
    render(){
        return(
            <div className="main">
                <TopMain state={this.props.state} updateState={this.props.updateState}/>
                <Loading state={this.props.state} updateState={this.props.updateState}/>
                <Backwards state={this.props.state} updateState={this.props.updateState}/>
            </div>
        );
    }
}

export default Main;
