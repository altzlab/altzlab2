import React from 'react';
import {Line} from 'rc-progress';

class Loading extends React.Component {

    calcLoading = () => {
        if(this.props.state.currentPic === 0){
            return 0;
        }
        return Math.round((this.props.state.currentPic + 1) / (this.props.state.userData.pictures.length + 1) * 100);
    };

    render() {
        return (
            <div className="loadingContainer">
                <div >
                    <Line
                        percent={this.calcLoading()}
                        //strokeWidth="4"
                        strokeColor="#111826"
                        className="loading"
                    >
                    </Line>
                    <div className="loadingPercentage">{this.calcLoading()}%</div>
                </div>
            </div>
        );
    }
}

export default Loading;