import React from 'react';
import PictureName from "./PictureName";
import Picture from "./Picture";
import showListIcon from "./showGroup.jpeg";
import SubmitButton from "./SubmitButton";


class PictureWrapper extends React.Component {

    getCurrentPic = () => {
        let currPicIndex = this.props.state.currentPic;
        let arrLen = this.props.state.userData.pictures.length;

        if (currPicIndex < arrLen) {
            let currPic = this.props.state.userData.pictures[currPicIndex];

            while (currPicIndex < arrLen && currPic.selected_option !== 0) {
                ++currPicIndex;
                currPic = this.props.state.userData.pictures[currPicIndex];
            }

            if (currPicIndex === arrLen) {
                currPic = this.props.state.userData.pictures[--currPicIndex];
                return currPic;
            }
            return currPic;
        }
        return null;
    };

    render() {
        return (
            <div>
                {this.getCurrentPic() ?
                    <div className="pictureWrapper">
                        <PictureName state={this.props.state} updateState={this.props.updateState}
                                     currPic={this.getCurrentPic()}/>
                        <Picture state={this.props.state} updateState={this.props.updateState}
                                 currPic={this.getCurrentPic() ? this.getCurrentPic() : null}/>
                    </div> :
                    <div className="pictureWrapper">
                        <div id="empty"></div>
                        <div className="beforeSubmit">
                            <div>!כל הכבוד</div>
                            <div>.מיינת את כל החברים</div>
                            <div>אפשר עוד לשנות ע"י</div>
                            <div>: לחיצה על הכפתור</div>
                            <span><img src={showListIcon} height={18} width={14}/></span>
                            <div>וכשסיימת ללחוץ</div>
                            <div><SubmitButton state={this.props.state}
                                               updateState={this.props.updateState}>שליחה</SubmitButton></div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default PictureWrapper;