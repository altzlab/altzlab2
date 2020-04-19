import React from 'react';
import {Line} from 'rc-progress';

class Loading extends React.Component {

    calcLoading = () => {
        let selected = this.countSelectedPictures();
        return Math.round((selected) / (this.props.state.userData.pictures.length) * 100);
    };

    countSelectedPictures = () => {
        let selectedPictures = 0;
        let counter = 0;
        let picturesLen = this.props.state.userData.pictures.length;

        while (counter < picturesLen) {
            if (this.props.state.userData.pictures[counter].selected_option !== 0) {
                ++selectedPictures;
            }
            ++counter;
        }
        return selectedPictures;
    };

    render() {
        return (
            <div className="loadingContainer">
                <div>
                    <Line
                        percent={this.calcLoading()}
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