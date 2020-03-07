import React from 'react';
import PictureName from "../PictureName";
import Picture from "../Picture/indexc";


class PictureWrapper extends React.Component {

    getCurrentPic = () => {
        let currPicIndex = this.props.state.currentPic;
        let arrLen = this.props.state.userData.pictures.length;
        if(currPicIndex < arrLen){
            let currPic = this.props.state.userData.pictures[currPicIndex];
            while(currPicIndex < arrLen && currPic.selected_option !== 0){
                if(currPicIndex >= arrLen){
                    currPic = this.props.state.userData.pictures[--currPicIndex];
                    return currPic;
                }
                ++currPicIndex;
                currPic = this.props.state.userData.pictures[currPicIndex];
            }
            //this.props.updateState({...this.props.state, currentPic: currPicIndex});
            return currPic;
        }
        return null;
    };

    render() {
        return (
            <div>{this.getCurrentPic() ?
                <div className="pictureWrapper">
                    <PictureName state={this.props.state} updateState={this.props.updateState}
                                 currPic={this.getCurrentPic()}/>
                    <Picture state={this.props.state} updateState={this.props.updateState}
                             currPic={this.getCurrentPic()}/>
                </div> : null
            }
            </div>
        );
    }
}

export default PictureWrapper;